import { useState, FormEvent, ChangeEvent } from 'react';
import type { ContactForm } from '@/types/contact';

interface UseContactFormReturn {
  formData: ContactForm;
  loading: boolean;
  submitted: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
  resetForm: () => void;
}

const initialFormData: ContactForm = {
  name: '',
  email: '',
  message: '',
};

/**
 * Hook for managing contact form state and submission
 * @param onSuccess - Optional callback to run after successful submission
 * @returns Form state and handlers
 */
export function useContactForm(onSuccess?: () => void): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactForm>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      
      // Reset form after 2 seconds and call onSuccess callback
      setTimeout(() => {
        resetForm();
        onSuccess?.();
      }, 2000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setSubmitted(false);
  };

  return {
    formData,
    loading,
    submitted,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
