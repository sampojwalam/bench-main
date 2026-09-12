import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import Link from "next/link";
import { Section } from "./Section";
import styles from "./LegalLayout.module.css";

export function LegalLayout({ title, effectiveDate, children }: { title: string; effectiveDate: string; children: ReactNode }) {
  const sections: { id: string; title: string }[] = [];
  const content = Children.toArray(children).map(child => {
    if (!isValidElement(child) || child.type !== "h2") return child;
    const heading = child as ReactElement<{ children: string; id?: string; tabIndex?: number }>;
    const text = String(heading.props.children);
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    sections.push({ id, title: text });
    return cloneElement(heading, { id, tabIndex: -1 });
  });
  const privacy = title === "Privacy Policy";
  const contents = <ol>{sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{section.title}</a></li>)}</ol>;

  return <div className={styles.page}>
    <Section className={styles.hero}>
      <nav className={styles.tabs} aria-label="Legal documents">
        <Link href="/privacy-policy" aria-current={privacy ? "page" : undefined}>Privacy Policy</Link>
        <Link href="/terms-and-conditions" aria-current={!privacy ? "page" : undefined}>Terms &amp; Conditions</Link>
      </nav>
      <h1>{title}</h1>
      <p className={styles.intro}>{privacy ? "How we collect, use, and handle your information when you use Bench." : "The terms that apply when you use Bench’s apps and services."}</p>
      <p className={styles.date}>Effective {effectiveDate}</p>
    </Section>
    <Section className={styles.body}>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <nav className={styles.desktopContents} aria-label="On this page"><p>ON THIS PAGE</p>{contents}</nav>
          <details className={styles.mobileContents}><summary>On this page <span aria-hidden="true">+</span></summary><nav aria-label="On this page">{contents}</nav></details>
        </aside>
        <article className={styles.content} aria-label={title}>{content}</article>
      </div>
    </Section>
  </div>;
}
