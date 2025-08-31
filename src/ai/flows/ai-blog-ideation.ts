'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating blog post ideas and outlines based on user-provided keywords or topics.
 *
 * - generateBlogIdeas - A function that triggers the blog idea generation flow.
 * - BlogIdeationInput - The input type for the generateBlogIdeas function.
 * - BlogIdeationOutput - The return type for the generateBlogIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BlogIdeationInputSchema = z.object({
  topic: z.string().describe('The keyword or topic for generating blog post ideas.'),
});
export type BlogIdeationInput = z.infer<typeof BlogIdeationInputSchema>;

const BlogIdeationOutputSchema = z.object({
  ideas: z.array(z.string()).describe('An array of blog post ideas and outlines.'),
});
export type BlogIdeationOutput = z.infer<typeof BlogIdeationOutputSchema>;

export async function generateBlogIdeas(input: BlogIdeationInput): Promise<BlogIdeationOutput> {
  return blogIdeationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'blogIdeationPrompt',
  input: {schema: BlogIdeationInputSchema},
  output: {schema: BlogIdeationOutputSchema},
  prompt: `You are a blog idea generator. You will receive a topic from the user, and you will generate 5 blog post ideas and outlines related to that topic.

Topic: {{{topic}}}

Blog Post Ideas and Outlines:`,
});

const blogIdeationFlow = ai.defineFlow(
  {
    name: 'blogIdeationFlow',
    inputSchema: BlogIdeationInputSchema,
    outputSchema: BlogIdeationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
