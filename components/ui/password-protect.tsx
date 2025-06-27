"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "./container";

const PASSWORD = "rem-met";
const STORAGE_KEY = "remmet-authenticated";

export default function PasswordProtect({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAuthenticated(localStorage.getItem(STORAGE_KEY) === "true");
    }
  }, []);

  // Handle input change and auto-submit if correct
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    setError("");
    if (value === PASSWORD) {
      setAuthenticated(true);
      localStorage.setItem(STORAGE_KEY, "true");
    }
  };

  // Handle Enter key for submission
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input === PASSWORD) {
      setAuthenticated(true);
      localStorage.setItem(STORAGE_KEY, "true");
    } else if (e.key === "Enter") {
      setError("Nieprawidłowe hasło");
      setInput("");
    }
  };

  if (authenticated) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <Container className="max-w-sm w-full rounded-lg shadow-lg flex flex-col items-center gap-6 z-1">
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="password"
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-brand-blue-200 focus:ring-2 focus:ring-brand-blue-100 outline-none bg-white text-gray-900 text-md"
            autoFocus
          />
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
        </form>
      </Container>
      <Image
        src="/images/rem-met-logo-pattern.svg"
        alt="REM-MET Logo Wzór Tło"
        fill
        className="object-cover z-0"
      />
    </div>
  );
}
