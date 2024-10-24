// 'use client'

// import * as React from 'react'
// import Image from 'next/image'
// import { Slider } from '@/components/ui/slider'
// import { cn } from '@/lib/utils'

// interface BeforeAfterProps {
//   beforeImage: string
//   afterImage: string
//   beforeAlt: string
//   afterAlt: string
//   className?: string
// }

// export default function Component({
//   beforeImage = '/placeholder.svg?height=400&width=600',
//   afterImage = '/placeholder.svg?height=400&width=600',
//   beforeAlt = 'Before image',
//   afterAlt = 'After image',
//   className,
// }: BeforeAfterProps) {
//   const [sliderPosition, setSliderPosition] = React.useState(50)
//   const containerRef = React.useRef<HTMLDivElement>(null)

//   const handleSliderChange = (value: number[]) => {
//     setSliderPosition(value[0])
//   }

//   return (
//     <div className={cn('relative max-w-3xl mx-auto', className)} ref={containerRef}>
//       <div className="relative aspect-[3/2] overflow-hidden">
//         <Image
//           src={beforeImage}
//           alt={beforeAlt}
//           fill
//           className="object-cover"
//         />
//         <div
//           className="absolute top-0 right-0 bottom-0 overflow-hidden"
//           style={{ width: `${sliderPosition}%` }}
//         >
//           <Image
//             src={afterImage}
//             alt={afterAlt}
//             fill
//             className="object-cover"
//           />
//         </div>
//         <div
//           className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
//           style={{ left: `calc(${sliderPosition}% - 2px)` }}
//         />
//       </div>
//       <Slider
//         min={0}
//         max={100}
//         step={1}
//         value={[sliderPosition]}
//         onValueChange={handleSliderChange}
//         className="mt-4"
//         aria-label="Image comparison slider"
//       />
//       <div className="flex justify-between mt-2 text-sm text-muted-foreground">
//         <span>Before</span>
//         <span>After</span>
//       </div>
//     </div>
//   )
// }