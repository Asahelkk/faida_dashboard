import '@styles/globals.css'
import Providers from '@components/general/Providers'

export const metadata = {
  title: 'Faida Dashboard',
  description: 'Faida Dashboard page',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
