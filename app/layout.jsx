import '@styles/globals.css'
import Providers from '@components/general/Providers'
// import Script from 'next/script'
 

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
      {/* <Script src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`}/> */}
    </html>
  )
}

export default RootLayout
