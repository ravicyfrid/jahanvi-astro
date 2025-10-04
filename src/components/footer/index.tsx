import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                <p className="copyright-content">
                  Copyright 2024 Jahanvi Astro. <span>All rights reserved.</span>
                </p>
              </div>
              <div className="col-lg-7 col-md-6 col-sm-12 col-12 my-auto">

                <ul className="list-inline">

                  <li className="list-inline-item">
                    <Link href="/terms-conditions">
                      Terms and conditions
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link href="/privacy-policy">
                      |
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link href="/privacy-policy">
                      Privacy policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
