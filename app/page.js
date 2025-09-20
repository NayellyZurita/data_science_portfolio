
import NavigationBar from "../components/NavBar";
import WelcomeSection from "@/components/home/welcome";
import SectionsOverview from "@/components/home/overview";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavigationBar />
      <WelcomeSection />
      <SectionsOverview />
      <Footer />
    </main>
  );
}
