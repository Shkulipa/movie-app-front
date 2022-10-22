import { useRef, useState, useEffect } from "react";

export default function useModalClickOutside() {
  const refModal = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleModal = () => setIsOpen(s => !s);
  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (isOpen && refModal.current && !refModal.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", checkIfClickedOutside)

    return () => {
      document.removeEventListener("click", checkIfClickedOutside)
    }
  }, [isOpen])

  return { isOpen, toggleModal, refModal }
}
