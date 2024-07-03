"use client";

import { useEffect, useState } from "react";
import { type CardData, ProductCard } from "@/components/ProductCard";
import type { Pod } from "@/lib/data/pods";

interface Props {
  filter: string;
  pods: Pod[];
  data: Record<string, CardData>;
}

export function Grid({ filter, pods, data }: Props) {
  const [visiblePods, setVisiblePods] = useState<Pod[] | null>(null);

  useEffect(() => {
    if (!filter.trim()) {
      setVisiblePods(null);
    } else {
      setVisiblePods(
        pods.filter(({ name }) => name.toLowerCase().includes(filter))
      );
    }
  }, [filter, pods]);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,var(--card-size))] place-content-center gap-4">
      {(visiblePods || pods).map((pod) => (
        <ProductCard key={pod.slug} pod={pod} data={data[pod.slug]} />
      ))}
    </div>
  );
}
