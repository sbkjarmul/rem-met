import { ContactFormData } from "./schema";

export function mapContactFormDataToFormData(data: ContactFormData) {
  const formData = new FormData();

  formData.append("fullName", data.fullName);
  formData.append("email", data.email);
  formData.append("companyName", data.companyName);
  formData.append("phone", data.phone);
  formData.append("description", data.description);
  formData.append("acceptPolicy", data.acceptPolicy ? "true" : "false");

  return formData;
}
