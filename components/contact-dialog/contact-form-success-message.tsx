"use client";

import { useRouter } from "next/navigation";
import Button from "../ui/button";

export default function ContactFormSuccessMessage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 min-h-[500px]">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-5xl font-medium">Dziękujemy!</h1>
        <p className="text-center text-gray-500">
          Wypełniłeś formularz kontaktowy. Odezwiemy się wkrótce!
        </p>
      </div>
      <Button onClick={() => router.push("/")}>Wracam do strony głównej</Button>
    </div>
  );
}
