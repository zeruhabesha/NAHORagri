"use client"
import React, { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { useTranslations } from "next-intl"

export default function ChatButton() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; from: "user" | "bot" }[]>([])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const t = useTranslations()

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, open])

  const handleSend = () => {
    if (!input.trim()) return
    setMessages((msgs) => [...msgs, { text: input, from: "user" }])
    setInput("")
    // Optionally, add a fake bot reply
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { text: t("thankYouMessage"), from: "bot" },
      ])
    }, 800)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full shadow-lg p-4 flex items-center justify-center hover:bg-primary/90 transition-colors"
        onClick={() => setOpen(true)}
        aria-label="Open chat"
        style={{ display: open ? "none" : "flex" }}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end pointer-events-none">
          <div className="w-full h-full bg-black/30 absolute top-0 left-0" onClick={() => setOpen(false)} />
          <div className="relative m-6 w-full max-w-xs sm:max-w-sm bg-background rounded-xl shadow-2xl flex flex-col pointer-events-auto" style={{ minHeight: 400, maxHeight: 500 }}>
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-semibold">{t("chatWithUs")}</span>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-muted-foreground hover:text-primary">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-muted/40" style={{ minHeight: 200 }}>
              {messages.length === 0 && (
                <div className="text-muted-foreground text-sm text-center mt-8">{t("howCanWeHelp")}</div>
              )}
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`rounded-lg px-3 py-2 text-sm max-w-[80%] ${msg.from === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form
              className="flex items-center gap-2 p-3 border-t"
              onSubmit={e => {
                e.preventDefault()
                handleSend()
              }}
            >
              <input
                type="text"
                className="flex-1 rounded-lg border px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t("typeMessage")}
                value={input}
                onChange={e => setInput(e.target.value)}
                autoFocus
              />
              <button type="submit" className="p-2 text-primary hover:text-primary/80" aria-label="Send">
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
} 