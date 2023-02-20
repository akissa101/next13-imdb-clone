import Image from "next/image";
import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center items-center  h-{220px}">
      <Image src="loading.svg" alt="loading..." width={120} height={120} />
    </div>
  );
}
