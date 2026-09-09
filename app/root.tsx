import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
  type LinksFunction,
  type MetaFunction,
} from "react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";
import { PageTransition } from "@/components/PageTransition";
import stylesheet from "./app.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "icon", href: "/favicon.ico" },
];

export const meta: MetaFunction = () => [
  { charSet: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { title: "Nexadigify — AI & Intelligent Technology" },
  {
    name: "description",
    content:
      "Nexadigify designs and builds intelligent digital systems — AI automation, agentic AI, custom AI development, and data platforms — for enterprise clients.",
  },
  { property: "og:title", content: "Nexadigify — AI & Intelligent Technology" },
  {
    property: "og:description",
    content:
      "Enterprise AI automation, agentic AI, and data intelligence, engineered for real-world impact.",
  },
  { property: "og:type", content: "website" },
  { name: "theme-color", content: "#ffffff" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-white text-[#0b1f33]">
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: unknown }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1e8eab]">
        {message}
      </span>
      <h1 className="mt-4 text-4xl font-extrabold text-[#0b1f33]">
        {error &&
        typeof error === "object" &&
        "status" in error &&
        (error as { status: number }).status === 404
          ? "Page not found."
          : "Something went wrong."}
      </h1>
      <p className="mt-3 max-w-md text-[#526575]">{details}</p>
      {stack && (
        <pre className="mt-4 w-full max-w-2xl overflow-x-auto rounded-lg bg-red-50 p-4 text-left text-xs text-red-800">
          <code>{stack}</code>
        </pre>
      )}
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#004696] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1e8eab]"
      >
        Back to Home
      </Link>
    </div>
  );
}
