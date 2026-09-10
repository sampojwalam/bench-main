import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-7xl font-bold bench-gradient-text">404</div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900">
          Page not found
        </h1>
        <p className="mt-3 text-ink-500">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" variant="primary">
            Back home
          </Button>
          <Link
            href="/features"
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-ink-700 hover:text-ink-900 transition-colors"
          >
            Browse features
          </Link>
        </div>
      </div>
    </div>
  );
}
