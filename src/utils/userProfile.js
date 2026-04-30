const STORAGE_KEY = "emertech_user_profile"

export function getStoredUserProfile() {
  try {
    const rawProfile = window.localStorage.getItem(STORAGE_KEY)

    if (!rawProfile) {
      return null
    }

    return JSON.parse(rawProfile)
  } catch {
    return null
  }
}

export function saveUserProfile(profile) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
}

export function hasStoredUserProfile() {
  return Boolean(getStoredUserProfile())
}

