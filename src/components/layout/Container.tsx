type ContainerProps = {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`container-custom ${className}`}>
      {children}
    </div>
  )
}

export default Container