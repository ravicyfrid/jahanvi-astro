import { useEffect, useRef, useState } from "react";
import { Logo, UserIcon } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import crossIcon from '../../assets/images/close.svg'
import { useDispatch } from "react-redux";
import { destroyAuthSession } from "@/redux/slices/session.slice";

export default function Header() {
  const [active, setActive] = useState<string>("home");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch()

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSetActive = (section: string) => {
    setActive(section);
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="sticky-sidebar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link href="/" onClick={() => handleSetActive("home")} className="brand-logo">
            <Image src={Logo} alt="Logo" height="60" width="60" />
          </Link>
          {isOpen ?
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="mainmenu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <Image src={crossIcon} alt="" width={30} height={30} />
            </button> :
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="mainmenu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>}
          <div
            ref={menuRef}
            className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
            id="mainmenu"
          >
            <div className="main-navbar ms-auto">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="https://mediumaquamarine-oryx-625809.hostingersite.com" className={`nav-link ${active === "home" ? "active" : ""}`}
                    onClick={() => handleSetActive("home")} >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="https://mediumaquamarine-oryx-625809.hostingersite.com"
                    className={`nav-link ${active === "about" ? "active" : ""}`}
                    onClick={() => handleSetActive("about")} >
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="https://mediumaquamarine-oryx-625809.hostingersite.com" className={`nav-link ${active === "gemstones" ? "active" : ""}`}
                    onClick={() => handleSetActive("gemstones")}>
                    Gemstones
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className={`nav-link ${active === "contact" ? "active" : ""}`}
                    href="https://mediumaquamarine-oryx-625809.hostingersite.com"
                    onClick={() => handleSetActive("contact")}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="btn border-0 d-flex gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <Image src={UserIcon} alt="UserIcon" height="25" width="25" />
                      {/* <span>Profile</span> */}
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="/update-profile">Update Profile</Link></li>
                      <li>
                        <button
                          type="button" className="dropdown-item"
                          onClick={() => {
                            if (window.confirm("Do you wish to sign out?")) {
                              dispatch(destroyAuthSession());
                            }
                          }}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
