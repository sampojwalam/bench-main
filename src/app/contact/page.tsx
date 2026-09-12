import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bench Gym Log for support, product questions, feature requests, and collaborations. Email help@benchgymlog.com.",
};

export default function ContactPage() {
  return (
    <Section className="py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">
          Contact Bench
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          Let’s <span className="bench-gradient-text">get in touch.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-ink-500 text-pretty">
          Have a question, an idea, or something we can help with? We’d love to hear from you.
        </p>

        <div className="mt-9 sm:mt-12 rounded-3xl border border-ink-100 bg-gradient-to-br from-purple-50 via-white to-blue-50 px-5 py-8 sm:p-10">
          <div aria-hidden="true" className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bench-gradient text-white shadow-sm">
            <Icon name="mail" size={24} />
          </div>
          <h2 className="mt-5 text-xl font-semibold tracking-tight">Drop us an email</h2>
          <a
            href="mailto:help@benchgymlog.com"
            className="mt-3 inline-block rounded text-lg sm:text-2xl font-semibold text-ink-900 underline decoration-ink-300 underline-offset-4 hover:decoration-ink-900 transition-colors break-all"
          >
            help@benchgymlog.com
          </a>
          <p className="mx-auto mt-6 max-w-md text-sm sm:text-base leading-relaxed text-ink-500">
            Reach out for customer support, questions about Bench, feature requests,
            collaboration opportunities, or anything else you’d like to share.
          </p>
        </div>
      </div>
    </Section>
  );
}
