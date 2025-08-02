import {createPortal} from "react-dom";
import {forwardRef, useImperativeHandle, useRef} from 'react';

const Modal = forwardRef(
    function Modal({children, buttonCaption},ref){
        const dialog = useRef();
        useImperativeHandle(ref, () => {
            return{
                open(){
                    dialog.current.showModal();
                }
            }
        })
        return createPortal(
            <dialog ref={dialog} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-30 p-6 border border-[#3E2723] rounded-xl bg-white shadow-lg text-center">
                {children}
                <form method="dialog">
                    <button className="font-montserrat mt-4 border bg-[#F4C9D6] text-[#3E2723] border-[#3E2723] rounded-full py-1 px-6 hover:bg-[#3E2723] hover:text-[#F4C9D6] hover:border-[#F4C9D6]">{buttonCaption}</button>
                </form>
            </dialog>, document.getElementById("modal-root")

        )
    }
)
export default Modal;