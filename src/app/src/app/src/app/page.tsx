'use client'

import { motion } from 'framer-motion'
import { Bot, Zap, Brain, Sparkles, ArrowDown, MessageCircle } from 'lucide-react'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Подключаем твой бот с твоим Groq-ключом
    const script1 = document.createElement('script')
    script1.src = "https://cdn.botpress.cloud/webchat/v2/inject.js"
    document.body.appendChild(script1)

    const script2 = document.createElement('script')
    script2.src = "https://mediafiles.botpress.cloud/c4bc3d34-d845-f4d0-b2e4-f08b4e80c234/webchat/v2/config.js"
    script2.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Задай любой вопрос...",
        "botConversationDescription": "Я @mmrls_bot — умнее GPT-4, быстрее Claude",
        "botId": "c4bc3d34-d845-f4d0-b2e4-f08b4e80c234",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v2",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "c4bc3d34-d845-f4d0-b2e4-f08b4e80c234",
        "webhookId": "c4bc3d34-d845-f4d0-b2e4-f08b4e80c234",
        "lazySocket": true,
        "themeName": "prism",
        "frontendVersion": "v2",
        "theme": "dark",
        "themeColor": "#a78bfa",
        "allowedOrigins": [],
        "config": {
          "llm": {
            "model": "llama-3.1-70b-versatile",
            "apiKey": "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",
            "baseUrl": "https://api.groq.com/openai/v1"
          }
        }
      })
    }
    document.body.appendChild(script2)
  }, [])

  return (
    <>
      {/* Герой */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/30" />
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            @mmrls_bot
          </motion.h1>
          
          <p className="text-2xl md:text-4xl mb-12 opacity-90">
            Умнее, чем ты думаешь.<br />
            Быстрее, чем ты ожидал.<br />
            Бесплатно навсегда.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a href="https://t.me/mmrls_bot" className="group px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl text-2xl font-bold hover:scale-110 transition transform">
              Открыть в Telegram <Zap className="inline ml-3 group-hover:animate-pulse" />
            </a>
            <button 
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="px-12 py-6 border-4 border-purple-500 rounded-3xl text-2xl hover:bg-purple-500/20 transition"
            >
              Чат здесь <ArrowDown className="inline ml-3 animate-bounce" />
            </button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div whileHover={{ scale: 1.1 }} className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-purple-500/30">
              <Brain className="w-16 h-16 mx-auto mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold">Llama 3.1 70B</h3>
              <p className="opacity-80">Самая мощная открытая модель 2025</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-pink-500/30">
              <Zap className="w-16 h-16 mx-auto mb-4 text-pink-400" />
              <h3 className="text-2xl font-bold">Groq = молния</h3>
              <p className="opacity-80">Ответ за 0.3 секунды</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-cyan-500/30">
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-2xl font-bold">0 ₽ навсегда</h3>
              <p className="opacity-80">Никаких подписок</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Чат на весь экран */}
      <section className="min-h-screen flex flex-col bg-gradient-to-b from-black to-purple-950/20">
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Попробуй прямо сейчас
            </h2>
            <div id="webchat" className="h-screen max-h-screen rounded-3xl overflow-hidden shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-12 bg-black/50 backdrop-blur">
        <div className="text-center">
          <p className="text-xl mb-4">Сделано с ❤️ в 2025 году</p>
          <p className="opacity-60">@mmrls_bot — твой личный Grok</p>
        </div>
      </footer>
    </>
  )
}
