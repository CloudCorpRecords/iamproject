import { Link } from "wouter";

const links = [
  { name: "OpenSea", url: "https://opensea.io/collection/iamai-wtf" },
  { name: "Website", url: "https://iamai.wtf" },
  { name: "Art", url: "https://art.iamai.wtf" },
  { name: "TikTok", url: "https://www.tiktok.com/@iamai.wtf" }
];

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/20 mt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text">IAMAI</h3>
            <p className="text-gray-400 mt-2">
              Building the future of decentralized trading
            </p>
          </div>
          
          <nav>
            <ul className="flex gap-6">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-purple-500/20 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IAMAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
