interface Props {
  rating: number;
}

export function Rating({ rating }: Props) {
  const stars = Math.round(rating);

  return (
    <>
      <span>{`${"★".repeat(stars)}${"☆".repeat(5 - stars)}`}</span>
      {/* <span>{stars}</span> */}
      <span>{rating.toFixed(1)}</span>
    </>
  );
}
