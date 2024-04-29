const Button = ({children, classes, onClick}) => {
  return (
    <button className={`btn rounded-full ${classes} px-6`} onClick={onClick}>{children}</button>
  )
}
export default Button