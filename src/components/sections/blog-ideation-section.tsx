'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { generateBlogIdeas, BlogIdeationOutput } from '@/ai/flows/ai-blog-ideation';
import { Sparkles } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function BlogIdeationSection() {
  const [topic, setTopic] = useState('');
  const [ideas, setIdeas] = useState<BlogIdeationOutput['ideas']>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) {
      setError('Please enter a topic.');
      return;
    }
    setLoading(true);
    setError(null);
    setIdeas([]);

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

  return (
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
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-6">
          <Input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., 'The future of African cinema'"
            className="flex-grow bg-background"
            disabled={loading}
          />
          <Button type="submit" disabled={loading} className="bg-accent hover:bg-accent/90 text-accent-foreground">
            {loading ? 'Generating...' : 'Generate Ideas'}
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
                  <AccordionContent className="prose prose-sm dark:prose-invert">
                    <p>{idea.outline}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
