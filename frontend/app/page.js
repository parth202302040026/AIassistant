"use client";

import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  function sendMessage() {
    if (!question.trim()) return;

    setMessages([
      ...messages,
      {
        role: "user",
        content: question,
      },
    ]);

    setQuestion("");
  }

  return (
    <main className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="hidden md:block w-64 bg-white border-r p-5">
        <h1 className="text-xl font-bold">
          Parth AI
        </h1>

        <button className="mt-6 w-full bg-black text-white rounded-lg py-2">
          + New Chat
        </button>
      </aside>

      {/* Chat area */}
      <section className="flex-1 flex flex-col">

        {/* Header */}
        <header className="h-16 bg-white border-b px-6 flex items-center">
          <div>
            <h2 className="font-semibold">
              Parth Mishra AI
            </h2>

            <p className="text-sm text-green-600">
              ● Available
            </p>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6">

          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center text-center">
              <div>
                <h2 className="text-2xl font-bold">
                  Hi, I'm Parth's AI assistant.
                </h2>

                <p className="mt-2 text-gray-500">
                  Ask me about my skills, projects, education or experience.
                </p>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                      message.role === "user"
                        ? "bg-black text-white"
                        : "bg-white border"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Input */}
        <div className="bg-white border-t p-4">
          <div className="max-w-3xl mx-auto flex gap-3">

            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask about Parth..."
              className="flex-1 border rounded-xl px-4 py-3 outline-none"
            />

            <button
              onClick={sendMessage}
              className="bg-black text-white px-5 rounded-xl"
            >
              Send
            </button>

          </div>
        </div>

      </section>

    </main>
  );
}