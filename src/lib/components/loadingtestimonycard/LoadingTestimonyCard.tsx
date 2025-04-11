export default function LoadingTestimonyCard() {
  return (
    <article className="w-[360px] px-6 py-8 flex flex-wrap items-center gap-y-4 gap-x-6 rounded-xl">
      <div className="w-16 h-4 rounded-full skeleton" />
      <div className="w-full h-4 rounded-full skeleton" />
      <div className="w-12 h-4 rounded-full skeleton" />
      <div className="size-16 rounded-full skeleton" />
      <div className="flex-1">
        <div className="w-8 h-4 rounded-full skeleton" />
        <div className="w-4 h-4 rounded-full skeleton" />
      </div>
    </article>
  )
}
