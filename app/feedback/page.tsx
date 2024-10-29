'use client'

import { fetchUserData } from '@/lib/get-data'
import formbricks from '@formbricks/js'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Feedback() {
  const router = useRouter()

  useEffect(() => {
    async function checkPowerUser() {
      const { isPowerUser, data } = await fetchUserData()

      if (!isPowerUser) {
        return router.push('/')
      }

      formbricks.setAttribute('isPowerUser', isPowerUser)

      // Set other relevant attributes
      formbricks.setAttribute('projectsCreated', data.projectsCreated)
      formbricks.setAttribute('tasksCompleted', data.tasksCompleted)
      formbricks.setAttribute('teamMembersInvited', data.teamMembersInvited)
      formbricks.setAttribute('daysActive', data.daysActive)
    }

    checkPowerUser()
  }, [router])

  return <div>Feedback Page</div>
}
