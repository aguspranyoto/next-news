import Link from "next/link";
import Image from "next/image";
import logo from "../public/aguud.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const navLinks = [
  { label: "Home", link: "/" },
  { label: "Nasional", link: "/nasional" },
  { label: "Internasional", link: "/internasional" },
  { label: "Ekonomi", link: "/ekonomi" },
  { label: "Olahraga", link: "/olahraga" },
  { label: "Teknologi", link: "/teknologi" },
  { label: "Otomotif", link: "/otomotif" },
  { label: "Hiburan", link: "/hiburan" },
  { label: "Gaya Hidup", link: "/gaya-hidup" },
];

const trendLinks = [
  { label: "Politik", link: "/politik" },
  { label: "Hukum & Kriminal", link: "/hukum&kriminal" },
  { label: "Peristiwa", link: "/periistiwa" },
  { label: "Pemilu 2024", link: "/pemilu2024" },
  { label: "Info Politik", link: "/info-politik" },
];

function Navbar() {
  return (
    <header className="sticky top z-30 bg-black text-white ">
      <nav className="max-w-[1100px] mx-auto">
        <div className="container flex justify-between">
          <div className="flex items-center relative py-3">
            <Link href="/">
              <Image
                src={logo}
                width={60}
                height={60}
                className="absolute top-0 left-0"
              />
            </Link>

            <ul className="flex ml-[78px] gap-3 text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center py-3 gap-2">
            <a href="">
              Ragam
              <span>
                <ArrowDropDownIcon />
              </span>
            </a>
            <button>
              <SearchIcon />
            </button>
            <div className="">
              <AccountCircleIcon />
            </div>
          </div>
        </div>
      </nav>
      <section className="bg-gray-200 ">
        <div className="max-w-[1100px] mx-auto">
          <div className="container">
            <div className="text-black py-3">
              <ul className="flex ml-[78px] gap-3 text-sm">
                {trendLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Navbar;
