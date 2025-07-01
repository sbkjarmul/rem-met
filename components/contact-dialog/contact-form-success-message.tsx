"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";
import Button from "../ui/button";

export default function ContactFormSuccessMessage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full  gap-6">
      <div className="relative h-[200px] w-[200px]">
        <Image
          src="/images/icons/success-pixel-icon.svg"
          alt="success icon"
          fill
        />
      </div>
      <h1 className="text-center">Dziękujemy</h1>
      <p className="text-center">
        Wypełniłeś formularz kontaktowy. Odezwiemy się wkrótce!
      </p>
      <Button onClick={() => router.push("/")}>Wracam do strony głównej</Button>
    </div>
  );
}
