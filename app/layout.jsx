import '@styles/globals.css'
import Providers from '@components/Providers'

export const metadata = {
  title: 'Faida Dashboard',
  description: 'Faida Dashboard page',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className='w-full h-full m-0'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
