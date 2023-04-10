import AuthContext from './AuthContext';
import { getServerSession } from 'next-auth';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body>
        <AuthContext session={session!}>
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
