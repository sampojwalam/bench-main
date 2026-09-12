"use client";

import { Component, lazy, Suspense, useState, type ReactNode } from "react";
import styles from "./ExerciseDirectory.module.css";

const Directory = lazy(() => import("./ExerciseDirectory"));

class DirectoryBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    return this.state.failed
      ? <p role="alert">The directory couldn’t load. <button className={styles.button} onClick={() => window.location.reload()}>Reload page</button></p>
      : this.props.children;
  }
}

export function DirectoryLauncher() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.launcher}>
      <button className={styles.button} aria-expanded={open} aria-controls="exercise-directory" onClick={() => setOpen(!open)}>
        {open ? "Close exercise directory" : "Browse the exercise directory"}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div id="exercise-directory" hidden={!open}>
        {open && <DirectoryBoundary><Suspense fallback={<p role="status" className={styles.message}>Opening the directory…</p>}><Directory /></Suspense></DirectoryBoundary>}
      </div>
      <noscript><p>Enable JavaScript to search, or <a href="/data/exercises.json">download the exercise list</a>.</p></noscript>
    </div>
  );
}
