import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { FinalCta, Founder, WhyUs } from "@/components/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About — how we think about websites, and who builds yours · Growwise Studio",
      description:
        "Growwise Studio starts with the business, not the pages. Meet the developer who plans and builds your project, and see how the approach differs.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <WhyUs lead />
      <Founder />
      <FinalCta />
    </PageShell>
  );
}
