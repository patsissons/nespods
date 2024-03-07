import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Rating } from "./Rating";
import { Product } from "./types";

interface Props {
  product: Product;
}

export function CardBack({
  product: { title, description, price, rating, ratingCount },
}: Props) {
  return (
    <div className="flex flex-col gap-1 p-2 h-full bg-neutral-700 text-primary-foreground">
      <h2 className="text-xl leading-none font-medium truncate">{title}</h2>
      <p className="flex-1 text-sm text-neutral-400">{description}</p>
      <div className="flex flex-wrap gap-1">
        <Badge>Label 1</Badge>
        <Badge>Label 2</Badge>
        <Badge>Label 3</Badge>
        <Badge>Label 4</Badge>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,calc(var(--card-size)/2-theme('size.4')))] place-content-center gap-1 py-2">
        <Button>Action 1</Button>
        <Button>Action 2</Button>
        <Button>Action 3</Button>
        <Button>Action 4</Button>
      </div>
      <div className="flex justify-between gap-1 text-xl leading-none">
        <p className="font-mono">{`$${price.toFixed(2)}`}</p>
        <Rating rating={rating} count={ratingCount} />
      </div>
    </div>
  );
}
