import FeaturedService from "./components/FeaturedService";
import Features from "./components/Features";
import Hero from "./components/Hero";

export default async function Home() {
  

  return (
    <main>
     <Hero />
     <Features/>
     <FeaturedService />
    </main>
  )
}
