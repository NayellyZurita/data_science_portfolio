import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
import Link from "next/link";



export default function Footer() {
  return (
    <footer>
      {/* Top strip with dark green background */}
      <div className="bg-[#191927] text-[#DAD7CD] py-6">
        <div className="container mx-auto flex flex-col items-center">
          {/* Social Icons */}
          <div className="flex space-x-6">
            <Link href="https://github.com/your-username" target="_blank">
              <FaGithub className="w-8 h-8 hover:text-[#A3B18A] transition-colors" />
            </Link>
            <Link href="https://linkedin.com/in/your-username" target="_blank">
              <FaLinkedin className="w-8 h-8 hover:text-[#A3B18A] transition-colors" />
            </Link>
            <Link href="https://instagram.com/your-username" target="_blank">
              <FaInstagram className="w-8 h-8 hover:text-[#A3B18A] transition-colors" />
            </Link>
            <Link href="mailto:your-email@example.com" target="_blank">
              <FaEnvelope className="w-8 h-8 hover:text-[#A3B18A] transition-colors" />
            </Link>
            <Link href="https://www.kaggle.com/your-username" target="_blank">
              <SiKaggle className="w-8 h-8 hover:text-[#A3B18A] transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom copyright section with #DAD7CD background */}
      <div className="bg-[#E4E3EC] text-black py-4">
        <p className="text-sm text-center font-medium">
          Copyright © {new Date().getFullYear()} Nayelly Zurita – All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
