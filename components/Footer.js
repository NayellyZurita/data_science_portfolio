import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
import Link from "next/link";



export default function Footer() {
  return (
    <footer>
      {/* Top strip with dark green background */}
      <div className="bg-grey text-sand py-6">
        <div className="container mx-auto flex flex-col items-center">
          {/* Social Icons */}
          <div className="flex space-x-8">
            <Link
              href="https://github.com/NayellyZurita"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-8 h-8 text-dark transition-colors hover:text-pgreen-light" />
            </Link>
            <Link
              href="https://linkedin.com/in/nayellyzurita/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-8 h-8 text-dark transition-colors hover:text-pgreen-light" />
            </Link>
            <Link
              href="mailto:nayelly.zurita@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="w-8 h-8 text-dark transition-colors hover:text-pgreen-light" />
            </Link>
            <Link
              href="https://www.kaggle.com/nayellyzurita"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiKaggle className="w-8 h-8 text-dark transition-colors hover:text-pgreen-light" />
          </Link>
        </div>
      </div>
    </div>

      {/* Bottom copyright section with neutral background */}
      <div className="bg-dark text-sand py-4">
        <p className="text-sm text-center font-medium">
          Copyright © {new Date().getFullYear()} Nayelly Zurita – All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
