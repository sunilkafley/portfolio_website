const NoiseOverlay = () => {
  return (
    <div
      className="
        fixed
        inset-0
        pointer-events-none
        opacity-[0.03]
        z-999
      "
      style={{
        backgroundImage: "url('/noise.svg')",
      }}
    />
  )
}

export default NoiseOverlay
