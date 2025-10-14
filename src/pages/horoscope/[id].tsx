import { genestroImg } from "@/assets/images"
import { SEOHead } from "@/components"
import Image from "next/image"

const HoroscopeDetails = () => {
  return (
    <>
      <SEOHead title={'Horoscope Details'} />

      <section className="horoscope-details">
        <div className="card-header bg-white border-bottom p-3 sticky-sidebar">
          <h5 className="card-title text-black d-flex align-items-center gap-2">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23" height="20" x="0" y="0" viewBox="0 0 24 24" >
                <g><path d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg></a>
            Horoscope Details</h5>
        </div>
        <div className="container">
          <div className="row">


            <div className="col-12">

              <div className="details-card mt-3">
                <h6 className="mb-2">Raj Darwar</h6>
                <p className="mb-0"><strong>Gender:</strong> Male</p>
                <p className="mb-0"><strong>DOB:</strong> 2011-10-14</p>
                <p className="mb-0"><strong>TOB:</strong> 13:20:00</p>
                <p className="mb-0"><strong>Place:</strong> Jaipur, Rajasthan, India</p>

                <div className="horoscope-box my-2">
                  <Image
                    src={genestroImg}
                    alt="Horoscope Chart"
                    width={100}
                    height={100}
                    className="img-fluid w-100 rounded-2 shadow-lg bg-white mb-2 d-flex justify-content-center  p-2"
                  />
                </div>

                <div className="mahadasa-section mt-4">
                  <h5>Mahadasha</h5>

                  <div className="mahadasa-card">
                    <h6 className="text-center">Mahadasha 1</h6>
                    <p className="d-flex justify-content-between mb-1"><strong>Planet:</strong> सूर्य</p>
                    <p className="d-flex justify-content-between mb-1"><strong>Start:</strong> 6-6-2020 21:23</p>
                    <p className="d-flex justify-content-between mb-1"><strong>End:</strong> 7-6-2026 9:23</p>
                  </div>

                  <div className="mahadasa-card">
                    <h6 className="text-center">Mahadasha 2</h6>
                    <p className="d-flex justify-content-between mb-1"><strong>Planet:</strong>
                      <span>शुक्र</span>
                    </p>
                    <p className="d-flex justify-content-between mb-1"><strong>Start:</strong> 7-6-2025 3:23</p>
                    <p className="d-flex justify-content-between mb-1"><strong>End:</strong> 7-6-2038 9:23</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
export default HoroscopeDetails