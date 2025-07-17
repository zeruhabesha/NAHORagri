"use client";
import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

export function ChatWidget() {
  const t = useTranslations();
  const faq = Array.isArray(t.raw?.("chatbot.faq")) ? t.raw("chatbot.faq") : [];
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: t("chatbot.welcome") }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  function handleSend(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: getBotResponse(input, t, faq) }
      ]);
    }, 500);
  }

  return (
    <>
      {!open && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:bg-primary/90 transition"
          onClick={() => setOpen(true)}
          aria-label={t("chatbot.open")}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[95vw] bg-background border rounded-xl shadow-2xl flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-bold">{t("chatbot.title")}</span>
            <button onClick={() => setOpen(false)} aria-label={t("chatbot.close")}
              className="text-muted-foreground hover:text-primary">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2" style={{ minHeight: 200, maxHeight: 320 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${msg.from === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSend} className="flex border-t p-2 gap-2">
            <input
              className="flex-1 rounded border px-3 py-2 text-sm outline-none"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={t("chatbot.placeholder")}
              autoComplete="off"
              aria-label={t("chatbot.inputLabel")}
            />
            <Button type="submit" size="sm">{t("chatbot.send")}</Button>
          </form>
        </div>
      )}
    </>
  );
}

function getBotResponse(input: string, t: ReturnType<typeof useTranslations>, faq: Array<{q: string, a: string}>): string {
  const text = input.toLowerCase();
  // Try to find a close FAQ match
  if (Array.isArray(faq)) {
    try {
      let bestScore = 0;
      let bestAnswer: string | undefined = undefined;
      for (const item of faq) {
        const q = item.q.toLowerCase();
        // Simple scoring: count how many words from input are in the question
        let score = 0;
        for (const word of text.split(/\s+/)) {
          if (q.includes(word) && word.length > 2) score++;
        }
        if (score > bestScore) {
          bestScore = score;
          bestAnswer = item.a;
        }
      }
      if (bestScore > 0 && bestAnswer) return bestAnswer;
    } catch (e) {
      // Defensive: ignore FAQ errors
    }
  }
  // Fallback to previous rules
  if (text.includes("hello") || text.includes("hi") || text.includes("bonjour") || text.includes("你好")) {
    return t("chatbot.greeting");
  }
  if (text.includes("product") || text.includes("coffee") || text.includes("sesame")) {
    return t("chatbot.products");
  }
  if (text.includes("contact") || text.includes("email") || text.includes("reach")) {
    return t("chatbot.contact");
  }
  if (text.includes("thanks") || text.includes("merci") || text.includes("谢谢")) {
    return t("chatbot.thanks");
  }
  return t("chatbot.default");
} 