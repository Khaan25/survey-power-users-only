import { fetchUserData } from '@/lib/get-data'
import { redirect } from 'next/navigation'

export default async function Home() {
  const { isPowerUser } = await fetchUserData()

  if (isPowerUser) {
    redirect('/feedback')
  }

  return <div className="flex items-center gap-4">This is your Main Page</div>
}
