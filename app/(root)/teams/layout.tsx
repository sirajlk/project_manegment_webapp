import type React from "react"
import AppLayout from "@/components/layout/app-layout"

export default function TeamsLayout({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>
}
