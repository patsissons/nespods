import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-4 min-[320px]:px-8 min-h-screen min-w-[320px]">
      <header>
        <nav />
      </header>
      <div className="container mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,320px)] place-content-center gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <ProductCard
              key={i}
              product={{
                title:
                  "title is really really really really really really really really really really really long",
                description:
                  "description is really really really really really really really really really really really long",
                price: Number((Math.random() * 100).toFixed(2)),
                image: "https://placehold.co/320",
                rating: Number((Math.random() * 5).toFixed(1)),
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
