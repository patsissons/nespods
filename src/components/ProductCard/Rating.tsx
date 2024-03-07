interface Props {
  rating: number;
  count: number;
}

export function Rating({ rating, count }: Props) {
  const stars = Math.round(rating);

  return (
    <>
      <span className="text-sm">{`${"★".repeat(stars)}${"☆".repeat(
        5 - stars
      )}`}</span>
      <span className="flex gap-1">
        <span>{rating.toFixed(1)}</span>
        <span>{`(${count})`}</span>
      </span>
    </>
  );
}
