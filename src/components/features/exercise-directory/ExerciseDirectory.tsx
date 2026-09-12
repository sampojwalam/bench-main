"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./ExerciseDirectory.module.css";

type Exercise = { id: string; name: string; type: string; muscles: string[]; imageUrl?: string };
const labels: Record<string, string> = { weighted: "Weighted", bodyweight: "Bodyweight", timed: "Timed", cardio: "Cardio" };
const pageSize = 12;

export default function ExerciseDirectory() {
  const [exercises, setExercises] = useState<Exercise[] | null>(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [muscle, setMuscle] = useState("");
  const [sort, setSort] = useState("asc");
  const [page, setPage] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setError(false);
    fetch("/data/exercises.json", { signal: controller.signal })
      .then(response => { if (!response.ok) throw new Error("Catalog unavailable"); return response.json(); })
      .then(setExercises)
      .catch(error => { if (error.name !== "AbortError") setError(true); });
    return () => controller.abort();
  }, [attempt]);

  const muscles = useMemo(() => [...new Set(exercises?.flatMap(x => x.muscles) ?? [])].sort(), [exercises]);
  const results = useMemo(() => {
    const words = query.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().split(/\s+/).filter(Boolean);
    const filtered = (exercises ?? []).filter(x => words.every(word => x.name.replace(/[^a-z0-9]+/g, " ").includes(word)) && (!type || x.type === type) && (!muscle || x.muscles.includes(muscle)));
    return sort === "desc" ? filtered.reverse() : filtered;
  }, [exercises, query, type, muscle, sort]);
  const totalPages = Math.ceil(results.length / pageSize);
  const visible = results.slice(page * pageSize, (page + 1) * pageSize);
  function reset() { setQuery(""); setType(""); setMuscle(""); setSort("asc"); setPage(0); }

  if (error) return <div className={styles.message} role="alert"><p>The exercise list couldn’t load. Please try again.</p><button className={styles.button} onClick={() => setAttempt(attempt + 1)}>Try again</button></div>;
  if (!exercises) return <p className={styles.message} role="status">Loading exercises…</p>;

  return (
    <section className={styles.directory} aria-label="Search the exercise directory">
      <div className={styles.filters}>
        <label className={styles.search}>Exercise name<input type="search" placeholder="Try bench press or plank" value={query} onChange={event => { setQuery(event.target.value); setPage(0); }} /></label>
        <label>Exercise type<select value={type} onChange={event => { setType(event.target.value); setPage(0); }}><option value="">All types</option>{Object.entries(labels).map(([value,label]) => <option key={value} value={value}>{label}</option>)}</select></label>
        <label>Muscle group<select value={muscle} onChange={event => { setMuscle(event.target.value); setPage(0); }}><option value="">All muscles</option>{muscles.map(value => <option key={value} value={value}>{value.charAt(0).toUpperCase()+value.slice(1)}</option>)}</select></label>
        <label>Sort by<select value={sort} onChange={event => { setSort(event.target.value); setPage(0); }}><option value="asc">Name: A–Z</option><option value="desc">Name: Z–A</option></select></label>
      </div>
      <div className={styles.resultBar}><p role="status" aria-live="polite">{results.length} of {exercises.length} exercises{totalPages > 0 && ` · Page ${page + 1} of ${totalPages}`}</p><button className={styles.reset} onClick={reset}>Reset filters</button></div>
      {visible.length ? <ul className={styles.results}>{visible.map(exercise => <li key={exercise.id}><div className={styles.thumbnail}>{exercise.imageUrl && <img src={exercise.imageUrl} alt="" width={80} height={60} loading="lazy" decoding="async" onError={event => { event.currentTarget.hidden = true; }} />}</div><div className={styles.resultCopy}><span className={styles.type}>{labels[exercise.type]}</span><h3>{exercise.name}</h3><p>{exercise.muscles.length ? exercise.muscles.join(" · ") : "Cardio"}</p></div></li>)}</ul> : <div className={styles.empty}><h3>No matching exercises</h3><p>Try a broader search or reset your filters. You can also create custom exercises in Bench.</p></div>}
      {totalPages > 1 && <nav className={styles.pagination} aria-label="Exercise results pages"><button className={styles.button} disabled={page === 0} onClick={() => setPage(page - 1)}>← Previous</button><span>{page + 1} / {totalPages}</span><button className={styles.button} disabled={page + 1 >= totalPages} onClick={() => setPage(page + 1)}>Next →</button></nav>}
    </section>
  );
}
