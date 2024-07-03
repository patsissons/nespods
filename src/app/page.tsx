import { pods } from "@/lib/data/pods";
import { Frame } from "./Frame";
import type { CardData } from "@/components/ProductCard";

async function loadData(): Promise<Record<string, CardData>> {
  return Promise.resolve(
    Object.fromEntries(
      pods.map((pod) => {
        return [
          pod.slug,
          {
            rating: Number((Math.random() * 5).toFixed(1)),
            ratingCount: Math.floor(Math.random() * 990 + 10),
          },
        ];
      })
    )
  );
}

export default async function Home() {
  const data = await loadData();

  return <Frame pods={pods} data={data} />;
}
