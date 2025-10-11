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
import { Footer } from "@/components";
const Home = () => {
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
              <Link href={'/gemstone-category'}>
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
              </Link>
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

        <Footer />
      </section >
    </>
  )
}
export default Home