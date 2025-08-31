
'use server';

import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().min(1, { message: 'Message is required.' }),
});

export async function sendMessage(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: "Please fill out all fields correctly.",
    };
  }

  // Here you would typically send an email or save to a database.
  // We'll just simulate a successful submission for now.
  console.log('Received message:', validatedFields.data);
  
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { status: 'success', message: 'Your message has been sent successfully!' };
}
