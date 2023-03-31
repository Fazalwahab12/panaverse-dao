
import Footor from './Components/Footor'
import Navbar from './Components/Navbar'
import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <Navbar/>
        
        {children}
      <Footor/>
        </body>
    </html>
  )
}
