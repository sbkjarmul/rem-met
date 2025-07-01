"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContactFormData, contactFormSchema, defaultValues } from "./schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Button from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { startTransition } from "react";
import { mapContactFormDataToFormData } from "./utils";
import { cn } from "@/lib/utils";

export const ContactFormLabel = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <FormLabel className={cn("text-gray-500 font-normal", className)}>
      {children}
      <span className="text-gray-500">*</span>
    </FormLabel>
  );
};

export const ContactFormItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <FormItem
      className={cn("flex flex-col gap-2 items-start justify-start", className)}
    >
      {children}
    </FormItem>
  );
};

interface ContactFormProps {
  formAction: (payload: FormData) => void;
  isLoading: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formAction,
  isLoading,
}: ContactFormProps) => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  const onSubmit = async (contactFormData: ContactFormData) => {
    startTransition(() => {
      formAction(mapContactFormDataToFormData(contactFormData));
    });
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 grid-rows-auto md:grid-rows-[1fr_1fr_200px] gap-6 md:gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <ContactFormItem>
              <ContactFormLabel>Imię i nazwisko</ContactFormLabel>
              <FormControl>
                <Input placeholder="Jak się nazywasz" {...field} />
              </FormControl>
              <FormMessage />
            </ContactFormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <ContactFormItem>
              <ContactFormLabel>Email</ContactFormLabel>
              <FormControl>
                <Input placeholder="Gdzie możemy odpisać" {...field} />
              </FormControl>
              <FormMessage />
            </ContactFormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <ContactFormItem>
              <ContactFormLabel>Nazwa firmy</ContactFormLabel>
              <FormControl>
                <Input
                  placeholder="Twoja marka, projekt lub startup"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </ContactFormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <ContactFormItem>
              <ContactFormLabel>Numer telefonu</ContactFormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Twoj numer telefonu"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </ContactFormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <ContactFormItem className="col-span-2">
              <ContactFormLabel>Opis zlecenia</ContactFormLabel>
              <FormControl>
                <Textarea
                  className="min-h-[200px]"
                  placeholder="Opisz swój pomysł lub potrzeby"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </ContactFormItem>
          )}
        />

        <FormField
          control={form.control}
          name="acceptPolicy"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <FormControl>
                  <Checkbox
                    className="border-gray-300 h-5 w-5 cursor-pointer"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-xs text-gray-500 font-normal">
                  <span>
                    Upoważniam do przetwarzania danych osobowych zgodnie z
                    polityką prywatności, zgodnie z RODO itp
                    <Link href="/polityka-prywatnosci">
                      politykę prywatności
                    </Link>
                  </span>
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Wysyłanie..." : "Wyślij zapytanie"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
