export const fetchUserData = async () => {
  // This is a placeholder. Replace with your actual API call.
  // const response = await fetch('/api/user-data')
  // const data = await response.json()

  const userId = Math.random().toString(36).substring(2, 15)
  const data = {
    projectsCreated: 6,
    tasksCompleted: 105,
    teamMembersInvited: 24,
    daysActive: 87,
  }
  const isPowerUser = data.projectsCreated >= 5 && data.tasksCompleted >= 100 && data.teamMembersInvited >= 10 && data.daysActive >= 60

  return {
    userId,
    data,
    isPowerUser,
  }
}
