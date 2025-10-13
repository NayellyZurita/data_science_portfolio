"use client";

import { useEffect, useMemo, useState } from "react";

const UTM_PARAMS = "utm_source=portfolio&utm_medium=share&utm_campaign=blog";

export default function ShareMenu({ title, className = "" }) {
  const [canonicalUrl, setCanonicalUrl] = useState("");
  const [feedback, setFeedback] = useState("");
  const [canNativeShare, setCanNativeShare] = useState(false);

  const urlWithUtm = useMemo(() => {
    if (!canonicalUrl) return "";
    const separator = canonicalUrl.includes("?") ? "&" : "?";
    return `${canonicalUrl}${separator}${UTM_PARAMS}`;
  }, [canonicalUrl]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setCanonicalUrl(window.location.href);
    setCanNativeShare(typeof window.navigator?.share === "function");
  }, []);

  useEffect(() => {
    if (!feedback) return;
    const timer = setTimeout(() => setFeedback(""), 2500);
    return () => clearTimeout(timer);
  }, [feedback]);

  const handleNativeShare = async () => {
    if (!canNativeShare || !canonicalUrl) {
      setFeedback("Sharing isn't supported on this device.");
      return;
    }
    try {
      await window.navigator.share({
        title,
        url: urlWithUtm || canonicalUrl,
      });
      setFeedback("Share dialog opened.");
    } catch (error) {
      if (error?.name !== "AbortError") {
        setFeedback("Share canceled or unavailable.");
      }
    }
  };

  const handleCopy = async () => {
    if (!canonicalUrl) return;
    try {
      const text = urlWithUtm || canonicalUrl;
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setFeedback("Link copied to clipboard.");
    } catch (error) {
      setFeedback("Copy failed. Try manually copying the URL.");
    }
  };

  const encodedTitle = encodeURIComponent(title ?? "");
  const encodedUrl = encodeURIComponent(urlWithUtm || canonicalUrl);

  const externalLinks = [
    {
      label: "LinkedIn",
      href: encodedUrl
        ? `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`
        : "https://www.linkedin.com/shareArticle?mini=true",
    },
    {
      label: "X",
      href: encodedUrl
        ? `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
        : "https://twitter.com/intent/tweet",
    },
    {
      label: "Reddit",
      href: encodedUrl
        ? `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`
        : "https://www.reddit.com/submit",
    },
    {
      label: "Email",
      href: encodedUrl
        ? `mailto:?subject=${encodedTitle}&body=${encodedUrl}`
        : `mailto:?subject=${encodedTitle}`,
    },
  ];

  return (
    <div
      className={`rounded-3xl border border-white/10 bg-slate-900/60 p-4 shadow-lg backdrop-blur ${className}`}
      role="group"
      aria-label="Share this article"
    >
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleNativeShare}
          className="inline-flex items-center gap-2 rounded-full bg-teal px-4 py-2 text-sm font-semibold text-dark shadow hover:bg-teal/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal disabled:cursor-not-allowed disabled:opacity-70"
          aria-label="Share using native options"
          disabled={!canNativeShare}
        >
          Share
          <span aria-hidden>📤</span>
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-teal hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          aria-label="Copy link to clipboard"
        >
          Copy link
        </button>

        <div className="flex flex-wrap items-center gap-2">
          {externalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-teal hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              aria-label={`Share on ${link.label}`}
            >
              {link.label}
              <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </div>

      <span className="mt-2 block text-xs text-slate-400" aria-live="polite">
        {feedback}
      </span>
    </div>
  );
}
