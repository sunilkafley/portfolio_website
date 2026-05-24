const GridBackground = () => {
  return (
    <div
      className="
        fixed
        inset-0
        opacity-[0.03]
        pointer-events-none
        z-[-1]
      "
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(255,255,255,0.05) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(255,255,255,0.05) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "60px 60px",
      }}
    />
  )
}

export default GridBackground