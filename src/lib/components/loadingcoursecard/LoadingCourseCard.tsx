export default function LoadingCourseCard() {
  return (
    <article className="w-[260px] h-[336px] bg-white rounded-2xl flex flex-col shadow-md">
      <div className="w-full h-[172px] overflow-hidden relative skeleton rounded-b-none rounded-t-xl" />
      <div className="w-full flex-1 grid grid-cols-2 grid-rows-[1fr,auto] p-4">
        <div className="col-span-2 flex flex-col gap-4">
          <div className="w-48 h-4 rounded-full skeleton" />
          <div className="w-56 h-4 rounded-full skeleton" />
        </div>
        <div className="w-16 h-4 rounded-full self-center skeleton" />
        <div className="flex items-center gap-2 self-center justify-self-end">
          <div className="w-8 h-4 rounded-full skeleton" />
          <div className="w-8 h-4 rounded-full skeleton" />
        </div>
      </div>
    </article>
  )
}
