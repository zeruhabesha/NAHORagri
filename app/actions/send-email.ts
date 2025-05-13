"use server"

import { z } from "zod"

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

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    // For demonstration, we'll log the data and simulate a successful email send
    console.log("Email would be sent with data:", validatedData)

    // Send to the company email addresses
    const recipients = ["nahorengineering@gmail.com", "info@nahoragri.com"]

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Return success
    return {
      success: true,
      message: "Your message has been sent successfully. We'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)

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
