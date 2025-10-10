import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GurumaPhoto } from "./images";
import { _Object } from "@/utils/interfaces";
import { Navigation, Pagination } from "swiper/modules";
// import staff from '../../assets/images/staff.png'
export default function HeroBanner({ props }: _Object) {  
  const [consultationLink, setConsultationLink] = useState<string>(
    "mailto:hello@jahanviastro.com"
  );
  console.log(consultationLink)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isIOS =
      /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) &&
      !(window as _Object).MSStream;

    if (isIOS) {
      setConsultationLink("https://apps.apple.com/app/");
    } else {
      setConsultationLink("https://play.google.com/store/apps/details?id=222");
    }
  }, []);

  return (
    <>
      <section id="about-us" className="hero-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                speed={1500}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                keyboard={{ enabled: true }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                {props.images === null ? (
                  <div className="card">
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
                  </div>
                ) : (
                  props?.images?.map((item: { path: string }, i: number) => {
                    return (
                      <SwiperSlide key={i}>
                        <div className="card">
                          <a href="#" className="hero-banner-images">
                            <Image
                              src={item?.path ? item?.path : GurumaPhoto}
                              alt="Hero Banner"
                              className="img-fluid"
                              width={500}
                              height={450}
                              priority
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                    );
                  })
                )}
              </Swiper>
            </div>
            
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
          </div>
        </div>
      </section>

      <section className="consultations-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
              <h2 className="mb-lg-0 mb-sm-4 text-start">Align Your Energy with a Tailored Astrology Consultation</h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
              <div className="d-flex justify-content-md-center justify-content-center justify-content-lg-end gap-lg-4 gap-2">
                <div className="card shadow-sm border-0">
                  <div className="img-wrap">
                    <Image
                      src={GurumaPhoto}
                      alt="Hero Banner"
                      className="img-fluid"
                      width={500}
                      height={450}
                      priority
                    />
                  </div>
                  <div className="card-body text-center">
                    <h6 className="card-title fw-bold mb-0">Guruma</h6>
                    {/* <strong className="text-primary">₹2100</strong> */}
                    <p className="card-text text-black mt-1 mb-3">
                      Premium, in-depth guidance
                    </p>
                    <Link
                      href="https://play.google.com/store/apps/details?id=jahanviastro.app"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Book with Guruma
                    </Link>
                  </div>
                </div>
                {/* <div className="card shadow-sm border-0">
                  <div className="img-wrap">
                    <Image
                      src={staff}
                      alt="Hero Banner"
                      className="img-fluid"
                      width={500}
                      height={450}
                      priority
                    />
                  </div>
                  <div className="card-body text-center">
                    <h6 className="card-title fw-bold mb-0">Student</h6>
                    <strong className="text-primary">₹700</strong>
                    <p className="card-text text-black mt-1 mb-3">
                      Affordable and insightful
                    </p>
                    <Link
                      href="https://play.google.com/store/apps/details?id=jahanviastro.app"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      Book with Student
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
