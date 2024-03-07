import { Rating } from "./Rating";
import { Product } from "./types";

interface Props {
  product: Product;
}

export function CardBack({ product: { title, description, rating } }: Props) {
  return (
    <div className="flex flex-col gap-1 p-2 h-full bg-neutral-700">
      <h2 className="text-xl leading-none text-neutral-200 font-medium truncate">
        {title}
      </h2>
      <p className="flex-1 text-sm text-neutral-400">{description}</p>
      <p className="flex justify-end gap-1 text-xl leading-none text-neutral-200">
        <Rating rating={rating} />
      </p>
    </div>
  );
}
