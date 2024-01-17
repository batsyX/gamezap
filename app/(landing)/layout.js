export const metadata = {
  title: 'Steam Play',
  description: 'Your favourite game store',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
