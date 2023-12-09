
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from "@/components/theme-provider"
import TopBar from '@/components/navbar/nav'
import { AccordionLeftbar } from '@/tools/accordance'
import { Suspense } from 'react'
import { Card } from '@/components/ui/card'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Under the hood',
  description: 'Generated by the UoNs',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
          >
            <TopBar /> 
            <div className=" flex h-screen">
            <section className='left-0 fixed w-[20%] px-2 h-[100vh] border-r'>
              <Card className='p-2 mt-2 border-none shadow-none'>
              <AccordionLeftbar/>
              </Card>
            </section>
            <section className='w-full ml-[21%] p-3'>

              <Card className="h-screen border-none shadow-none p-2">
              {children}
        
                
                </Card>
            </section>
      

    </div>

          
        </ThemeProvider>
        
        </body>
    </html>
  )
}

