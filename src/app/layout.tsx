import { Inter } from 'next/font/google'
import { Providers } from '../components/providers'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import '../../global.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)]">
              <Sidebar />
              <main className="flex w-full flex-col overflow-hidden">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}

