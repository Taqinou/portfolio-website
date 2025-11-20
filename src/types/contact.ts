export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message?: string;
  error?: string;
}
