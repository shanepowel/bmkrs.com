'use client';

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: { email: string; name?: string }) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", data);
      return response.json();
    },
    onSuccess: (data: { hubspotSynced?: boolean }) => {
      setIsSubscribed(true);
      
      // Show success toast
      const description = data.hubspotSynced 
        ? "You'll receive our latest insights and research directly to your inbox."
        : "You'll receive our latest insights and research directly to your inbox. (Subscription saved locally)";
      
      toast({
        title: "✅ Successfully Subscribed!",
        description,
      });
      
      // Keep modal open for 2.5 seconds to show success state, then close
      setTimeout(() => {
        setEmail("");
        setName("");
        setIsSubscribed(false);
        onClose();
      }, 2500);
    },
    onError: (error: Error) => {
      toast({
        title: "Subscription Failed",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
      console.error("Newsletter subscription error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    mutation.mutate({ email, name: name || undefined });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md" aria-describedby="newsletter-description">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            Subscribe to Insights
          </DialogTitle>
          <DialogDescription id="newsletter-description">
            Notes on brands, products and AI from the bmkrs studio, sent when we have something worth saying.
          </DialogDescription>
        </DialogHeader>

        {isSubscribed ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
              Welcome Aboard!
            </h3>
            <p className="text-muted-foreground">
              Check your inbox for a confirmation email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newsletter-email">Email Address *</Label>
              <Input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                required
                data-testid="input-newsletter-email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="newsletter-name">Name (Optional)</Label>
              <Input
                id="newsletter-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                data-testid="input-newsletter-name"
              />
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                📬 You'll receive:
              </p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>✓ Practical AI and automation ideas</li>
                <li>✓ AI tokenomics: keeping AI costs in check</li>
                <li>✓ What we're learning from our own products</li>
                <li>✓ Launches and new work</li>
              </ul>
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
                data-testid="button-newsletter-cancel"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={mutation.isPending}
                data-testid="button-newsletter-subscribe"
              >
                {mutation.isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
