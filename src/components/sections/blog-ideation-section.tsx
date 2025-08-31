'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';
import { generateBlogIdeas, type BlogIdeationOutput } from '@/ai/flows/ai-blog-ideation';
import { BlogIdeationSchema } from '@/lib/schema';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Wand2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type FormData = z.infer<typeof BlogIdeationSchema>;

export default function BlogIdeationSection() {
  const [ideas, setIdeas] = useState<BlogIdeationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(BlogIdeationSchema),
    defaultValues: {
      topic: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setIdeas(null);
    try {
      const result = await generateBlogIdeas(data);
      setIdeas(result);
      toast({
        title: "Success!",
        description: "Your blog ideas are ready.",
      });
    } catch (error) {
      console.error('Error generating blog ideas:', error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem generating ideas. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="blog" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">AI-Powered Blog Ideation</h2>
            <p className="mt-4 text-lg text-foreground/80">
              Stuck on what to write next? Use this AI tool to generate creative blog post ideas and outlines based on a topic or keyword. Streamline your content creation process and never run out of inspiration.
            </p>
            <Card className="mt-8 bg-background">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="topic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Enter a Topic</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 'night photography techniques'" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                           <Wand2 className="mr-2 h-4 w-4" />
                           Generate Ideas
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          <div className="flex items-center min-h-[400px]">
            {isLoading && !ideas && (
              <Card className="w-full bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Generating Ideas...
                  </CardTitle>
                  <CardDescription>The AI is working its magic. Please wait a moment.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                    <div className="h-10 bg-muted rounded-md animate-pulse" />
                    <div className="h-10 bg-muted rounded-md animate-pulse" />
                    <div className="h-10 bg-muted rounded-md animate-pulse" />
                </CardContent>
              </Card>
            )}
            {ideas && (
               <Card className="w-full bg-background">
                <CardHeader>
                  <CardTitle>Generated Ideas</CardTitle>
                  <CardDescription>Here are some ideas based on your topic. Click to expand.</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Accordion type="single" collapsible className="w-full">
                    {ideas.ideas.map((idea, index) => (
                      <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>Idea #{index + 1}</AccordionTrigger>
                        <AccordionContent className="whitespace-pre-wrap text-foreground/80">
                          {idea}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
