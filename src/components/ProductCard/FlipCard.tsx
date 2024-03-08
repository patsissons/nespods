"use client";

import { type PropsWithChildren, useState } from "react";
import { Pod } from "@/lib/data/pods";
import { cn } from "@/lib/utils";
import { CardBack } from "./CardBack";
import { CardFront } from "./CardFront";
import { Data } from "./types";

interface Props {
  pod: Pod;
  data: Data;
}

export function FlipCard({ pod, data }: Props) {
  const [flipped, setFlipped] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleClick = () => {
    if (hovering && flipped) return;

    setFlipped((value) => !value);
  };

  const handleEnter = () => {
    setHovering(true);
    setFlipped(true);
  };

  const handleLeave = () => {
    setHovering(false);
    setFlipped(false);
  };

  return (
    <div
      className="h-[--card-size] aspect-square bg-transparent [perspective:1000px]"
      onClick={handleClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        className={cn(
          "relative h-full rounded-lg transition-transform duration-700 [transform-style:preserve-3d]",
          { "[transform:rotateY(180deg)_scale(1.05)] shadow-xl": flipped }
        )}
      >
        <CardContentWrapper>
          <CardFront pod={pod} data={data} />
        </CardContentWrapper>
        <CardContentWrapper backside>
          <CardBack pod={pod} data={data} />
        </CardContentWrapper>
      </div>
    </div>
  );
}

function CardContentWrapper({
  children,
  backside,
}: PropsWithChildren<{ backside?: boolean }>) {
  return (
    <div
      className={cn(
        "absolute h-full w-full border rounded-lg overflow-hidden [backface-visibility:hidden] [-webkit-backface-visibility:hidden]",
        { "[transform:rotateY(180deg)]": backside }
      )}
    >
      {children}
    </div>
  );
}
