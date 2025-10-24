import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Airtable from "airtable";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const body = await req.json();
    const db = client.db(process.env.MONGODB_DB);
    const contacts = db.collection("registrations"); // 🟢 Collection name fixed
    const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN}).base(
      process.env.AIRTABLE_BASE_ID
    ); // airtable connection

    const result = await contacts.insertOne({
      ...body,
      timestamp: new Date(),
      createdAt: Date.now(),
    });
    const groupLink = `${body.event}` == "Code crusade 4.0" ? "https://chat.whatsapp.com/CaQATAdvxY92GHdOUzyCAo?mode=wwt" : "https://chat.whatsapp.com/IjriArmhgAGIQXtD6EX6Io?mode=wwt"; // for whatshapp group link for spacifice events
    //email for send thank for registration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: `"CLUB EXCEL" <${process.env.EMAIL_USER}>`,
      to: body.pemail,
      subject: `Thanks for Registration ${body.event}`,
      text: `Hi ${body.name},\n\nThank you for Registration in ${body.event}.\n\nJoin our WhatsApp Group for updates:\n${groupLink}\n\nRegards,\nCLUB EXCEL Team\n\n`,
    });
    await transporter.sendMail({
      from: `"CLUB EXCEL" <${process.env.EMAIL_USER}>`,
      to: body.email,
      subject: `Thanks for Registration ${body.event}`,
      text: `Hi ${body.name},\n\nThank you for Registration in ${body.event}.\n\nJoin our WhatsApp Group for updates:\n${groupLink}\n\nRegards,\nCLUB EXCEL Team\n\n`,
    });

    //airtable send data    
    const airTableName=(body.event == "Code crusade 4.0") ? process.env.AIRTABLE_TABLE_NAME1 : process.env.AIRTABLE_TABLE_NAME2; 
    if(airTableName == "Code crusade 4.0" ){
      const record = await base(airTableName).create([
      {
        fields: {
          Name: body.name,
          "NIST Email": body.email,
          "Personal Email": body.pemail,
          "Roll Number": body.rollNumber,
          "Registration Number": body.registrationNumber,
          Branch: body.branch,
          "Event Name": body.event,
          Accommodation: body.accommodation,
          HackerRank:body.hackerRank || "",
        },
      },
    ]);
    }
    else{
      const record = await base(airTableName).create([
      {
        fields: {
          Name: body.name,
          "NIST Email": body.email,
          "Personal Email": body.pemail,
          "Roll Number": body.rollNumber,
          "Registration Number": body.registrationNumber,
          Branch: body.branch,
          "Event Name": body.event,
          Accommodation: body.accommodation,
        },
      },
    ]);
    }
    
    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error saving contact data to MongoDB:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
