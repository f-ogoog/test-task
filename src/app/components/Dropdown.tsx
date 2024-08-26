"use client"

import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Dropdown({ items, label, currentValue, onUpdateValue }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='w-[200px]' variant="outline">
          {currentValue || label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 max-h-64 overflow-y-auto bg-white">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={currentValue || label} onValueChange={onUpdateValue}>
          {items.map((item) => (
            <DropdownMenuRadioItem
              key={item}
              value={item}
            >
              {item}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
