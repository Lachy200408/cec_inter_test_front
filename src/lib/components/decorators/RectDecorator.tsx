import { cn } from '@/lib/utils/cn'

interface Props {
  className?: string
}

export default function RectDecorator({ className }: Props) {
  return <div className={cn('w-16 h-1', className)} />
}
