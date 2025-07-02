"use client";

import React from "react";
import { useActionState } from "react";

import { submitContactForm } from "@/actions/submit-contact-form";
import ContactForm from "./contact-form";
import ContactFormSuccessMessage from "./contact-form-success-message";

interface ContactFormWrapperProps {
  onClose: () => void;
}

const ContactFormWrapper = ({ onClose }: ContactFormWrapperProps) => {
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
        <ContactFormSuccessMessage onClose={onClose} />
      ) : (
        <ContactForm formAction={action} isLoading={isLoading} />
      )}
    </div>
  );
};

export default ContactFormWrapper;
