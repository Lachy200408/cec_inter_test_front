export default function LoadingMasterCard() {
  return (
    <article className="w-[360px] bg-white px-6 py-8 flex flex-wrap items-center gap-x-6 gap-y-4 rounded-lg">
      <div className="rounded-2xl w-[100px] h-[100px] skeleton" />
      <div className="flex-2/4">
        <div className="w-8 h-4 rounded-full skeleton" />
        <div className="w-8 h-4 rounded-full mt-2 skeleton" />
      </div>
      <div className="w-24 h-4 rounded-full skeleton" />
      <div className="w-16 h-4 rounded-full mt-2 skeleton" />
    </article>
  )
}
