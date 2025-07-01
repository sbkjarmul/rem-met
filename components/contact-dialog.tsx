"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ContactBox from "./contact-box";
import Image from "next/image";
import useTranslations from "@/hooks/useTranslations";
import Link from "next/link";

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
  triggerButton: React.ReactNode;
}

export function ContactDialog({ triggerButton }: ContactDialogProps) {
  const [open, setOpen] = React.useState(false);

  const t = useTranslations("contactDialog");

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{triggerButton}</SheetTrigger>

      <SheetContent
        side="top"
        className="bg-radial from-brand-blue-200 to-80% to-black w-screen pt-20 border-none h-screen"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>REM-MET</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col md:flex-row">
          <div className="px-10 py-20 w-1/3 hidden md:flex flex-col justify-start z-1 gap-6">
            <SheetDescription className="text-gray-100 text-3xl font-medium leading-tight">
              {t("title")}
            </SheetDescription>

            <ContactItem title="Telefon" value="+(48) 666 669 996" />
            <ContactItem title="Email" value="biuro@rem-met.com" />
            <ContactItem title="Adres" value="Żytnia 17, 37-450 Stalowa Wola" />
            <GoogleMapLink />
          </div>

          <div className="w-full md:w-2/3 p-8 z-1">
            <div className="flex-1 p-10 gap-10 flex flex-col justify-center bg-gray-100">
              <h1 className="text-6xl font-medium text-center text-gray-900">
                {t("get")}{" "}
                <span className="text-brand-blue-100">{t("free")}</span>{" "}
                {t("estimation")}
              </h1>
              <p className="text-center text-gray-500 mb-8">
                {t("description")}
              </p>

              <ContactBox />
            </div>
          </div>

          <Image
            src="/images/rem-met-contact-dialog-background.svg"
            alt="REM-MET Logo"
            fill
            className="absolute top-0 left-0 object-cover z-0"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
