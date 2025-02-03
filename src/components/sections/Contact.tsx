import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from '@emailjs/browser';

// Create a separate configuration object
const emailConfig = {
  serviceId: '', // You'll need to enter this when testing locally
  templateId: '', // You'll need to enter this when testing locally
  publicKey: '', // You'll need to enter this when testing locally
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate if credentials are set
    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      toast({
        title: "Configuration Error",
        description: "Email service is not properly configured.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        emailConfig.publicKey
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
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
        <h2 className="text-4xl font-bold text-white mb-12 text-center underline-offset-4 underline">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                autoComplete="additional-name webauthn"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-secondary text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-secondary text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                Message
              </label>
              <textarea
                id="message"
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
        </div>
      </div>
    </section>
  );
};

export default Contact;