"use client";
import Base from "./base";
import fetcher from "@/utils/fetch";
import { useState, useEffect } from "react";

export default function Container() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const res = fetcher("/api/");
    res.then((data) => {
      setData(data);
    });
  }, []);
  return (
    data && (
      <section className="flex flex-col items-center justify-center">
        <Base data={data.portfolio} />
      </section>
    )
  );
}
