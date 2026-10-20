import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./ProcessSteps.module.css";

const steps = [
  { title: "Request a Quote", text: "Tell us what you need cleaned." },
  { title: "We'll Follow Up", text: "We'll review the details and provide a quote." },
  { title: "Enjoy the Results", text: "Schedule your service and see the difference." },
] as const;

export function ProcessSteps() {
  return (
    <div className={styles.process}>
      <SectionHeading eyebrow="OUR PROCESS" title={<>A Simple Process.<br />A Cleaner Home.</>} lead="Getting started is easy. We handle the details so you can enjoy the results." />
      <ol className={styles.steps}>
        {steps.map((step, i) => (
          <li key={step.title}><span aria-hidden="true">{i + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>
        ))}
      </ol>
      <div className={styles.action}><Button href="/quote" arrow>Get Started Today</Button></div>
    </div>
  );
}
