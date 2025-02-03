import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactFormData = await req.json();

    // Send notification email to you (the site owner)
    const ownerNotification = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "richwellnesslife@gmail.com", // Your email address
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send confirmation email to the person who submitted the form
    const senderConfirmation = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for your message",
      html: `
        <h2>Thank you for your message!</h2>
        <p>Dear ${name},</p>
        <p>I have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Vansh Uttam</p>
      `,
    });

    // Store the contact form data in Supabase
    const { data, error } = await supabase
      .from('Get-in-touch')
      .insert([
        {
          email: email,
          textArea: message,
        }
      ]);

    if (error) {
      console.error("Error storing contact form data:", error);
    }

    console.log("Emails sent successfully:", { ownerNotification, senderConfirmation });

    return new Response(
      JSON.stringify({ message: "Emails sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);