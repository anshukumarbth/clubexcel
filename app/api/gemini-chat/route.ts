import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { text: "Gemini API key is not configured." },
        { status: 500 }
      );
    }

    // ✅ Use the correct model and endpoint
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error from Gemini API:", errorData);
      return NextResponse.json(
        { text: "An error occurred with the Gemini API." },
        { status: response.status }
      );
    }

    const data = await response.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I couldn't process that, please try again.";

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Error in Gemini chat route:", error);
    return NextResponse.json(
      { text: "Error: The chatbot is currently unavailable." },
      { status: 500 }
    );
  }
}
