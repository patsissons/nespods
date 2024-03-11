import Image from "next/image";
import { Rating } from "./Rating";
import { Pod, PodRegion, PodRegionAvailability } from "@/lib/data/pods";
import { Data } from "./types";

interface Props {
  pod: Pod;
  data: Data;
}

export function CardFront({
  pod: { image, name, description, availability },
  data: { rating, ratingCount },
}: Props) {
  const [, { price }, currency] = primaryRegion();
  return (
    <div className="flex flex-col h-full bg-primary-foreground">
      <div className="h-44 bg-neutral-300">
        <Image
          className="object-contain w-full h-full"
          src={image || "/img/sample.avif"}
          alt={name}
          width={320}
          height={320}
          loading="lazy"
        />
      </div>
      <div className="flex-1 flex flex-col gap-1 p-2">
        <h2 className="text-xl leading-none font-medium truncate-x">{name}</h2>
        <div className="flex-1">
          <p className="text-sm text-neutral-500 line-clamp-2">{description}</p>
        </div>
        <div className="flex justify-between gap-1 text-sm text-right leading-none text-neutral-700">
          <p className="font-mono">{`${currency} $${price.toFixed(2)}`}</p>
          <Rating rating={rating} count={ratingCount} />
        </div>
      </div>
    </div>
  );

  function primaryRegion():
    | [PodRegion, PodRegionAvailability]
    | [PodRegion, PodRegionAvailability, string] {
    if ("us" in availability && availability.us)
      return ["us", availability.us, "USD"];
    if ("ca" in availability && availability.ca)
      return ["ca", availability.ca, "CAD"];
    if ("hk" in availability && availability.hk)
      return ["hk", availability.hk, "HKD"];

    const region = Object.keys(availability)[0] as PodRegion;
    return [region, availability[region] as PodRegionAvailability];
  }
}
