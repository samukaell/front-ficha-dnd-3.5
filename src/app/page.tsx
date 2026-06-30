"use client";

import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log("Login with", email, password);
  };

  return (
    <div className="flex min-h-[100dvh] w-full items-center justify-center bg-gray-50 p-0 sm:p-4 md:p-8">
      <div className="relative flex w-full max-w-5xl overflow-hidden sm:rounded-3xl bg-white shadow-2xl min-h-[100dvh] sm:min-h-0">
        
        {/* Left Side: Branding / Visual (Tablet & Desktop) */}
        <div className="hidden md:flex w-2/5 lg:w-1/2 flex-col bg-primary p-8 lg:p-14 text-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white opacity-10 blur-3xl"></div>
          
          <div className="relative z-10 text-center mt-4">
            <h1 className="text-7xl lg:text-9xl font-black italic tracking-tighter drop-shadow-lg leading-none">20</h1>
            <p className="mt-4 text-lg lg:text-2xl font-medium text-white/95 leading-snug">
              Sua jornada começa com um acerto crítico.
            </p>
          </div>
          
          <div className="relative z-10 flex-1 flex items-center justify-center my-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="h-48 w-48 lg:h-72 lg:w-72 opacity-30 drop-shadow-2xl transition-transform hover:scale-105 duration-700">
              <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/>
              <line x1="13" x2="19" y1="19" y2="13"/>
              <line x1="16" x2="20" y1="16" y2="20"/>
              <line x1="19" x2="21" y1="21" y2="19"/>
              <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/>
              <line x1="5" x2="9" y1="14" y2="18"/>
              <line x1="7" x2="4" y1="17" y2="20"/>
              <line x1="3" x2="5" y1="19" y2="21"/>
            </svg>
          </div>
          
          <div className="relative z-10 mt-auto text-center">
            <p className="text-sm lg:text-base font-medium text-white/80">
              O gerenciador definitivo para fichas de D&D 3.5.
            </p>
          </div>
        </div>

        {/* Right Side: Form (All Devices) */}
        <div className="flex w-full flex-col justify-center p-6 sm:p-12 md:w-3/5 lg:w-1/2">
          <div className="mx-auto flex w-full max-w-sm flex-col justify-center">
            
            {/* Mobile Logo */}
            <div className="mb-10 text-center md:hidden mt-8 sm:mt-0 flex flex-col items-center">
              <div className="flex flex-col items-center text-primary">
                <h1 className="text-7xl font-black italic drop-shadow-sm leading-none">20</h1>
              </div>
              <p className="mt-2 text-sm text-gray-500 font-medium">Acerto Crítico em Gerenciamento</p>
            </div>

            <div className="mb-8 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Bem-vindo de volta</h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Entre com sua conta para acessar suas fichas.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700" htmlFor="email">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-3.5 text-base sm:text-sm outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700" htmlFor="password">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-3.5 text-base sm:text-sm outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                  placeholder="••••••••"
                  required
                />
                <div className="mt-2 text-right">
                  <a href="#" className="text-sm sm:text-xs font-semibold text-primary hover:text-primary-hover transition-colors">
                    Esqueceu a senha?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-xl bg-primary px-4 py-3.5 sm:py-3 text-base sm:text-sm font-bold text-white transition-all hover:bg-primary-hover hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-primary/30"
              >
                Entrar
              </button>
            </form>

            <div className="relative mt-10 mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-500 font-medium">Ou continue com</span>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3.5 sm:py-3 text-base sm:text-sm font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-100 active:scale-[0.98]"
              >
                <svg className="h-5 w-5 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Google
              </button>
            </div>
            
            <p className="mt-10 sm:mt-8 text-center text-sm sm:text-base text-gray-600">
              Não tem uma conta?{" "}
              <a href="#" className="font-bold text-primary hover:text-primary-hover transition-colors">
                Criar conta
              </a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
