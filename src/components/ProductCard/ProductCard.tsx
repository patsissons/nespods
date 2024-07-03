import { Pod } from "@/lib/data/pods";
import { FlipCard } from "./FlipCard";
import { CardData } from "./types";

interface Props {
  pod: Pod;
  data?: CardData;
}

export function ProductCard({ pod, data }: Props) {
  return <FlipCard pod={pod} data={data} />;
}
