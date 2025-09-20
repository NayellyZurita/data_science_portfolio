// app/about/page.js
import NavigationBar from "@/components/NavBar";
import Profile from "@/components/about/profile";
import Experience from "@/components/about/experience";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main>
      <NavigationBar />
      <Profile />
      <Experience />
      <Footer />
    </main>
  );
}
