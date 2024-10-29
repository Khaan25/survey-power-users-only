'use client'

import formbricks from '@formbricks/js'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function FormbricksProvider() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    formbricks.init({
      environmentId: '<your-environment-id>',
      apiHost: 'https://app.formbricks.com',
      userId: Math.random().toString(36).substring(2, 15),
    })
  }, [])

  useEffect(() => {
    formbricks?.registerRouteChange()
  }, [pathname, searchParams])

  return null
}
