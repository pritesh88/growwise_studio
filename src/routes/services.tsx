import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { BusinessTypes, FinalCta, Process, Redesign, Services } from "@/components/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    seo({
      title: "Services — websites, redesigns, e-commerce and web apps · Growwise Studio",
      description:
        "Business websites, redesigns, e-commerce, restaurant and hospitality sites, and custom web applications, each planned around what your customers need to do.",
      path: "/services",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <Services lead />
      <BusinessTypes />
      <Process />
      <Redesign />
      <FinalCta />
    </PageShell>
  );
}
