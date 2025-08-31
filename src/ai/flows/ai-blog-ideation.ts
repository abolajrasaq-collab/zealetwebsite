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

const BlogIdeaSchema = z.object({
    title: z.string().describe("The title of the blog post."),
    outline: z.string().describe("A brief outline of the blog post."),
});

const BlogIdeationOutputSchema = z.object({
  ideas: z.array(BlogIdeaSchema).describe('An array of blog post ideas, each with a title and an outline.'),
});
export type BlogIdeationOutput = z.infer<typeof BlogIdeationOutputSchema>;

export async function generateBlogIdeas(input: BlogIdeationInput): Promise<BlogIdeationOutput> {
  return blogIdeationFlow(input);
}

const blogIdeationPrompt = ai.definePrompt({
  name: 'blogIdeationPrompt',
  input: {schema: BlogIdeationInputSchema},
  output: {schema: BlogIdeationOutputSchema},
  prompt: `You are a blog idea generator. You will receive a topic from the user, and you will generate 5 blog post ideas related to that topic. For each idea, provide a catchy title and a brief outline.

Topic: {{{topic}}}

Blog Post Ideas:`,
});

const blogIdeationFlow = ai.defineFlow(
  {
    name: 'blogIdeationFlow',
    inputSchema: BlogIdeationInputSchema,
    outputSchema: BlogIdeationOutputSchema,
  },
  async input => {
    const {output} = await blogIdeationPrompt(input);
    return output!;
  }
);

const BlogPostInputSchema = z.object({
    title: z.string().describe("The title of the blog post."),
    outline: z.string().describe("The outline of the blog post to expand upon."),
});
export type BlogPostInput = z.infer<typeof BlogPostInputSchema>;

const BlogPostOutputSchema = z.object({
    content: z.string().describe("The full content of the blog post, written in Markdown format."),
});
export type BlogPostOutput = z.infer<typeof BlogPostOutputSchema>;


export async function writeBlogPost(input: BlogPostInput): Promise<BlogPostOutput> {
    return blogPostFlow(input);
}

const blogPostPrompt = ai.definePrompt({
    name: 'blogPostPrompt',
    input: {schema: BlogPostInputSchema},
    output: {schema: BlogPostOutputSchema},
    prompt: `You are a professional blog writer. You will receive a title and an outline, and you will write a full, engaging blog post based on them. The blog post should be in Markdown format.

Title: {{{title}}}
Outline:
{{{outline}}}

Blog Post Content (Markdown):`
});

const blogPostFlow = ai.defineFlow(
    {
        name: 'blogPostFlow',
        inputSchema: BlogPostInputSchema,
        outputSchema: BlogPostOutputSchema,
    },
    async (input) => {
        const {output} = await blogPostPrompt(input);
        return output!;
    }
);
