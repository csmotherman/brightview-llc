type Step = { title: string; copy: string };

export function HowItWorks({
  steps,
  eyebrow = "How it works",
  heading,
}: {
  steps: Step[];
  eyebrow?: string;
  heading: string;
}) {
  return (
    <section className="process-section">
      <div className="shell process-inner">
        <div className="section-head section-head-invert">
          <p className="eyebrow eyebrow-light">{eyebrow}</p>
          <h2>{heading}</h2>
        </div>
        <div className="timeline">
          {steps.map((step, index) => (
            <article key={step.title}>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
