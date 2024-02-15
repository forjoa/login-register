import { MotionDiv } from '@/lib/framer'
import { ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  return (
    <MotionDiv initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
      {children}
    </MotionDiv>
  )
}
