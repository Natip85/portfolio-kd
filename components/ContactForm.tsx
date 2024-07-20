"use client";
import * as z from "zod";
import { useForm } from "@formspree/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useRFH } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Button } from "./ui/button";
import { HoverEffectInput } from "./ui/HoverEffectInput";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";

export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Minimum of 2 characters required" }),
  email: z.string().email({ message: "Valid email required" }),
  subject: z.optional(z.string()),
  message: z.string().min(10, {
    message: "Minimum of 10 characters required",
  }),
});

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xovavvvr");

  const form = useRFH<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof ContactFormSchema>) => {
    handleSubmit(data);
  };

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center gap-5 justify-center">
        <h1 className="text-white text-2xl md:text-4xl">
          Thanks for reaching out!
        </h1>
        <p className="text-white">
          I will be sure to read your message and get back to you ASAP.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <LabelInputContainer>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <HoverEffectInput placeholder="NAME" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <HoverEffectInput placeholder="EMAIL" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <HoverEffectInput placeholder="SUBJECT" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <HoverEffectInput
                      placeholder="MESSAGE"
                      {...field}
                      className="h-[6rem]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </LabelInputContainer>

          {/* <button
            disabled={state.submitting}
            className="before:ease relative h-12 w-40 overflow-hidden bg-orange-600 text-white font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180"
          >
            Submit
          </button> */}

          <button
            disabled={state.submitting}
            className="before:ease relative h-12 w-40 overflow-hidden bg-red-600 text-white font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-[#78f7a2] before:transition-all before:duration-300 hover:text-black hover:shadow-black hover:before:-rotate-180"
          >
            <span className="relative z-10">Submit</span>
          </button>
        </form>
      </Form>
    </div>
  );
}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
