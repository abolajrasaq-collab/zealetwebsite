'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { generateBlogIdeas, writeBlogPost, BlogIdeationOutput, BlogPostInput } from '@/ai/flows/ai-blog-ideation';
import { Sparkles, FileText, Clipboard } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Markdown from 'react-markdown';
import { useToast } from '@/hooks/use-toast';

export default function BlogIdeationSection() {
  const [topic, setTopic] = useState('');
  const [ideas, setIdeas] = useState<BlogIdeationOutput['ideas']>([]);
  const [generatedPost, setGeneratedPost] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [writing, setWriting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleIdeaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) {
      setError('Please enter a topic.');
      return;
    }
    setLoading(true);
    setError(null);
    setIdeas([]);
    setGeneratedPost(null);

    try {
      const result = await generateBlogIdeas({ topic });
      setIdeas(result.ideas);
    } catch (err) {
      setError('An error occurred while generating ideas. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleWritePost = async (params: BlogPostInput) => {
    setWriting(true);
    setError(null);
    setGeneratedPost(null);
    try {
      const result = await writeBlogPost(params);
      setGeneratedPost(result.content);
    } catch (err) {
      setError('An error occurred while writing the post. Please try again.');
      console.error(err);
    } finally {
      setWriting(false);
    }
  };

  const handleCopyToClipboard = () => {
    if (generatedPost) {
      navigator.clipboard.writeText(generatedPost);
      toast({
        title: "Copied to clipboard!",
        description: "The blog post content is ready to be pasted.",
      });
    }
  }

  return (
    <>
      <Card className="bg-card border-border shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-accent" />
            <div>
              <CardTitle className="text-2xl">AI Blog Idea Generator</CardTitle>
              <CardDescription>Overcome writer's block. Enter a topic to get unique blog post ideas.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleIdeaSubmit} className="flex flex-col sm:flex-row gap-2 mb-6">
            <Input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., 'The future of African cinema'"
              className="flex-grow bg-background"
              disabled={loading || writing}
            />
            <Button type="submit" disabled={loading || writing} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {loading ? 'Generating Ideas...' : 'Generate Ideas'}
            </Button>
          </form>

          {error && <p className="text-destructive text-center">{error}</p>}

          {loading && (
            <div className="space-y-4 mt-6">
              {[...Array(3)].map((_, i) => (
                  <div key={i} className="p-4 border rounded-md">
                      <div className="h-6 bg-muted rounded-md w-3/4 animate-pulse mb-2"></div>
                      <div className="h-4 bg-muted rounded-md w-full animate-pulse"></div>
                  </div>
              ))}
            </div>
          )}

          {ideas.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Generated Ideas</h3>
              <Accordion type="single" collapsible className="w-full">
                {ideas.map((idea, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-medium text-left">{idea.title}</AccordionTrigger>
                    <AccordionContent>
                      <div className="prose prose-sm dark:prose-invert">
                        <p>{idea.outline}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-4"
                        onClick={() => handleWritePost(idea)}
                        disabled={writing || loading}
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        {writing ? 'Writing Post...' : 'Write Full Post'}
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </CardContent>
      </Card>
      
      {writing && (
          <Card className="bg-card border-border shadow-lg mt-8">
               <CardHeader>
                  <CardTitle>Generating your blog post...</CardTitle>
                  <CardDescription>The AI is writing, please wait a moment.</CardDescription>
               </CardHeader>
               <CardContent className="space-y-4">
                  <div className="h-6 bg-muted rounded-md w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-muted rounded-md w-full animate-pulse"></div>
                  <div className="h-4 bg-muted rounded-md w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-muted rounded-md w-full animate-pulse"></div>
               </CardContent>
          </Card>
      )}

      {generatedPost && (
        <Card className="bg-card border-border shadow-lg mt-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Generated Blog Post</CardTitle>
                <CardDescription>Here's the draft generated by the AI. You can copy it and edit as needed.</CardDescription>
              </div>
              <Button variant="outline" onClick={handleCopyToClipboard}>
                <Clipboard className="mr-2 h-4 w-4" />
                Copy
              </Button>
            </div>
          </CardHeader>
          <CardContent className="prose prose-lg prose-invert max-w-none prose-p:my-2 prose-headings:my-4">
            <Markdown>{generatedPost}</Markdown>
          </CardContent>
        </Card>
      )}
    </>
  );
}
