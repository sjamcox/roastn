import { useSession, signIn } from 'next-auth/react'

export default function Auth({ children }) {
  const { data: session, status } = useSession({ required: true })

  if (status === 'authenticated') {
    return children
  }

  if (status === 'unauthenticated') {
    signIn()
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}
