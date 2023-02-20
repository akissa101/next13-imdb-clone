"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="px-12 mt-6">
      <h2 className="py-4 px-8 text-xl rounded-lg bg-red-200 text-red-700">
        Oops! {`${error}`}
      </h2>
      <button
        className="bg-red-900 rounded-lg px-8 py-2 mt-4"
        onClick={() => reset()}
      >
        Reset
      </button>
    </div>
  );
}
