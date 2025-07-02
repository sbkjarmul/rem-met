"use client";

import Button from "../ui/button";

interface ContactFormSuccessMessageProps {
  onClose: () => void;
}

export default function ContactFormSuccessMessage({
  onClose,
}: ContactFormSuccessMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 min-h-[500px]">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-5xl font-medium">Dziękujemy!</h1>
        <p className="text-center text-gray-500">
          Wypełniłeś formularz kontaktowy. Odezwiemy się wkrótce!
        </p>
      </div>
      <Button onClick={onClose}>Wracam do strony głównej</Button>
    </div>
  );
}
