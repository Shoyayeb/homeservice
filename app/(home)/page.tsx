import { RootLayout } from "../components/Shared/RootLayout";
import FeaturedService from "./components/FeaturedService";
import Features from "./components/Features";
import Hero from "./components/Hero";

export default async function Home() {
  

  return (
    <RootLayout>
     <Hero />
     <Features/>
     <FeaturedService />
    </RootLayout>
  )
}
