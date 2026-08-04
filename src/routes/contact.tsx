import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, MessageSquare, Mail, User, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

import { sendContactMessage, type ContactInput } from "@/lib/contact.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedSection } from "@/components/AnimatedSection";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject is too long"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — RPZ CELESTIAL" },
      { name: "description", content: "Get in touch with RPZ CELESTIAL. Send a message to the team or join our Discord community." },
      { property: "og:title", content: "Contact — RPZ CELESTIAL" },
      { property: "og:description", content: "Get in touch with RPZ CELESTIAL. Send a message to the team or join our Discord community." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus("submitting");
    try {
      const result = await sendContactMessage({ data });
      if (result.sent) {
        setStatus("success");
        setStatusMessage(result.message);
        toast.success(result.message);
        reset();
      } else {
        setStatus("error");
        setStatusMessage(result.message);
        toast.error(result.message);
      }
    } catch {
      const fallback = "Something went wrong. Please try again or reach out on Discord.";
      setStatus("error");
      setStatusMessage(fallback);
      toast.error(fallback);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-16">
      <div className="container-tight w-full max-w-2xl">
        <AnimatedSection>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 glow">
              <MessageSquare className="h-7 w-7 text-primary" />
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Contact <span className="text-gradient">RPZ CELESTIAL</span>
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Got a question, want to cheer us on, or interested in working together? Drop us a message below or join our Discord.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 rounded-2xl border border-violet/25 bg-card/80 p-6 shadow-[0_0_40px_-16px_var(--color-glow)] backdrop-blur-sm md:p-8"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                  <User size={14} className="text-primary" />
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register("name")}
                  className="border-violet/25 bg-background/50 focus-visible:border-primary focus-visible:ring-primary/30"
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                  <Mail size={14} className="text-primary" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  className="border-violet/25 bg-background/50 focus-visible:border-primary focus-visible:ring-primary/30"
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="subject" className="flex items-center gap-2 text-foreground">
                  <FileText size={14} className="text-primary" />
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  {...register("subject")}
                  className="border-violet/25 bg-background/50 focus-visible:border-primary focus-visible:ring-primary/30"
                />
                {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message" className="flex items-center gap-2 text-foreground">
                  <MessageSquare size={14} className="text-primary" />
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  rows={5}
                  {...register("message")}
                  className="border-violet/25 bg-background/50 focus-visible:border-primary focus-visible:ring-primary/30"
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
              </div>
            </div>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300"
              >
                <CheckCircle size={20} />
                <p className="text-sm font-medium">{statusMessage}</p>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex items-center gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-destructive"
              >
                <AlertCircle size={20} />
                <div className="text-sm">
                  <p className="font-medium">{statusMessage}</p>
                  <p className="mt-1">
                    You can also reach us on{" "}
                    <a
                      href="https://discord.gg/9Y6KYU49uH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-foreground"
                    >
                      Discord
                    </a>
                    .
                  </p>
                </div>
              </motion.div>
            )}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button
                type="submit"
                disabled={status === "submitting"}
                className="glow bg-primary px-6 py-5 text-base font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={18} />
                    Send Message
                  </span>
                )}
              </Button>

              <a
                href="https://discord.gg/9Y6KYU49uH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-violet/40 bg-violet/10 px-4 py-2 text-sm font-medium text-violet transition-colors hover:bg-violet/20 hover:text-foreground"
              >
                <MessageSquare size={16} />
                Join Discord
              </a>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </div>
  );
}
