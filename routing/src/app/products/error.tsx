"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      {error.message}
      <button onClick={reset} 
       className="border border-2 border-green-800"
      >Try Me</button>
    </div>
  );
}
