'use client';

import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitConsultationRequest, type ConsultationResponse } from "@/lib/api";
import type { InsertConsultationRequest, CustomerPersona } from "@shared/schema";
import { insertConsultationRequestSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, ArrowRight, Calendar, Send } from "lucide-react";
import {
  AmpButton,
  BorderCell,
  BorderGrid,
  BreadcrumbBar,
  CtaBand,
  Eyebrow,
  Grid,
  PageHero,
  PageShell,
  Section,
  Stack,
  Text,
} from "@/components/system";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ContactProps {
  onOpenConsultation: (serviceType?: string) => void;
}

const fieldBase =
  "w-full rounded border-0 border-b-2 border-[#DDD9EA] bg-transparent px-4 py-3 font-sans text-sm text-[#181F4F] transition-colors duration-200 focus:outline-none focus:ring-0";

/** Optional booking page (e.g. Calendly or Google appointments). When unset, "book a call" opens the enquiry form. */
const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || "";

const Contact = memo(function Contact({ onOpenConsultation }: ContactProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [showCalendar, setShowCalendar] = useState(false);
  const bookCall = () => (BOOKING_URL ? setShowCalendar(true) : onOpenConsultation("discovery"));

  const form = useForm<InsertConsultationRequest>({
    resolver: zodResolver(insertConsultationRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceInterest: "discovery",
      persona: undefined,
      urgencyLevel: "exploring",
      description: "",
      serviceType: "",
    },
  });

  const mutation = useMutation({
    mutationFn: submitConsultationRequest,
    onSuccess: (response: ConsultationResponse) => {
      const hasWarnings = response.warnings && response.warnings.length > 0;
      if (hasWarnings) {
        toast({
          title: "Message Received",
          description: "Your message has been saved. We will be in touch within two business days.",
          variant: "default",
        });
      } else {
        toast({
          title: "Message Sent",
          description: "We will be in touch within two business days.",
        });
      }
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/consultation-requests"] });
    },
    onError: () => {
      toast({
        title: "Failed to Send",
        description: "Please try again or email us directly at hello@bmkrs.com",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertConsultationRequest) => {
    mutation.mutate(data);
  };

  return (
    <PageShell className="bg-[#FAFAF9]">

      <section className="bmk-chalk-grid relative overflow-hidden bg-[#181F4F] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 85% 15%, rgba(96, 38, 106, 0.35) 0%, transparent 55%)" }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em]">
            <span className="text-white/45">BMK / CONTACT</span>
            <span className="h-px w-8 bg-[#F85C70]" aria-hidden />
            <span className="text-[#F85C70]">Get in touch</span>
          </div>
          <h1
            className="max-w-4xl font-display text-[2.4rem] font-extrabold uppercase leading-[0.92] tracking-[-0.025em] [font-stretch:118%] sm:text-5xl lg:text-[3.9rem]"
            data-testid="text-contact-title"
          >
            Got an idea?
            <span className="mt-2 block text-[#F85C70]">Let&apos;s make it real.</span>
          </h1>
          <p className="mt-7 max-w-[38rem] text-lg leading-relaxed text-white/80">
            A brand, a product, an AI build or a bill that needs taming. Tell us what you&apos;re working on and you&apos;ll get a straight answer, and a rough price, on the first call.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <AmpButton size="md" onClick={bookCall} data-testid="button-book-call">
              <Calendar className="h-4 w-4" />
              Book a 30-minute call
            </AmpButton>
            <AmpButton
              variant="outlineLight"
              size="md"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="button-send-message"
            >
              Send a message
            </AmpButton>
          </div>
          <dl className="mt-12 grid max-w-3xl grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              { label: "Email", value: "hello@bmkrs.com", href: "mailto:hello@bmkrs.com" },
              { label: "We reply", value: "Within two working days" },
              { label: "First call", value: "30 minutes, no deck" },
            ].map((f) => (
              <div key={f.label} className="bg-[#181F4F] p-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">{f.label}</dt>
                <dd className="mt-1.5 text-sm font-semibold">
                  {f.href ? (
                    <a href={f.href} className="text-[#F85C70] hover:underline" data-testid="text-email-hello">
                      {f.value}
                    </a>
                  ) : (
                    f.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bmk-ruler" aria-hidden />
        </div>
      </section>

      <Section tone="transparent" padding="lg" id="contact-form" className="bg-[#FAFAF9]">
        <Grid cols="5-hero" gap="xl">
          <div className="lg:col-span-3">
            <Eyebrow tone="subtle" className="mb-4">Send a Message</Eyebrow>
            <Text variant="h2" tone="ink" className="mb-6">
              Tell us what you&apos;re working on
            </Text>
            <Text variant="body" tone="muted" className="mb-10">
              A few lines is plenty. What you want to make, roughly when, and anything that&apos;s keeping you up at night. We&apos;ll reply within two working days, and if we&apos;re not the right people we&apos;ll tell you who is.
            </Text>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-[#6B6E81]">
                    Full Name *
                  </Label>
                  <input
                    id="name"
                    className={fieldBase}
                    placeholder="Jane Smith"
                    data-testid="input-name"
                    {...form.register("name")}
                  />
                  {form.formState.errors.name ? (
                    <p className="mt-1 font-sans text-xs text-[#F85C70]">{form.formState.errors.name.message}</p>
                  ) : null}
                </div>

                <div>
                  <Label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-[#6B6E81]">
                    Email Address *
                  </Label>
                  <input
                    id="email"
                    type="email"
                    className={fieldBase}
                    placeholder="jane@organisation.com"
                    data-testid="input-email"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email ? (
                    <p className="mt-1 font-sans text-xs text-[#F85C70]">{form.formState.errors.email.message}</p>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <Label htmlFor="company" className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-[#6B6E81]">
                    Organisation *
                  </Label>
                  <input
                    id="company"
                    className={fieldBase}
                    placeholder="Your Organisation"
                    data-testid="input-company"
                    {...form.register("company")}
                  />
                  {form.formState.errors.company ? (
                    <p className="mt-1 font-sans text-xs text-[#F85C70]">{form.formState.errors.company.message}</p>
                  ) : null}
                </div>

                <div>
                  <Label htmlFor="phone" className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-[#6B6E81]">
                    Phone Number
                  </Label>
                  <input
                    id="phone"
                    type="tel"
                    className={fieldBase}
                    placeholder="+44 20 1234 5678"
                    data-testid="input-phone"
                    {...form.register("phone")}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-[#6B6E81]">
                  How Can We Help? *
                </Label>
                <textarea
                  id="description"
                  rows={6}
                  className={`${fieldBase} resize-none`}
                  placeholder="Tell us about your challenge, programme, or what you are trying to achieve..."
                  data-testid="textarea-description"
                  {...form.register("description")}
                />
                {form.formState.errors.description ? (
                  <p className="mt-1 font-sans text-xs text-[#F85C70]">{form.formState.errors.description.message}</p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="persona" className="mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-[#6B6E81]">
                  How Did You Hear About Us?
                </Label>
                <Select
                  onValueChange={(value) => form.setValue("persona", value as CustomerPersona)}
                  defaultValue={form.watch("persona")}
                >
                  <SelectTrigger
                    id="persona"
                    aria-label="How did you hear about us?"
                    className="h-12 rounded border-0 border-b-2 border-[#DDD9EA] bg-transparent font-sans text-sm text-[#181F4F] focus:ring-0"
                    data-testid="select-persona"
                  >
                    <SelectValue placeholder="Please select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="search">Search Engine</SelectItem>
                    <SelectItem value="referral">Recommended by a Colleague</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="event">Networking Event</SelectItem>
                    <SelectItem value="article">Blog or Article</SelectItem>
                    <SelectItem value="previous">Worked with bmkrs Previously</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <AmpButton
                type="submit"
                variant="navy"
                disabled={mutation.isPending}
                fullWidth
                className="h-12 justify-center"
                data-testid="button-submit-contact"
              >
                {mutation.isPending ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </AmpButton>
            </form>
          </div>

          <div className="space-y-0 border-l border-[#E5E3EE] lg:col-span-2">
            <div className="border-b border-[#E5E3EE] pb-10 pl-10">
              <Eyebrow tone="subtle" className="mb-4">Prefer a call?</Eyebrow>
              <Text variant="h3" className="mb-4">Talk it through</Text>
              <Text variant="small" tone="muted" className="mb-6">
                Thirty minutes, no deck. An honest view of whether and how we can help, and a rough price.
              </Text>
              <button
                type="button"
                onClick={bookCall}
                className="amp-focus-ring-on-light inline-flex items-center gap-2 rounded text-sm font-semibold text-[#F85C70] transition-all duration-200 hover:gap-3"
                data-testid="button-book-call-sidebar"
              >
                <Calendar className="h-4 w-4" />
                Book a 30-minute call <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            <div className="border-b border-[#E5E3EE] py-10 pl-10">
              <Eyebrow tone="subtle" className="mb-4">General enquiries</Eyebrow>
              <Text variant="small" tone="muted" className="mb-4">
                Anything the form doesn't cover, just email us.
              </Text>
              <a
                href="mailto:hello@bmkrs.com"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#F85C70] transition-all duration-200 hover:gap-3"
              >
                <Mail className="h-4 w-4" />
                hello@bmkrs.com <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            <div className="border-b border-[#E5E3EE] py-10 pl-10">
              <Eyebrow tone="subtle" className="mb-4">Careers</Eyebrow>
              <Text variant="small" tone="muted" className="mb-4">
                Like making things? Send us a link to something you&apos;ve built and a couple of lines about you.
              </Text>
              <a
                href="mailto:careers@bmkrs.com"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#F85C70] transition-all duration-200 hover:gap-3"
              >
                <Mail className="h-4 w-4" />
                careers@bmkrs.com <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            <div className="pl-10 pt-10">
              <Eyebrow tone="subtle" className="mb-4">Partnerships</Eyebrow>
              <Text variant="small" tone="muted" className="mb-4">
                Building something we could make better together? Let&apos;s talk.
              </Text>
              <a
                href="mailto:partnerships@bmkrs.com"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#F85C70] transition-all duration-200 hover:gap-3"
              >
                <Mail className="h-4 w-4" />
                partnerships@bmkrs.com <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </Grid>
      </Section>

      <CtaBand
        className="border-t border-[#0d1230]"
        eyebrow="Small team. Senior people."
        title="UK based, working wherever the work is"
        lead="Brands, digital products and practical AI, made by the people you actually talk to."
      />

      <Dialog open={Boolean(BOOKING_URL) && showCalendar} onOpenChange={setShowCalendar}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-normal text-[#181F4F]">
              Book a call
            </DialogTitle>
            <DialogDescription className="font-sans text-sm text-[#65677B]">
              Thirty minutes to talk through what you want to make. No deck, no commitment.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <iframe
              src={BOOKING_URL}
              width="100%"
              height="800"
              frameBorder="0"
              title="Book a call with bmkrs"
              aria-label="Google Calendar scheduler"
              data-testid="iframe-google-calendar"
            />
          </div>
        </DialogContent>
      </Dialog>
    </PageShell>
  );
});

export default Contact;
