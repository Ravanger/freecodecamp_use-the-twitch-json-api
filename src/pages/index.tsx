import type { NextPage } from "next"
import Header from "../components/Header"
import ScrollToTopButton from "../components/ScrollToTopButton"
import Wrapper from "../components/Wrapper"
import { NextSeo } from "next-seo"

const Home: NextPage = () => {
  return (
    <Wrapper>
      <NextSeo
        title="Use the Twitch JSON API"
        description="freeCodeCamp: Use the Twitch JSON API"
        openGraph={{
          title: "Use the Twitch JSON API",
          description: "freeCodeCamp: Use the Twitch JSON API",
          type: "website",
          site_name: "Use the Twitch JSON API",
        }}
        twitter={{
          handle: "@BRossovsky",
          site: "@BRossovsky",
          cardType: "summary",
        }}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        ]}
      />
      <Header title="Twitch Streamers" />
      <ScrollToTopButton />
    </Wrapper>
  )
}

export default Home
