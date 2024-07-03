"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FilterInput } from "@/app/FilterInput";
import type { Pod } from "@/lib/data/pods";
import { Grid } from "./Grid";
import { useState } from "react";
import type { CardData } from "@/components/ProductCard";

interface Props {
  pods: Pod[];
  data: Record<string, CardData>;
}

export function Frame({ pods, data }: Props) {
  const [filter, setFilter] = useState("");

  return (
    <main className="flex flex-col items-center justify-between gap-4 [--card-size:theme('size.72')]">
      <header className="h-12 w-full bg-neutral-200">
        <nav className="max-w-[--card-size] md:max-w-[calc(var(--card-size)*2+theme('size.4')*1)] lg:max-w-[calc(var(--card-size)*3+theme('size.4')*2)] xl:max-w-[calc(var(--card-size)*4+theme('size.4')*3)] h-full mx-auto">
          <div className="flex items-center justify-between gap-1 px-2 h-full">
            <div>
              <Image
                className="h-8 w-8"
                src="/icon.svg"
                alt="logo"
                width={40}
                height={40}
                loading="eager"
              />
            </div>
            <div className="flex-1 flex justify-center">
              <FilterInput
                className="h-8 max-w-full lg:max-w-[calc(var(--card-size)*2+theme('size.4')*1)] w-full"
                placeholder="Filter by name"
                onChange={handleFilterChanged}
              />
            </div>
            <div>
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>NP</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </nav>
      </header>
      <section className="flex-1 container mx-auto px-8">
        <Grid filter={filter} pods={pods} data={data} />
      </section>
    </main>
  );

  function handleFilterChanged(value: string) {
    setFilter(value);
  }
}
