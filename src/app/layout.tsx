import type { Metadata } from 'next'
import { Inter, Quicksand } from 'next/font/google'
import './globals.css'

const quickSand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Strociak - Grupo Inmobiliario',
  description: 'Grupo Inmobiliario Strociak - Venta y alquiler de propiedades',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={quickSand.className}>{children}</body>
    </html>
  )
}
