import { FlipCard } from "./FlipCard";
import { Product } from "./types";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return <FlipCard product={product} />;
}
