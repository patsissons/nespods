import { CardBack } from "@/components/CardBack";
import { CardFront } from "@/components/CardFront";
import { FlipCard } from "@/components/FlipCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="flex flex-wrap gap-4">
        <FlipCard id="1" backside={(
          <CardBack />
        )}>
          <CardFront />
        </FlipCard>
        <FlipCard id="1" backside={(
          <CardBack />
        )}>
          <CardFront />
        </FlipCard>
        <FlipCard id="1" backside={(
          <CardBack />
        )}>
          <CardFront />
        </FlipCard>
        <FlipCard id="1" backside={(
          <CardBack />
        )}>
          <CardFront />
        </FlipCard>
        <FlipCard id="1" backside={(
          <CardBack />
        )}>
          <CardFront />
        </FlipCard>
        <FlipCard id="1" backside={(
          <CardBack />
        )}>
          <CardFront />
        </FlipCard>
        <FlipCard id="1" backside={(
          <CardBack />
        )}>
          <CardFront />
        </FlipCard>
        <FlipCard id="1" backside={(
          <CardBack />
        )}>
          <CardFront />
        </FlipCard>
      </div>
    </main>
  );
}
