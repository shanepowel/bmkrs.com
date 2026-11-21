'use client';

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitConsultationRequest, type ConsultationResponse } from "@/lib/api";
import type { InsertConsultationRequest, ServiceInterest } from "@shared/schema";
import { insertConsultationRequestSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, X, CheckCircle, Clock, MapPin } from "lucide-react";
import { AmpButton, Eyebrow, Text } from "@/components/system";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: string;
}

// Values are fixed by the database schema; only the labels are bmkrs-facing.
const serviceOptions = [
  { value: "discovery", label: "Not sure yet, let's talk" },
  { value: "bmkrs-teams", label: "Brand, website or product build" },
  { value: "bmkrs-transformation", label: "AI and automation" },
  { value: "bmkrs-learn", label: "AI tokenomics or EmberNest" },
  { value: "bmkrs-coach", label: "Growth and content" },
  { value: "full-suite", label: "A Crew or delivery leadership" },
];

export default function ConsultationModal({ isOpen, onClose, serviceType }: ConsultationModalProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertConsultationRequest>({
    resolver: zodResolver(insertConsultationRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceInterest: undefined,
      persona: undefined,
      urgencyLevel: undefined,
      description: "",
      serviceType: serviceType || "",
    },
  });

  const mutation = useMutation({
    mutationFn: submitConsultationRequest,
    onSuccess: (response: ConsultationResponse) => {
      toast({
        title: "Message received",
        description: "We will be in touch shortly. Typically within one business day.",
      });
      form.reset({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceInterest: undefined,
        persona: undefined,
        urgencyLevel: undefined,
        description: "",
        serviceType: "",
      });
      onClose();
      queryClient.invalidateQueries({ queryKey: ["/api/consultation-requests"] });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at hello@bmkrs.com",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertConsultationRequest) => {
    mutation.mutate(data);
  };

  const fieldBase =
    "w-full bg-transparent border-0 border-b pb-2 pt-1 text-sm font-sans text-[#181F4F] focus:outline-none focus:border-b-2 transition-all duration-150 placeholder:text-gray-400";
  const fieldBorderNormal = "border-gray-300 focus:border-[#181F4F]";
  const fieldBorderError = "border-[#F85C70] focus:border-[#F85C70]";
  const labelClass = "mb-2 block font-mono text-xs uppercase tracking-[0.1em] text-[#181F4F]";

  const errors = form.formState.errors;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[95vh] w-[95vw] max-w-[860px] gap-0 overflow-hidden rounded-md border-0 p-0 shadow-[0_24px_60px_rgba(24,31,79,0.18)]">
        <DialogTitle className="sr-only">Book a Discovery Call</DialogTitle>
        <DialogDescription className="sr-only">
          Fill in your details and we will be in touch to arrange a free discovery call.
        </DialogDescription>

        <div className="flex max-h-[95vh] flex-col overflow-y-auto lg:flex-row lg:overflow-hidden">

          {/* LEFT PANEL */}
          <div className="flex min-h-[400px] flex-shrink-0 flex-col justify-between bg-[#181F4F] p-8 lg:w-[42%] lg:p-10">
            <div>
              <Eyebrow className="mb-8">Discovery Call</Eyebrow>
              <Text variant="h3" tone="white" className="mb-6">
                Let&apos;s find out if we&apos;re the right fit for each other.
              </Text>
              <Text variant="small" className="mb-10 text-white/55">
                No slide decks. No sales pitch. A straightforward conversation about
                what you are trying to solve and whether we are the right people to help.
              </Text>

              <ul className="mb-10 space-y-5">
                {[
                  { icon: Clock, text: "30 minutes, no obligation" },
                  { icon: CheckCircle, text: "We will tell you honestly if we can help" },
                  { icon: CheckCircle, text: "We reply within one business day" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <item.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#F85C70]" />
                    <Text variant="small" className="text-white/65">
                      {item.text}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3 w-3 flex-shrink-0 text-[#F85C70]" />
                <p className="font-mono text-xs text-white/40">
                  London | Porto
                </p>
              </div>
              <p className="font-mono text-xs text-white/35">
                hello@bmkrs.com
              </p>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex-1 overflow-y-auto bg-white">
            <div className="relative p-8 lg:p-10">
              {/* Close button */}
              <button
                onClick={onClose}
                className="amp-focus-ring-on-light absolute right-6 top-6 rounded p-1.5 transition-colors duration-150 hover:bg-gray-100"
                aria-label="Close consultation form"
                data-testid="button-modal-close"
              >
                <X className="h-4 w-4 text-[#65677B]" />
              </button>

              <p className="mb-8 font-mono text-xs uppercase tracking-[0.12em] text-[#6B6E81]">
                Your details
              </p>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">

                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>
                      Full Name <span className="text-[#F85C70]">*</span>
                    </label>
                    <input
                      {...form.register("name")}
                      placeholder="Your name"
                      className={`${fieldBase} ${errors.name ? fieldBorderError : fieldBorderNormal}`}
                      data-testid="input-name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-[#F85C70]">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>
                      Email <span className="text-[#F85C70]">*</span>
                    </label>
                    <input
                      {...form.register("email")}
                      type="email"
                      placeholder="you@organisation.com"
                      className={`${fieldBase} ${errors.email ? fieldBorderError : fieldBorderNormal}`}
                      data-testid="input-email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-[#F85C70]">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company + Phone */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>Organisation</label>
                    <input
                      {...form.register("company")}
                      placeholder="Your organisation"
                      className={`${fieldBase} ${fieldBorderNormal}`}
                      data-testid="input-company"
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Phone</label>
                    <input
                      {...form.register("phone")}
                      type="tel"
                      placeholder="+44"
                      className={`${fieldBase} ${fieldBorderNormal}`}
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                {/* Area of interest */}
                <div>
                  <label className={labelClass}>
                    Area of interest <span className="text-[#F85C70]">*</span>
                  </label>
                  <Select
                    value={form.watch("serviceInterest") || undefined}
                    onValueChange={(value) =>
                      form.setValue("serviceInterest", value as ServiceInterest, {
                        shouldValidate: true,
                      })
                    }
                  >
                    <SelectTrigger
                      aria-label="Area of interest"
                      data-testid="select-service"
                      className={`h-auto w-full rounded-none border-0 border-b bg-transparent pb-2 pl-0 pr-8 pt-1 text-sm font-sans text-[#181F4F] transition-all duration-150 focus:border-b-2 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 data-[placeholder]:text-[#9ca3af] [&>span]:truncate ${
                        errors.serviceInterest ? fieldBorderError : fieldBorderNormal
                      }`}
                    >
                      <SelectValue placeholder="Select an area" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value} data-testid={`option-service-${opt.value}`}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.serviceInterest && (
                    <p className="mt-1 text-xs text-[#F85C70]">
                      Please select an area of interest
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass}>What are you trying to solve?</label>
                  <textarea
                    {...form.register("description")}
                    placeholder="Briefly describe the challenge you are facing. No need to have it fully formed."
                    rows={4}
                    className={`${fieldBase} ${fieldBorderNormal} resize-none`}
                    data-testid="textarea-description"
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                  <p className="max-w-[280px] font-sans text-xs leading-relaxed text-[#9ca3af]">
                    Your details are sent directly to hello@bmkrs.com and are not shared with third parties.
                  </p>
                  <AmpButton
                    type="submit"
                    disabled={mutation.isPending}
                    size="md"
                    className="flex-shrink-0"
                    data-testid="button-submit"
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"}
                    {!mutation.isPending && <ArrowRight className="h-4 w-4" />}
                  </AmpButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
