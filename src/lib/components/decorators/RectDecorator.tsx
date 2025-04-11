import { cn } from '@/lib/utils/cn'

interface Props {
  className?: string
  style?: React.CSSProperties
}

export default function RectDecorator({ className, style }: Props) {
  return <div className={cn(className, 'h-1 rounded-full')} style={style} />
}
