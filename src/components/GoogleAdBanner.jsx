import { useEffect } from "react"
import { googleConfig } from "../config/googleConfig"

const ADS_CLIENT = googleConfig.adsClient || import.meta.env.VITE_GOOGLE_ADS_CLIENT
const ADS_SLOT = googleConfig.adsTopSlot || import.meta.env.VITE_GOOGLE_ADS_TOP_SLOT
const isConfigured =
  ADS_CLIENT &&
  ADS_SLOT &&
  !ADS_CLIENT.includes("xxxxxxxx") &&
  !ADS_SLOT.includes("xxxxxxxx")

function GoogleAdBanner() {
  useEffect(() => {
    if (!isConfigured) return

    const scriptId = "google-adsense-script"
    const adPushKey = "emertechTopAdPushed"

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script")
      script.id = scriptId
      script.async = true
      script.crossOrigin = "anonymous"
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CLIENT}`
      document.head.appendChild(script)
    }

    if (window[adPushKey]) return

    try {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
      window[adPushKey] = true
    } catch {
      // AdSense can reject duplicate pushes during development hot reloads.
    }
  }, [])

  if (!isConfigured) {
    return null
  }

  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-[#0d1120]/95 px-2 py-2 backdrop-blur">
      <ins
        className="adsbygoogle block min-h-[50px] w-full overflow-hidden rounded-md bg-white/5"
        style={{ display: "block" }}
        data-ad-client={ADS_CLIENT}
        data-ad-slot={ADS_SLOT}
        data-ad-format="horizontal"
        data-full-width-responsive="true"
      />
    </div>
  )
}

export default GoogleAdBanner
