import Image from "next/image";
import { Rating } from "./Rating";
import { Product } from "./types";

interface Props {
  product: Product;
}

export function CardFront({
  product: { image, title, description, price, rating, ratingCount },
}: Props) {
  return (
    <div className="flex flex-col h-full bg-primary-foreground">
      <div className="h-44 bg-neutral-300">
        <Image
          className="object-cover w-full h-full"
          src={image}
          alt={title}
          width={320}
          height={320}
          loading="lazy"
        />
      </div>
      <div className="flex-1 flex flex-col gap-1 p-2">
        <h2 className="text-xl leading-none font-medium truncate">{title}</h2>
        <div className="flex-1">
          <p className="text-sm text-neutral-500 line-clamp-2">{description}</p>
        </div>
        <div className="flex justify-between gap-1 text-xl text-right leading-none text-neutral-700">
          <p className="font-mono">{`$${price.toFixed(2)}`}</p>
          <Rating rating={rating} count={ratingCount} />
        </div>
      </div>
    </div>
  );
}
