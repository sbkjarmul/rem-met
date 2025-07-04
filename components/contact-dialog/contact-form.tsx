"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

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
import { startTransition } from "react";
import { mapContactFormDataToFormData } from "./utils";
import { cn } from "@/lib/utils";
import useTranslations from "@/hooks/useTranslations";
import { ROUTE_PATHS } from "@/app/constants";

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

const ContactFormMessage = () => {
  return <FormMessage className="text-red-500 text-xs" />;
};

interface ContactFormProps {
  formAction: (payload: FormData) => void;
  isLoading: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formAction,
  isLoading,
}: ContactFormProps) => {
  const t = useTranslations("contactForm");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema(t)),
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
        className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-6 md:gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <ContactFormItem>
              <ContactFormLabel>{t("fullName.label")}</ContactFormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder={t("fullName.placeholder")}
                  {...field}
                />
              </FormControl>
              <ContactFormMessage />
            </ContactFormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <ContactFormItem>
              <ContactFormLabel>{t("email.label")}</ContactFormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder={t("email.placeholder")}
                  {...field}
                />
              </FormControl>
              <ContactFormMessage />
            </ContactFormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <ContactFormItem>
              <ContactFormLabel>{t("companyName.label")}</ContactFormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder={t("companyName.placeholder")}
                  {...field}
                />
              </FormControl>
              <ContactFormMessage />
            </ContactFormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <ContactFormItem>
              <ContactFormLabel>{t("phone.label")}</ContactFormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  type="tel"
                  placeholder={t("phone.placeholder")}
                  {...field}
                />
              </FormControl>
              <ContactFormMessage />
            </ContactFormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <ContactFormItem className="col-span-2">
              <ContactFormLabel>{t("description.label")}</ContactFormLabel>
              <FormControl>
                <Textarea
                  autoComplete="off"
                  className="min-h-[200px]"
                  placeholder={t("description.placeholder")}
                  {...field}
                />
              </FormControl>
              <ContactFormMessage />
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
                    {t("acceptPolicy.label")}
                    <Link
                      href={ROUTE_PATHS.PRIVACY_POLICY}
                      target="_blank"
                      className="text-brand-blue-100"
                    >
                      {t("acceptPolicy.privacyPolicy")}
                    </Link>
                  </span>
                </FormLabel>
              </div>
              <ContactFormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? t("cta.loading") : t("cta")}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
