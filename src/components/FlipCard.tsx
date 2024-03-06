'use client'

import { motion } from "framer-motion";
import { Key, type PropsWithChildren, useState } from "react";
import {
  Card,
} from "@/components/ui/card"
import { cn } from "@/lib/utils";

interface Props {
  id: Key;
  backside: React.ReactNode;
}

export function FlipCard({children, id, backside}: PropsWithChildren<Props>) {
  const [flipped, setFlipped] = useState(false)
  const [hovering, setHovering] = useState(false)

  const handleClick = () => {
    if (hovering) return;

    setFlipped(value => !value)
  }

  const handleEnter = () => {
    setHovering(true);
    setFlipped(true);
  }

  const handleLeave = () => {
    setHovering(false);
    setFlipped(false);
  }

  return (
    <div
      className="h-80 w-80"
      onClick={handleClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className="h-full"
        key={id}
        variants={{
          flipped: {
            rotateY: 180,
            scale: 1.1,
            transition: { duration: 0.35 },
          },
          default: {
            rotateY: 0,
            scale: 1,
            opacity: 1,
            transition: { duration: 0.35 },
          },
        }}
        animate={flipped ? "flipped" : "default"}
      >
        <Card className={cn("flex flex-col h-full overflow-hidden", {"bg-neutral-700 shadow-xl": flipped})}>
          {flipped ? (<div className="h-full [transform:rotateY(180deg)]">{backside}</div>) : children}
        </Card>
      </motion.div>
    </div>
  )
}
