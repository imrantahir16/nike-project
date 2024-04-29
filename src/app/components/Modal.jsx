import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

const Modal = ({ children, open, disableClickOutside, onClose }) => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    if (!disableClickOutside && open) {
      onClose();
    }
  });
  return (
    <div
      className={`modal modal-bottom sm:place-items-center w-full ${
        open ? "modal-open" : ""
      }`}
    >
      <div className="modal-box p-0 w-full sm:w-11/12 max-w-5xl sm:rounded-2xl" ref={ref}>
        {children}
      </div>
    </div>
  );
}
export default Modal