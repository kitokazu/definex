"use client";

import React, { useState } from "react";
import { Mail, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("お問い合わせありがとうございます。担当者よりご連絡いたします。");
      setIsSubmitting(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 italic tracking-tight uppercase">
            Contact
          </h2>
          <p className="text-slate-400 text-lg">
            ご質問・ご相談はお気軽にどうぞ
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              DEFINE ACADEMYに関するお問い合わせ、無料体験のご相談など、お気軽にご連絡ください。
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-[#00afcc]/10 rounded-lg text-[#00afcc] mr-4 border border-[#00afcc]/20">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <p className="text-slate-400">info@definex.jp</p>
                </div>
              </div>
            </div>

          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="academy-name"
                    className="block text-sm font-medium text-slate-400 mb-1"
                  >
                    お名前
                  </label>
                  <input
                    type="text"
                    id="academy-name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-[#00afcc] focus:ring-2 focus:ring-[#00afcc]/20 outline-none transition-all placeholder-slate-500"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label
                    htmlFor="academy-email"
                    className="block text-sm font-medium text-slate-400 mb-1"
                  >
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="academy-email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-[#00afcc] focus:ring-2 focus:ring-[#00afcc]/20 outline-none transition-all placeholder-slate-500"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="academy-subject"
                    className="block text-sm font-medium text-slate-400 mb-1"
                  >
                    件名
                  </label>
                  <input
                    type="text"
                    id="academy-subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-[#00afcc] focus:ring-2 focus:ring-[#00afcc]/20 outline-none transition-all placeholder-slate-500"
                    placeholder="無料体験について"
                  />
                </div>
                <div>
                  <label
                    htmlFor="academy-message"
                    className="block text-sm font-medium text-slate-400 mb-1"
                  >
                    お問い合わせ内容
                  </label>
                  <textarea
                    id="academy-message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-[#00afcc] focus:ring-2 focus:ring-[#00afcc]/20 outline-none transition-all resize-none placeholder-slate-500"
                    placeholder="ご自由にご記入ください"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center py-4 px-6 rounded-lg font-bold transition-all ${
                    isSubmitting
                      ? "bg-slate-700 cursor-not-allowed text-slate-500"
                      : "bg-[#00afcc] hover:bg-[#00afcc]/90 text-white shadow-[0_0_15px_rgba(0,175,204,0.3)] hover:shadow-[0_0_20px_rgba(0,175,204,0.6)]"
                  }`}
                >
                  {isSubmitting ? "送信中..." : "メッセージを送信"}
                  {!isSubmitting && <Send size={18} className="ml-2" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
