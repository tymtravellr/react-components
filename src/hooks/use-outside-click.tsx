import { useEffect } from "react";

interface OutsideClickProps {
    ref: React.RefObject<HTMLElement>;
    handler: () => void
}

/* 
    This hook is used to determine outside click. We can use this for dropdown, overlay etc.
*/
const useOutsideClick = ({ ref, handler }: OutsideClickProps) => {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                handler()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ref, handler])
}

export default useOutsideClick