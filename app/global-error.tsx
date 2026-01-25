"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          fontFamily: "system-ui, sans-serif"
        }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "16px" }}>
              Something went wrong
            </h1>
            <p style={{ color: "#666", marginBottom: "24px" }}>
              We apologize for the inconvenience.
            </p>
            <button
              onClick={() => reset()}
              style={{
                backgroundColor: "#f97316",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                border: "none",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
