"use client";

import React, { useState, useEffect } from "react";
import Container from "./container";
import Button from "./button";
import { AccentText } from "./accent-text";
import SecurityTimeIcon from "@/components/icons/security-time-icon";

const PASSWORD = "remmet2024"; // Change this to your desired password
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setAuthenticated(true);
      localStorage.setItem(STORAGE_KEY, "true");
    } else {
      setError("Nieprawidłowe hasło");
      setInput("");
    }
  };

  if (authenticated) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">
      <Container className="max-w-sm w-full bg-background rounded-lg shadow-lg p-8 flex flex-col items-center gap-6">
        <SecurityTimeIcon size={48} />
        <AccentText className="text-center">
          Wprowadź hasło, aby uzyskać dostęp
        </AccentText>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
            }}
            placeholder="Hasło"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-brand-blue-200 focus:ring-2 focus:ring-brand-blue-100 outline-none bg-white text-gray-900 text-md"
            autoFocus
          />
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <Button type="submit" className="w-full">
            Zatwierdź
          </Button>
        </form>
      </Container>
    </div>
  );
}
