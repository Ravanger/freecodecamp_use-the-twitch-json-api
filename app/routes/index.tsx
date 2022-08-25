import type { LinksFunction } from "@remix-run/node"
import Header, { links as headerLinks } from "~/components/Header"
import ScrollToTopButton, {
  links as scrollToTopButtonLinks,
} from "~/components/ScrollToTopButton"
import Wrapper, { links as wrapperLinks } from "~/components/Wrapper"

export const links: LinksFunction = () => {
  return [...wrapperLinks(), ...headerLinks(), ...scrollToTopButtonLinks()]
}

const Index = () => {
  return (
    <Wrapper>
      <Header title="Twitch Streamers" />
      <ScrollToTopButton />
    </Wrapper>
  )
}

export default Index
