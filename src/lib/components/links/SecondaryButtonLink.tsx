import type { ButtonLinkProps } from '@/lib/components/links/types/button-link-props'
import BaseButtonLink from '@/lib/components/links/BaseButtonLink'
import { cn } from '@/lib/utils/cn'

export default function SecondaryButtonLink({ href, children, className = '' }: ButtonLinkProps) {
  return (
    <BaseButtonLink href={href} className={cn('text-white', className)}>
      {children}
    </BaseButtonLink>
  )
}
