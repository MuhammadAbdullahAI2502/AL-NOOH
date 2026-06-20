import { useEffect } from "react";

/**
 * Sets a unique <title> and meta description for the current page.
 * Lightweight alternative to react-helmet — no extra dependency needed.
 * Restores the site-wide defaults on unmount so navigating away is always clean.
 */
export function useSEO(title: string, description: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    const prevDescription = meta?.getAttribute("content") ?? "";
    if (meta) {
      meta.setAttribute("content", description);
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitle?.getAttribute("content") ?? "";
    if (ogTitle) ogTitle.setAttribute("content", title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDesc?.getAttribute("content") ?? "";
    if (ogDesc) ogDesc.setAttribute("content", description);

    return () => {
      document.title = prevTitle;
      if (meta) meta.setAttribute("content", prevDescription);
      if (ogTitle) ogTitle.setAttribute("content", prevOgTitle);
      if (ogDesc) ogDesc.setAttribute("content", prevOgDesc);
    };
  }, [title, description]);
}
