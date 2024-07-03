import { IoShare } from "react-icons/io5";
import { Pod, PodRegion, PodRegionAvailability } from "@/lib/data/pods";
import { Badge } from "../ui/badge";
import { CardData } from "./types";
import { PropsWithChildren } from "react";
import { Button } from "../ui/button";

interface Props {
  pod: Pod;
  data?: CardData;
}

export function CardBack({
  pod: {
    slug,
    name,
    description,
    labels = [],
    acidity,
    bitterness,
    body,
    intensity,
    line,
    profile,
    roasting,
    availability,
  },
}: Props) {
  const [
    region,
    {
      url = `https://www.nespresso.com/${region}/en/order/capsules/${line}/${slug}`,
    },
  ] = primaryRegion();
  const allLabels = [
    // line,
    ...profile,
    ...labels,
    `Acid: ${acidity}`,
    `Bitter: ${bitterness}`,
    `Body: ${body}`,
    `Intensity: ${intensity}`,
    `Roasting: ${roasting}`,
  ];
  return (
    <div className="flex flex-col gap-1 p-2 h-full bg-neutral-700 text-primary-foreground">
      <h2 className="text-xl font-medium overflow-x-clip text-ellipsis whitespace-nowrap">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h2>
      <div className="flex-1 overflow-y-auto">
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center justify-center gap-1">
          <Badge className="bg-amber-900 text-neutral-100 font-semibold cursor-pointer">
            {line}
          </Badge>
          {allLabels.map((label) => (
            <Badge key={label}>{label}</Badge>
          ))}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,calc(var(--card-size)/2-theme('size.4')))] place-content-center gap-1 py-2">
          <Button disabled>Details</Button>
          {url !== "" && (
            <LinkButton
              href={
                url ||
                `https://www.nespresso.com/us/en/order/capsules/${line}/${slug}`
              }
            >
              Product
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  );

  function primaryRegion(): [PodRegion, PodRegionAvailability] {
    if ("us" in availability && availability.us) return ["us", availability.us];
    if ("ca" in availability && availability.ca) return ["ca", availability.ca];
    if ("hk" in availability && availability.hk) return ["hk", availability.hk];

    const region = Object.keys(availability)[0] as PodRegion;
    return [region, availability[region] as PodRegionAvailability];
  }
}

function LinkButton({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <a
      className="inline-flex items-center justify-center gap-1 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm p-1 hover:text-amber-700"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <IoShare />
    </a>
  );
}
