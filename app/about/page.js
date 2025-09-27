// app/about/page.js
import NavigationBar from "@/components/NavBar";
import Profile from "@/components/about/profile";
import Experience from "@/components/about/experience";
import HobbiesShowcase from "@/components/about/hobbies";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main>
      <NavigationBar />
      <Profile />
      <Experience />
      <HobbiesShowcase />
      <Footer />
    </main>
  );
}
