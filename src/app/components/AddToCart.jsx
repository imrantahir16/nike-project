import Button from "./Button"
import { TbBasketPlus } from "react-icons/tb";
const AddToCart = ({onClick, children}) => {
  return (
    <Button classes={"btn-primary"} onClick={onClick}>
      <div className="flex items-center justify-center gap-2">
        <TbBasketPlus size={'1.125rem'} />
        <span>{children}</span>
      </div>
    </Button>
  )
}
export default AddToCart