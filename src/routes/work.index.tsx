import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { FinalCta, Testimonials, Work } from "@/components/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/work/")({
  head: () =>
    seo({
      title: "Work — case studies from real client projects · Growwise Studio",
      description:
        "Websites and platforms built for a publishing body, a research journal, a food manufacturer, an insurance advisor, a jewellery brand and a college placement cell.",
      path: "/work",
    }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <PageShell>
      <Work lead />
      <Testimonials />
      <FinalCta title="Have a business that needs something like this?" />
    </PageShell>
  );
}
