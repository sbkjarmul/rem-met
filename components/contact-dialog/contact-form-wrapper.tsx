"use client";

import React from "react";
import { useActionState } from "react";

import { submitContactForm } from "@/actions/submit-contact-form";
import ContactForm from "./contact-form";
import ContactFormSuccessMessage from "./contact-form-success-message";

const ContactFormWrapper = () => {
  const initialState = {
    success: false,
  };

  const [state, action, isLoading] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <div>
      {state.success ? (
        <ContactFormSuccessMessage />
      ) : (
        <ContactForm formAction={action} isLoading={isLoading} />
      )}
    </div>
  );
};

export default ContactFormWrapper;
