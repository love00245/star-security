import type { ElementType, HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: ElementType
  width?: 'default' | 'narrow' | 'wide'
}

const widthMap = {
  narrow: 'max-w-4xl',
  default: 'max-w-container',
  wide: 'max-w-[1440px]',
} as const

export function Container({
  as: Tag = 'div',
  width = 'default',
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={cn('mx-auto w-full px-6 md:px-8 lg:px-12', widthMap[width], className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
