export function CardFront() {
  return (
    <div className="flex flex-col h-full">
      <div className="h-2/3 bg-neutral-300">img</div>
      <div className="flex-1 flex flex-col gap-1 p-2">
        <h2 className="text-xl font-medium truncate">title is really really really really really really really really really really really long</h2>
        <p className="text-sm text-neutral-500 line-clamp-2">description is really really really really really really really really really really really long</p>
        <p className="text-xl text-neutral-700">★★★★☆</p>
      </div>
    </div>
  )
}
