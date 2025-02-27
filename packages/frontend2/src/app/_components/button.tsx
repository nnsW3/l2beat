import { type VariantProps, cva } from 'class-variance-authority'
import React from 'react'

import { cn } from '~/utils/cn'
import { PlainLink } from './plain-link'

const buttonVariants = cva(
  'flex w-max cursor-pointer items-center justify-center px-6 py-2 text-center font-bold transition-colors duration-100',
  {
    variants: {
      variant: {
        default: 'bg-white text-black',
        purple: 'border border-pink-900 hover:bg-pink-900/25',
      },
      size: {
        default: 'rounded-lg text-base',
        sm: 'rounded-md text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type Props<T extends React.ElementType> = {
  children: React.ReactNode
  className?: string
  as?: T
} & VariantProps<typeof buttonVariants> &
  React.ComponentPropsWithoutRef<T>

export function Button<T extends React.ElementType>({
  children,
  className,
  as,
  variant,
  size,
  ...rest
}: Props<T>) {
  // Plain link was used in the old frontend for a tag
  const Comp = as === 'a' ? PlainLink : 'button'

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...rest}
    >
      {children}
    </Comp>
  )
}
