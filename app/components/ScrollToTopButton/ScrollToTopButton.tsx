import type { LinksFunction } from "@remix-run/node"
import styles from "./ScrollToTopButton.module.css"
import { FiChevronUp } from "react-icons/fi"
import { useEffect, useState } from "react"
import classNames from "classnames"

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    document.addEventListener("scroll", toggleVisibility)
    return () => {
      document.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <button
      className={classNames("scrollToTop", isVisible && "showButton")}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }}>
      <FiChevronUp size="3ch" />
    </button>
  )
}

export default ScrollToTopButton
