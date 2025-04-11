import type { ButtonLinkProps } from '@/lib/components/links/types/button-link-props'
import BaseButtonLink from '@/lib/components/links/BaseButtonLink'
import { cn } from '@/lib/utils/cn'

export default function PrimaryButtonLink({ href, children, className = '' }: ButtonLinkProps) {
  return (
    <BaseButtonLink
      href={href}
      className={cn(
        'py-3 bg-app-yellow-500 hover:scale-105 active:scale-95 transition-transform',
        className
      )}
    >
      {children}
    </BaseButtonLink>
  )
}
