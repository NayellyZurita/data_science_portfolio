import NavigationBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BlogCta from "@/components/projects/blog-cta";
import ResearchProjectsSection from "@/components/projects/research";

export default function ProjectsPage() {
  return (
    <main>
      <NavigationBar />
      <ResearchProjectsSection />
      <section className="bg-dark py-20">
        <div className="container mx-auto px-6">
          <BlogCta />
        </div>
      </section>
      <Footer />
    </main>
  );
}
