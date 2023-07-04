import "./globals.css"

export const metadata = {
  title: "PBJ",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="select-none box-border font-mono">{children}</body>
    </html>
  )
}
