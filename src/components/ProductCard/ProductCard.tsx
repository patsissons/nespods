import { Pod } from "@/lib/data/pods";
import { FlipCard } from "./FlipCard";
import { Data } from "./types";

interface Props {
  pod: Pod;
  data: Data;
}

export function ProductCard({ pod, data }: Props) {
  return <FlipCard pod={pod} data={data} />;
}
