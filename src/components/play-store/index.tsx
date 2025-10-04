import Link from "next/link";
import { AppStore, GooglePlay, HeroBannerImages } from "./images";
import Image from "next/image";

export default function PlayStore() {
  return (
    <>
      <section className="mobile-app-section">
        <div className="container">
          <div className="row flex-lg-row-reverse flex-md-row-reverse">
            <div className="mobile-heading">
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="mobile-app-images">
                <Image src={HeroBannerImages} alt="Hand Phone" className="img-fluid animated" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
              <div className="mobile-app-content">
                <h2><span>Download our application </span></h2>
                <p>Enjoy seamless access to all features, whether you are on the web or on the go with our app.</p>
                <div className="app-store-button">
                    <Link href="javascript:void(0);">
                      <Image src={AppStore} alt="App Store" height={110} width={200} className="img-fluid" />
                    </Link>

                    <Link href="https://play.google.com/store/apps/details?id=jahanviastro.app" target="_blank">
                      <Image src={GooglePlay} alt="Google Play" height={110} width={200} className="img-fluid" />
                    </Link>
                </div>
              </div>
            </div>
           
          </div>

        </div>
      </section >
    </>
  );
}