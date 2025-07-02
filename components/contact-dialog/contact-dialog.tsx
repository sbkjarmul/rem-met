"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useTranslations from "@/hooks/useTranslations";
import ContactFormWrapper from "./contact-form-wrapper";

interface ContactItemProps {
  title: string;
  value: string;
}

const ContactItem = ({ title, value }: ContactItemProps) => (
  <div className="flex flex-col">
    <div className="text-gray-500 text-sm">{title}</div>
    <div className="text-lg font-medium text-gray-200">{value}</div>
  </div>
);

const GoogleMapLink = () => (
  <Link
    href="https://maps.google.com/?q=Żytnia+17,+37-450+Stalowa+Wola"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-gray-100 block"
  >
    Zobacz na Google Maps
  </Link>
);

interface ContactDialogProps {
  triggerButton: ReactNode;
}

export function ContactDialog({ triggerButton }: ContactDialogProps) {
  const [open, setOpen] = useState(false);

  const t = useTranslations("contactDialog");

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{triggerButton}</SheetTrigger>

      <SheetContent
        side="top"
        className="bg-gray-100 md:bg-radial from-brand-blue-200 to-80% to-black w-screen pt-20 border-none h-screen overflow-y-auto"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Formularz kontaktowy REM-MET</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col lg:flex-row flex-1">
          <div className="px-10 py-20 lg:w-1/3 hidden lg:flex flex-col justify-start z-1 gap-6">
            <SheetDescription className="text-gray-100 text-4xl font-medium leading-tight whitespace-pre-line">
              {t("title")}
            </SheetDescription>

            <ContactItem title="Telefon" value="+(48) 666 669 996" />
            <ContactItem title="Email" value="biuro@rem-met.com" />
            <ContactItem title="Adres" value="Żytnia 17, 37-450 Stalowa Wola" />
            <GoogleMapLink />
          </div>

          <div className="w-full lg:w-2/3 p-8 z-1">
            <div className="h-full p-0 md:p-10 gap-6 md:gap-10 flex flex-col justify-start items-center bg-gray-100 md:shadow-lg">
              <h1 className="text-3xl md:text-6xl font-medium text-center text-gray-900">
                {t("get")}{" "}
                <span className="text-brand-blue-100">{t("free")}</span>{" "}
                {t("estimation")}{" "}
                <span className="inline md:hidden">{t("now")}!</span>
              </h1>

              <p className="hidden md:block text-center text-lg text-gray-500 max-w-md">
                {t("description")}
              </p>
              <p className="text-center text-sm text-gray-500 block md:hidden">
                {t("description.mobile")}
              </p>

              <ContactFormWrapper />
            </div>
          </div>

          <Image
            src="/images/rem-met-contact-dialog-background.svg"
            alt="REM-MET Logo"
            fill
            className="absolute top-0 left-0 object-cover z-0 hidden md:block"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
