import NavigationBar from "@/components/NavBar";
import BlogSection from "@/components/blog/section";
import BlogProjectsLink from "@/components/blog/projects-link";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavigationBar />
      <BlogSection />
      <BlogProjectsLink />
      <Footer />
    </main>
  );
}
