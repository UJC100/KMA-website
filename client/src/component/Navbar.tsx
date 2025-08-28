import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import Contact from "../pages/Contact";


// Navbar.tsx or Navbar.jsx (with TypeScript enabled)
type NavbarProps = {
  onContactClick: () => void;
};

const Navbar = ({onContactClick}: NavbarProps) => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Bookshelf", path: "/books" },
    { name: "Contact", path: "/contact" },
    { name: "Event", path: "/events" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [showModal, setShowModal] = useState(false);
  const { openSignIn } = useClerk()
  const { user } = useUser();
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

       const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, linkName: string) => {
            if (linkName === "Contact") {
            e.preventDefault();
            onContactClick();
            }
        };

  return (
    <nav
      className={`fixed h-14 md:h-24 top-0 left-0  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <Link
        to="/"
        className="flex
                 items-center h-32"
      >
        <img src={assets.logo} alt="logo" className={`h-1/2 md:w-full w-auto `} />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link) => {

          return <Link
            key={link.name}
            to={link.path}
            onClick={link.name === "Contact" ? (e => handleClick(e, link.name)) : undefined}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? "text-gray-700" : "text-gray-700"
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled ? "bg-gray-700" : "bg-white"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </Link>
        }
        )}
        {user?.publicMetadata?.role === "admin" && (
          <button
            className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
              isScrolled ? "text-black" : "text-white"
            } transition-all`}
            onClick={() => navigate("/owner")}
          >
            Dashboard
          </button>
        )}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center">
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My-payments"
                labelIcon={<CreditCardIcon />}
                onClick={() => navigate("/my-payments")}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500 cursor-pointer"
          >
            Login
          </button>
        )}
      </div>
       <Contact isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        {user && (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My-payments"
                labelIcon={<CreditCardIcon />}
                onClick={() => navigate("/my-payments")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={assets.menuIcon}
          alt=""
          className={`invert h-4`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.closeIcon} alt="close menu" className="h-6.5" />
        </button>

         
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={e => {
                  if (link.name === "Contact") {
                    handleClick(e, link.name); // This will call onContactClick and prevent default
                    setIsMenuOpen(false);
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
              >
                {link.name}
              </Link>
            ))}

        {user && (
          <button
            onClick={() => navigate("/owner")}
            className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all"
          >
            Dashboard
          </button>
        )}

        {!user && (
          <button
            onClick={() => openSignIn()}
            className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
