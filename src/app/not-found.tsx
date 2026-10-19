import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageHeader eyebrow="BRIGHTVIEW LLC | PAGE NOT FOUND" title={"That Page\nIsn't Here."} description="Let's get you back on track." image="/images/projects/holiday-lights/House3.png" objectPosition="center 45%">
      <Button href="/" variant="gold" arrow>Return home</Button>
    </PageHeader>
  );
}
