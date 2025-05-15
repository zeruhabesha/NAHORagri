"use server"

import { z } from "zod"
import { Resend } from "resend"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  phone: z.string().optional(),
  country: z.string().optional(),
  interest: z.enum(["coffee", "sesame", "avocado", "engineering"]),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export type FormData = z.infer<typeof formSchema>

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // Send email using Resend
    await resend.emails.send({
      from: "NAHORagri Contact Form <onboarding@resend.dev>",
      to: "zeruhabesha09@gmail.com",
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ""}
        ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ""}
        ${validatedData.country ? `<p><strong>Country:</strong> ${validatedData.country}</p>` : ""}
        <p><strong>Interest:</strong> ${validatedData.interest}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
    })

    return {
      success: true,
      message: "Your message has been sent successfully. We'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    
    // Add detailed error logging
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        name: error.name,
        stack: error.stack
      })
    }

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form inputs and try again.",
        errors: error.errors,
      }
    }

    return {
      success: false,
      message: "Failed to send your message. Please try again later.",
    }
  }
}
