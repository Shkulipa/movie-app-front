import { useRef, useState, useEffect } from "react";

export default function useModalClickOutside() {
  const refModal = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const toggleModal = () => setIsMenuOpen(s => !s);
  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (isMenuOpen && refModal.current && !refModal.current.contains(e.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", checkIfClickedOutside)

    return () => {
      document.removeEventListener("click", checkIfClickedOutside)
    }
  }, [isMenuOpen])

  return { isMenuOpen, toggleModal, refModal }
}
