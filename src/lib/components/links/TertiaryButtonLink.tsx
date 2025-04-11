import type { ButtonLinkProps } from '@/lib/components/links/types/button-link-props'
import BaseButtonLink from '@/lib/components/links/BaseButtonLink'
import { cn } from '@/lib/utils/cn'

export default function TertiaryButtonLink({ href, children, className = '' }: ButtonLinkProps) {
  return (
    <BaseButtonLink
      href={href}
      className={cn(
        'bg-transparent text-white hover:[text-decoration:underline_dashed] underline-offset-4',
        className
      )}
    >
      {children}
    </BaseButtonLink>
  )
}
