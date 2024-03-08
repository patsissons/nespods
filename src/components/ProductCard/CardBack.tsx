import { Pod } from "@/lib/data/pods";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Data } from "./types";
import { PropsWithChildren } from "react";

interface Props {
  pod: Pod;
  data: Data;
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
    url,
    review,
  },
}: Props) {
  const allLabels = [
    line,
    profile,
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
        {name}
      </h2>
      <div className="flex-1 overflow-y-auto">
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center justify-center gap-1">
          {allLabels.map((label) => (
            <Badge key={label}>{label}</Badge>
          ))}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,calc(var(--card-size)/2-theme('size.4')))] place-content-center gap-1 py-2">
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
}

function LinkButton({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <a
      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm p-1"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
