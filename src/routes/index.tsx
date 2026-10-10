import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/Hero";
import { FinalCta, PlannerTeaser, ProofStrip, Services, Work } from "@/components/Sections";
import { studio } from "@/data/site";
import { jsonLd, seo } from "@/lib/seo";

const head = seo({
  title: "Growwise Studio — Websites that work for your business | Pune",
  description:
    "A web development studio in Pune building business websites, redesigns, e-commerce and custom web applications that help customers discover, understand, trust and contact you.",
  path: "/",
});

export const Route = createFileRoute("/")({
  head: () => ({
    ...head,
    scripts: [
      jsonLd({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: studio.name,
        url: studio.url,
        email: studio.email,
        telephone: studio.phone.replace(/\s/g, ""),
        description: head.meta[1]?.content,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "MH",
          addressCountry: "IN",
        },
        areaServed: ["Pune", "India"],
        priceRange: "₹15,000–₹1,40,000+",
        founder: { "@type": "Person", name: "Pritesh Lad" },
        sameAs: [studio.linkedin, studio.github],
      }),
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <Hero />
      <ProofStrip />
      <Services />
      <Work limit={3} />
      <PlannerTeaser />
      <FinalCta />
    </PageShell>
  );
}
