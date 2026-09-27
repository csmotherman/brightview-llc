import Link from "next/link";
import { Icon } from "../components/Icons";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow eyebrow-light">404</p>
      <h1>This view isn&apos;t so bright.</h1>
      <p>The page you were looking for has moved or does not exist.</p>
      <Link className="button button-gold" href="/">
        Back to Bright View
        <Icon name="arrow" />
      </Link>
    </section>
  );
}
