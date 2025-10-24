"use client";
import { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBoard() {
  const chatData = {
    club: {
      name: "CLUB EXCEL",
      about:
        "CLUB EXCEL is a student-driven tech club at NIST University focusing on coding, innovation, and collaboration.",
      events: ["Code Crusade", "CipherChase", "TechTalks", "Workshops"],
      contact: "clubexcel@nist.edu.in",
    },
    developers: {
      web: {
        name: "Anshu Kumar",
        domain: "Web Development",
        skills: ["Next.js", "React", "Tailwind", "Node.js"],
        contact: "anshu@example.com",
      },
      ai: {
        name: "Sai Sarthk",
        domain: "AI/ML",
        skills: ["Python", "TensorFlow", "Scikit-Learn"],
        contact: "rahul@example.com",
      },
      cyber: {
        name: "Akash Kumar",
        domain: "Cybersecurity",
        skills: ["Network Security", "Pentesting", "Linux"],
        contact: "neha@example.com",
      },
    },
  };

  type Message = { sender: string; text: string };
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getGeminiResponse = async (prompt: string): Promise<string> => {
    try {
      const res = await fetch("/api/gemini-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error from Gemini API:", errorData);
        return `Error: ${errorData.text || "An unknown error occurred."}`;
      }

      const data = await res.json();
      return data.text;
    } catch (err) {
      console.error("Error fetching from Gemini API:", err);
      return "Error: The chatbot is not responding right now.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const currentInput = input;
    setInput("");
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const text = currentInput.toLowerCase();
      let botReply = "";

      if (text.includes("club")) botReply = chatData.club.about;
      else if (text.includes("event"))
        botReply = `Our events: ${chatData.club.events.join(", ")}`;
      else if (text.includes("contact"))
        botReply = `You can reach us at ${chatData.club.contact}`;
      else if (text.includes("web developer"))
        botReply = `👨‍💻 ${
          chatData.developers.web.name
        } — Skills: ${chatData.developers.web.skills.join(", ")}`;
      else if (text.includes("ai developer"))
        botReply = `🤖 ${
          chatData.developers.ai.name
        } — Skills: ${chatData.developers.ai.skills.join(", ")}`;
      else if (text.includes("cyber developer"))
        botReply = `🛡️ ${
          chatData.developers.cyber.name
        } — Skills: ${chatData.developers.cyber.skills.join(", ")}`;
      else botReply = await getGeminiResponse(currentInput);

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error processing bot reply:", error);
      const errorMsg = {
        sender: "bot",
        text: "Sorry, something went wrong.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 bg-blue-600 p-4 rounded-full shadow-lg text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-80 bg-black text-white rounded-2xl shadow-2xl border border-blue-400 overflow-hidden"
          >
            <div className="bg-black px-4 py-3 font-bold text-center border-b border-white">
              💬 CLUB EXCEL ChatBot
            </div>

            <div className="h-64 overflow-y-auto p-3 bg-black">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`my-2 ${
                    msg.sender === "user"
                      ? "text-right text-white"
                      : "text-left text-green-300"
                  }`}
                >
                  <p className="inline-block px-3 py-2 rounded-xl text-sm max-w-[85%]">
                    <b>{msg.sender === "user" ? "You" : "Bot"}:</b> {msg.text}
                  </p>
                </div>
              ))}
              {isLoading && (
                <p className="text-center text-yellow-300 text-sm">
                  Bot is typing...
                </p>
              )}
              <div ref={chatEndRef}></div>
            </div>

            <div className="flex border-t border-white">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about Club, Devs, or Excel..."
                className="flex-1 bg-black text-white p-2 text-sm outline-none font-serif"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 px-4 text-sm font-semibold hover:bg-blue-700 transition"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
