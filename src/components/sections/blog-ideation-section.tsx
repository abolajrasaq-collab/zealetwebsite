'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';
import { generateBlogIdeas, writeBlogPost, type BlogIdeationOutput, type BlogPostInput } from '@/ai/flows/ai-blog-ideation';
import { BlogIdeationSchema } from '@/lib/schema';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Wand2, Loader2, Feather } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

type FormData = z.infer<typeof BlogIdeationSchema>;

export default function BlogIdeationSection() {
  const [ideas, setIdeas] = useState<BlogIdeationOutput | null>(null);
  const [blogPost, setBlogPost] = useState<{ title: string; content: string } | null>(null);
  const [isGeneratingIdeas, setIsGeneratingIdeas] = useState(false);
  const [isWritingPost, setIsWritingPost] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(BlogIdeationSchema),
    defaultValues: {
      topic: '',
    },
  });

  const onIdeaSubmit = async (data: FormData) => {
    setIsGeneratingIdeas(true);
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
      setIsGeneratingIdeas(false);
    }
  };

  const handleWritePost = async (postInput: BlogPostInput) => {
    setIsWritingPost(true);
    setBlogPost(null);
    try {
      const result = await writeBlogPost(postInput);
      setBlogPost({ title: postInput.title, content: result.content });
      setIsPostModalOpen(true);
    } catch (error) {
      console.error('Error writing blog post:', error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem writing the blog post. Please try again.",
      });
    } finally {
      setIsWritingPost(false);
    }
  };
  
  const isLoading = isGeneratingIdeas || isWritingPost;

  return (
    <section id="blog" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">AI-Powered Blog Ideation</h2>
            <p className="mt-4 text-lg text-foreground/80">
              Stuck on what to write next? Use this AI tool to generate creative blog post ideas and outlines based on a topic or keyword. Then, let the AI write the full post for you.
            </p>
            <Card className="mt-8 bg-background">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onIdeaSubmit)} className="space-y-6">
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
                      {isGeneratingIdeas ? (
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
            {isGeneratingIdeas && !ideas && (
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
                  <CardDescription>Here are some ideas based on your topic. Click to expand and write.</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Accordion type="single" collapsible className="w-full">
                    {ideas.ideas.map((idea, index) => (
                      <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>{idea.title}</AccordionTrigger>
                        <AccordionContent>
                            <p className="whitespace-pre-wrap text-foreground/80 mb-4">{idea.outline}</p>
                            <Button
                                onClick={() => handleWritePost(idea)}
                                disabled={isWritingPost && blogPost?.title !== idea.title}
                                className="bg-primary/80 hover:bg-primary text-primary-foreground"
                                size="sm"
                            >
                                {isWritingPost && blogPost?.title !== idea.title ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Writing...
                                    </>
                                ) : (
                                    <>
                                        <Feather className="mr-2 h-4 w-4" />
                                        Write this post
                                    </>
                                )}
                            </Button>
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
      <Dialog open={isPostModalOpen} onOpenChange={setIsPostModalOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{blogPost?.title}</DialogTitle>
            <DialogDescription>
              Here's your AI-generated blog post. You can copy the content below.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] my-4">
            <div className="prose prose-sm sm:prose-base dark:prose-invert prose-headings:font-bold prose-a:text-accent max-w-none p-1">
              <pre className="whitespace-pre-wrap font-sans text-foreground">{blogPost?.content}</pre>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
}
