import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="py-16">
      <div className="max-w-2xl mx-auto glassmorphism p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 gradient-text">
          Join the Revolution
        </h2>
        <p className="text-gray-300 mb-6">
          Subscribe to get the latest updates on IAMAI's ecosystem and exclusive trading insights.
        </p>
        
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black/50 border-purple-500/30 focus:border-purple-500"
            required
          />
          <Button 
            type="submit"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
