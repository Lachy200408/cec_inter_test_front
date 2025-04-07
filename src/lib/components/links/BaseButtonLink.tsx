import type { ButtonLinkProps } from '@/lib/components/links/types/button-link-props'
import Link from 'next/link'
import { cn } from '@/lib/utils/cn'

export default function BaseButtonLink({ href, children, className = '' }: ButtonLinkProps) {
  return (
    <Link href={href} className={cn('p-3 rounded-lg flex gap-2 items-center', className)}>
      {children}
    </Link>
  )
}
