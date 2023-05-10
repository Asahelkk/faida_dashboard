import '@styles/globals.css'

export const metadata = {
  title: 'Faida Dashboard',
  description: 'Faida Dashboard page',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
