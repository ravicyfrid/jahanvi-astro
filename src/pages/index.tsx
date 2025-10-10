import { Astro, Astro2, Astro3, PlaceHolder, vriksha } from "@/assets/images";
import SEOHead from "@/components/seo";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GurumaPhoto } from "@/components/hero-banner/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <SEOHead title="Jahanvi Astro" />

      <section className="hero-banner-mobile">
        <div className="container">
          <div className="card">
            <div className="row">
              {/* Left Image Slider */}
              <div className="col-6">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  loop={true}
                  speed={1500}
                  pagination={{ clickable: true }}
                  autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                  keyboard={{ enabled: true }}
                  modules={[Navigation, Pagination, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <a href="#" className="hero-banner-images">
                      <Image
                        src={GurumaPhoto}
                        alt="Hero Banner"
                        className="img-fluid"
                        width={500}
                        height={450}
                        priority
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="#" className="hero-banner-images">
                      <Image
                        src={GurumaPhoto}
                        alt="Hero Banner"
                        className="img-fluid"
                        width={500}
                        height={450}
                        priority
                      />
                    </a>
                  </SwiperSlide>

                  {/* agar multiple images add karni ho to aur <SwiperSlide> yaha add kar sakte ho */}
                </Swiper>
              </div>
              <div className="col-6 d-flex align-items-center">
                <div className="hero-banner-content pe-2">

                  <p>
                    you! Jahanvi offers in-depth personal consultations, combining ancient wisdom with modern insight to provide clear guidance on all aspects of life. Whether
                  </p>
                </div>
              </div>
            </div>
            {/* Right Side Content */}
            {/* 
          <div className="col-lg-7 col-md-7 col-sm-12 col-12 my-auto">
            <div className="hero-banner-content">
              <h1>
                {props?.title ||
                  "Personalized Astrology Consultations by Jahanvi!"}
              </h1>
              <p>
                {props?.description ||
                  "Experience astrology tailored just for you! Jahanvi offers in-depth personal consultations, combining ancient wisdom with modern insight to provide clear guidance on all aspects of life. Whether you're seeking clarity in relationships, career, or personal growth, Jahanvi's expert astrology readings will illuminate the path forward."}
              </p>
            </div>
          </div> 
          */}
          </div>
        </div>
      </section>


      <section className="resolution-mobile pt-3 mb-2 border-bottom">
        <div className="container">
          <div className="row">
            {/* Left Image Slider */}
            <div className="col-12 text-center p-3">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                speed={1500}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                keyboard={{ enabled: true }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <h6>100k+ Resolutions till date</h6>
                  <p>
                    Jahanvi soni neema
                  </p>
                </SwiperSlide>

                <SwiperSlide>
                  <h6>100k+ Resolutions till date</h6>
                  <p>
                    Jahanvi soni neema
                  </p>
                </SwiperSlide>


              </Swiper>
            </div>

          </div>
          {/* Right Side Content */}
          {/* 
          <div className="col-lg-7 col-md-7 col-sm-12 col-12 my-auto">
            <div className="hero-banner-content">
              <h1>
                {props?.title ||
                  "Personalized Astrology Consultations by Jahanvi!"}
              </h1>
              <p>
                {props?.description ||
                  "Experience astrology tailored just for you! Jahanvi offers in-depth personal consultations, combining ancient wisdom with modern insight to provide clear guidance on all aspects of life. Whether you're seeking clarity in relationships, career, or personal growth, Jahanvi's expert astrology readings will illuminate the path forward."}
              </p>
            </div>
          </div> 
          */}
        </div>
      </section>

      <section className="home-page-section bg-white">
        <div className="top-img">
          {/* <img src="tree.jpg" alt="Tree Image" className="img-fluid w-100"> */}
          <Image src={vriksha} alt="vriksha mb-4" width={120} height={120} className="img-fluid w-100" />
        </div>

        <div className="container mt-4 mb-5">
          <div className="row geme-cards">
            <div className="col-12">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-4">
                    <Image src={Astro} className="icon me-1 img-fluid rounded-2" height={100} width={100} alt="Gems" />
                  </div>
                  <div className="col-8 d-flex aligh-items-center">
                    <div className="card-body py-1">
                      <h5 className="card-title">Gems</h5>
                      <p className="card-text">Gems or Gemstones play an important role in Vedic Astrology.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-4">
                    <Image src={Astro2} className="icon me-1 img-fluid rounded-2" height={100} width={100} alt="Gems" />
                  </div>
                  <div className="col-8 d-flex aligh-items-center">
                    <div className="card-body py-1">
                      <h5 className="card-title">Appointment</h5>
                      <p className="card-text">Gems or Gemstones play an important role in Vedic Astrology.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-4">
                    <Image src={Astro3} className="icon me-1 img-fluid rounded-2" height={100} width={100} alt="Gems" />
                  </div>
                  <div className="col-8 d-flex aligh-items-center">
                    <div className="card-body py-1">
                      <h5 className="card-title">Kundli</h5>
                      <p className="card-text">Gems or Gemstones play an important role in Vedic Astrology.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="card mb-3 p-2 d-flex flex-row align-items-center">

          <Image src={PlaceHolder} className="icon me-3" alt="Gems" />
          <div>
            <h5 className="mb-0 fw-bold">Gems</h5>
            <p className="mb-0 small text-muted">Gems or Gemstones play an important role in Vedic Astrology.</p>
          </div>
        </div>

        <div className="card mb-3 p-2 d-flex flex-row align-items-center">
          <Image src={PlaceHolder} className="icon me-3" alt="Appointment" />
          <div>
            <h5 className="mb-0 fw-bold">Appointment</h5>
            <p className="mb-0 small text-muted">Book an appointment with our expert astrologers.</p>
          </div>
        </div>

        <div className="card mb-3 p-2 d-flex flex-row align-items-center">
          <Image src={PlaceHolder} className="icon me-3" alt="Kundli" />
          <div>
            <h5 className="mb-0 fw-bold">Kundli</h5>
            <p className="mb-0 small text-muted">Check and create your horoscope.</p>
          </div>
        </div> */}
        </div>

        <nav className="navbar fixed-bottom bg-white align-items-center py-2 footer-menu-list justify-content-center shadow-lg">
          <ul className="list-inline d-flex gap-4 mb-0">
            <li className="list-inline-item">
              <a href="#" className="active">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 476.912 476.912"><g><path d="M461.776 209.408 249.568 4.52c-6.182-6.026-16.042-6.026-22.224 0L15.144 209.4a15.998 15.998 0 0 0-4.888 11.512c0 8.837 7.164 16 16 16h28.2v224c0 8.837 7.163 16 16 16h112c8.837 0 16-7.163 16-16v-128h80v128c0 8.837 7.163 16 16 16h112c8.837 0 16-7.163 16-16v-224h28.2c4.338 0 8.489-1.761 11.504-4.88 6.141-6.354 5.969-16.483-.384-22.624zm-39.32 11.504c-8.837 0-16 7.163-16 16v224h-112v-128c0-8.837-7.163-16-16-16h-80c-8.837 0-16 7.163-16 16v128h-112v-224c0-8.837-7.163-16-16-16h-28.2l212.2-204.88 212.28 204.88h-28.28z" fill="#939393" opacity="1" data-original="#939393"></path></g></svg>
                <span className="d-block">Home</span>
              </a>
            </li>

            <li className="list-inline-item">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 512 512"><g><path d="m504.387 153.441-80.68-112.606c-1.153-1.617-3.744-3.482-7.041-3.18-196.159-.102-126.814-.083-322.03-.083h-.008c-2.514 0-5.043 1.436-6.344 3.256L7.604 153.357c-1.86 2.593-1.862 6.834.198 9.455L249.85 471.494c3.101 3.943 9.235 3.886 12.291 0l242.047-308.682c2.081-2.653 2.062-6.78.199-9.371zm-324.145 12.36H331.75l-75.754 271.792zm75.782-106.977 65.448 91.346-130.9-.061zm95.908 91.285 65.459-91.285 65.448 91.346zm50.17-96.845-65.452 91.281-65.45-91.35zm-161.367 0-65.445 91.28-65.458-91.349zm-146.107 5.52 65.483 91.385-130.967-.061zm69.409 107.017 73.916 265.206L29.991 165.801zm110.002 265.205L347.955 165.8H482z" fill="#939393" opacity="1" data-original="#939393" ></path></g></svg>
                <span className="d-block">Gems</span>
              </a>
            </li>

            <li className="list-inline-item me-0">
              <button className="btn btn-primary rounded-circle add-btn">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 512 512"><g><path d="M471.579 215.579H296.421V40.421C296.421 18.132 278.289 0 256 0s-40.421 18.132-40.421 40.421v175.158H40.421C18.132 215.579 0 233.711 0 256s18.132 40.421 40.421 40.421h175.158v175.158C215.579 493.868 233.711 512 256 512s40.421-18.132 40.421-40.421V296.421h175.158C493.868 296.421 512 278.289 512 256s-18.132-40.421-40.421-40.421z" fill="#ffffff" opacity="1" data-original="#939393"></path></g></svg>
              </button>
            </li>

            <li className="list-inline-item">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 32 32"><g><path d="M16.94 29.75H3.08c-1.56 0-2.83-1.27-2.83-2.83V5.08c0-1.56 1.27-2.83 2.83-2.83h23.84c1.56 0 2.83 1.27 2.83 2.83v11.86a.75.75 0 0 1-1.5 0V5.08c0-.733-.597-1.33-1.33-1.33H3.08c-.733 0-1.33.597-1.33 1.33v21.84c0 .733.597 1.33 1.33 1.33h13.86a.75.75 0 0 1 0 1.5z" fill="#939393" opacity="1" data-original="#939393" ></path><path d="M29 9.75H1a.75.75 0 0 1 0-1.5h28a.75.75 0 0 1 0 1.5zM15 5.75a.75.75 0 0 1-.75-.75V1a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75zM5 5.75A.75.75 0 0 1 4.25 5V1a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75zM25 5.75a.75.75 0 0 1-.75-.75V1a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75zM9 17.75H5a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75zm-3.25-1.5h2.5v-2.5h-2.5zM17 17.75h-4a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75zm-3.25-1.5h2.5v-2.5h-2.5zM9 25.75H5a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75zm-3.25-1.5h2.5v-2.5h-2.5zM25 31.75c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75-3.028 6.75-6.75 6.75zm0-12c-2.894 0-5.25 2.355-5.25 5.25s2.356 5.25 5.25 5.25 5.25-2.355 5.25-5.25-2.356-5.25-5.25-5.25z" fill="#939393" opacity="1" data-original="#939393" ></path><path d="M27 25.75h-2a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v2.25H27a.75.75 0 0 1 0 1.5z" fill="#939393" opacity="1" data-original="#939393" ></path></g></svg>
                <span className="d-block">My bookings</span>
              </a>
            </li>

            <li className="list-inline-item">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 189.524 189.524" ><g><path fill-rule="evenodd" d="M170.94 151.134c11.678-15.753 18.584-35.256 18.584-56.372C189.524 42.426 147.097 0 94.762 0 42.426 0 0 42.426 0 94.762c0 52.335 42.426 94.762 94.762 94.762 27.458 0 52.188-11.678 69.496-30.339a95.39 95.39 0 0 0 6.682-8.051zm-5.254-8.991c9.071-13.552 14.361-29.849 14.361-47.381 0-47.102-38.183-85.286-85.286-85.286-47.101 0-85.285 38.184-85.285 85.286 0 17.533 5.29 33.829 14.362 47.381 11.445-17.098 28.909-29.827 49.361-35.155-9.875-6.843-16.342-18.255-16.342-31.179 0-20.934 16.971-37.905 37.905-37.905s37.905 16.971 37.905 37.905c0 12.923-6.468 24.336-16.342 31.178 20.451 5.329 37.916 18.057 49.361 35.156zm-6.104 8.047c-13.299-21.869-37.353-36.476-64.819-36.476-27.467 0-51.522 14.607-64.821 36.477 15.642 18.275 38.878 29.857 64.82 29.857s49.178-11.583 64.82-29.858zm-64.82-45.952c15.701 0 28.429-12.727 28.429-28.429 0-15.701-12.727-28.429-28.429-28.429S66.333 60.109 66.333 75.81s12.728 28.428 28.429 28.428z" clip-rule="evenodd" fill="#939393" opacity="1" data-original="#939393" ></path></g></svg>
                <span className="d-block">Account</span>
              </a>
            </li>
          </ul>
        </nav>
      </section >
    </>
  );
}

