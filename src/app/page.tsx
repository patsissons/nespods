import { ProductCard } from "@/components/ProductCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-4 min-h-screen min-w-[320px] [--card-size:theme('size.72')]">
      <header className="h-10 w-full bg-neutral-200">
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
              <Input
                className="h-8 max-w-full lg:max-w-[calc(var(--card-size)*2+theme('size.4')*1)] w-full"
                placeholder="Search"
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
      <section className="container mx-auto px-8">
        <div className="grid grid-cols-[repeat(auto-fit,var(--card-size))] place-content-center gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <ProductCard
              key={i}
              product={{
                title:
                  "title is really really really really really really really really really really really long",
                description:
                  "description is really really really really really really really really really really really long",
                price: Number((Math.random() * 100).toFixed(2)),
                image: "/img/sample.avif",
                rating: Number((Math.random() * 5).toFixed(1)),
                ratingCount: Math.floor(Math.random() * 990 + 10),
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
