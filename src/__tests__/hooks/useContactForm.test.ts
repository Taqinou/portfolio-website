import { renderHook, act } from '@testing-library/react';
import { useContactForm } from '@/hooks/useContactForm';

// Mock fetch globally
global.fetch = jest.fn();

describe('useContactForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('initializes with empty form data', () => {
    const { result } = renderHook(() => useContactForm());

    expect(result.current.formData).toEqual({
      name: '',
      email: '',
      message: '',
    });
    expect(result.current.loading).toBe(false);
    expect(result.current.submitted).toBe(false);
  });

  it('updates form data on change', () => {
    const { result } = renderHook(() => useContactForm());

    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John Doe' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formData.name).toBe('John Doe');
  });

  it('submits form successfully', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    const onSuccess = jest.fn();
    const { result } = renderHook(() => useContactForm(onSuccess));

    // Set form data
    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John' },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({
        target: { name: 'email', value: 'john@example.com' },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({
        target: { name: 'message', value: 'Hello!' },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    });

    // Submit form
    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: jest.fn(),
      } as unknown as React.FormEvent);
    });

    expect(global.fetch).toHaveBeenCalledWith('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'John',
        email: 'john@example.com',
        message: 'Hello!',
      }),
    });

    expect(result.current.submitted).toBe(true);
    expect(result.current.loading).toBe(false);
  });

  it('handles form submission error', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const { result } = renderHook(() => useContactForm());

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: jest.fn(),
      } as unknown as React.FormEvent);
    });

    expect(alertMock).toHaveBeenCalledWith(
      'Failed to send message. Please try again.'
    );
    expect(result.current.loading).toBe(false);

    alertMock.mockRestore();
  });

  it('resets form', () => {
    const { result } = renderHook(() => useContactForm());

    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formData.name).toBe('John');

    act(() => {
      result.current.resetForm();
    });

    expect(result.current.formData.name).toBe('');
    expect(result.current.submitted).toBe(false);
  });
});
