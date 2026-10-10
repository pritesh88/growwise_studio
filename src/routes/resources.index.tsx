import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { FinalCta, Resources } from "@/components/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/resources/")({
  head: () =>
    seo({
      title: "Resources for business owners · Growwise Studio",
      description:
        "Short, practical reads on what a website should do for a business, when to redesign, and what it should cost, written without jargon.",
      path: "/resources",
    }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <PageShell>
      <Resources lead />
      <FinalCta />
    </PageShell>
  );
}
