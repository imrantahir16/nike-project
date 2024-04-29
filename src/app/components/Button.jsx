const Button = ({children, classes, onClick}) => {
  return (
    <button className={`btn rounded-full ${classes}`} onClick={onClick}>{children}</button>
  )
}
export default Button