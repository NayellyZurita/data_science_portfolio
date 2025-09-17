import Image from "next/image";
import Link from "next/link";

export default function HeaderSection() {
  return (
    <header className="bg-[#283618] text-[#DAD7CD] py-6">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Left: Name */}
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">Nayelly Zurita</span>
        </div>
        {/* Right: Image */}
        <div className="flex items-center gap-4">
          <Image
            src="/neural.png"
            alt="Neural"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
      </div>
      {/* NavBar */}
      <nav className="mt-4">
        <ul className="flex justify-center gap-8 text-lg font-semibold">
          <li>
            <Link href="/"><span className="hover:underline">Home</span></Link>
          </li>
          <li>
            <Link href="/about"><span className="hover:underline">About</span></Link>
          </li>
          <li>
            <Link href="/portfolio"><span className="hover:underline">Projects</span></Link>
          </li>
          <li>
            <Link href="/blog"><span className="hover:underline">Blog</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}