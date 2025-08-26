"use client";

import React, { useState, useRef, useEffect, useContext } from "react";
import { User, X, Send, Trash2 } from "lucide-react";
import { Context } from "../contexts/ChatbotContext";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const context = useContext(Context);
  const {
    input,
    setInput,
    onSent,
    loading,
    prevPrompts,
    prevResults,
    showResult,
    resultData,
    newChat,
  } = context;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [prevPrompts, prevResults, resultData]);

  const handleSendMessage = () => {
    if (input.trim()) {
      onSent();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Convert context data to messages format for display
  const messages = [];

  // Add initial greeting if no conversation has started
  if (prevPrompts.length === 0 && !showResult) {
    messages.push({
      id: "greeting",
      text: "Hello! I'm MAKKN Assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    });
  }

  // Add previous conversation (excluding the last one if it's currently being animated)
  const showAnimated = loading || (showResult && resultData && prevResults.length > 0);
  const resultsToShow = showAnimated ? prevResults.length - 1 : prevResults.length;

  for (let i = 0; i < prevPrompts.length; i++) {
    messages.push({
      id: `user-${i}`,
      text: prevPrompts[i],
      isUser: true,
      timestamp: new Date(),
    });

    // Only show completed results, not the one being animated
    if (i < resultsToShow && prevResults[i]) {
      messages.push({
        id: `bot-${i}`,
        text: prevResults[i],
        isUser: false,
        timestamp: new Date(),
      });
    }
  }

  // Add current loading or animated result
  if (loading) {
    messages.push({
      id: "loading",
      text: "Thinking...",
      isUser: false,
      timestamp: new Date(),
    });
  } else if (showResult && resultData) {
    messages.push({
      id: "current-result",
      text: resultData,
      isUser: false,
      timestamp: new Date(),
    });
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {!isExpanded ? (
        // Circle button
        <button
          onClick={() => setIsExpanded(true)}
          className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: "#6320ce" }}
        >
          <User className="w-6 h-6 text-white" />
        </button>
      ) : (
        // Expanded chatbot box
        <div className="w-full max-w-md h-auto max-h-[450px] bg-white/30 backdrop-blur-xl rounded-lg shadow-2xl border border-gray-200/50 flex flex-col m-4 sm:m-0">
          {/* Header */}
          <div
            className="flex items-center justify-between p-4 border-b border-gray-200/50 text-white rounded-t-xl"
            style={{ backgroundColor: "#6320ce" }}
          >
            <h3 className="font-semibold">Chat Support</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={newChat}
                className="hover:bg-white/20 p-1 rounded"
                title="Clear chat"
              >
                <Trash2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsExpanded(false)}
                className="hover:bg-white/20 p-1 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages area */}
          <div className="flex-1 max-h-96 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.isUser ? "text-white" : "bg-gray-100 text-gray-800"
                  }`}
                  style={message.isUser ? { backgroundColor: "#6320ce" } : {}}
                >
                  {message.isUser ? (
                    message.text
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: message.text }} />
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-4 border-t border-gray-200/50 bg-white/20 backdrop-blur-sm rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/70 backdrop-blur-sm"
                disabled={loading}
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 text-white rounded-lg transition-colors"
                style={{ backgroundColor: "#6320ce" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#5a1cbb")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#6320ce")
                }
                disabled={loading || !input.trim()}
              >
                {loading ? (
                  <div className="w-4 h-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}