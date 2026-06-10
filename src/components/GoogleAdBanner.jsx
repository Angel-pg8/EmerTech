function GoogleAdBanner() {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#0d1120',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '130px',
          objectFit: 'cover',   
          display: 'block',
        }}
      >
        <source src="/video/banner.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default GoogleAdBanner