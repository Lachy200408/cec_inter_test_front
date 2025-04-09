interface Props {
  rating: number
}

export default function StarRating({ rating }: Props) {
  return (
    <div className="rating rating-md">
      {Array.from({ length: 5 }, (_, index) =>
        index + 1 !== rating ? (
          <div
            key={index}
            className="mask mask-star-2 bg-app-yellow-500"
            aria-label={`${index + 1} Star`}
          />
        ) : (
          <div
            key={index}
            className="mask mask-star-2 bg-app-yellow-500"
            aria-label={`${index + 1} Star`}
            aria-current="true"
          />
        )
      )}
    </div>
  )
}
