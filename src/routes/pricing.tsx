import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Faq, FinalCta, GrowthPlans, Pricing } from "@/components/Sections";
import { faqs } from "@/data/site";
import { jsonLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    ...seo({
      title: "Pricing — project levels and monthly plans · Growwise Studio",
      description:
        "Typical investment for a business website: Presence (₹15k–₹30k), Growth (₹35k–₹60k) and Scale (₹65k–₹1.4L+), plus monthly care and growth plans after launch.",
      path: "/pricing",
    }),
    scripts: [
      jsonLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <PageShell>
      <Pricing lead />
      <GrowthPlans />
      <Faq />
      <FinalCta />
    </PageShell>
  );
}
