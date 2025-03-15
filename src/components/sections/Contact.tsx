import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using environment variables for EmailJS credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials are not properly configured');
      }

      if (formRef.current) {
        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );

        console.log('Email sent successfully:', result.text);

        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        setFormData({ email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-black mb-12 text-center bg-white rounded-lg p-2 mx-auto w-fit animate-fade-in">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div>
              <label htmlFor="email" className="block text-md font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email" // This name is used by EmailJS
                autoComplete="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-secondary text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-md font-medium text-white mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message" // This name is used by EmailJS
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-2 bg-secondary text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="mt-10 mb-5">OR</p>
            <p className="text-lg font-bold">Email me 👉 <a href="mailto:vansh.uttam.dev07@gmail.com" className="text-blue-500 hover:text-blue-600">vansh.uttam.dev07@gmail.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;