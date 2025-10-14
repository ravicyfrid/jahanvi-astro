import { SEOHead } from "@/components"
import { kundliService } from "@/services"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

const HoroscopeDetails = () => {
  const router = useRouter();
  const [kundli, setKundli] = useState<any>(null);

  useEffect(() => {
    if (!router.query.id) return; // wait until router.query.id is available

    kundliService.getKundlies({
      page: 1,
      per_page: 999999,
    }).then((res: any) => {
      const filtered = res.items?.filter((item: any) => item.id === router.query.id);
      setKundli(filtered ? filtered[0] : null);
    });
  }, [router.query.id]);

  return (
    <>
      <SEOHead title={'Horoscope Details'} />

      <section className="horoscope-details">
        <div className="card-header bg-white border-bottom p-3 sticky-sidebar">
          <h5 className="card-title text-black d-flex align-items-center gap-2">
            <Link href="/horoscope">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23" height="20" x="0" y="0" viewBox="0 0 24 24" >
                <g><path d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg></Link>
            Horoscope Details</h5>
        </div>

        {kundli ?
          <div className="container">
            <div className="row">


              <div className="col-12">

                <div className="details-card mt-3">
                  <h6 className="mb-2">{kundli?.full_name}</h6>
                  <p className="mb-0"><strong>Gender:</strong> {kundli?.gender}</p>
                  <p className="mb-0"><strong>DOB:</strong>{kundli?.dob}</p>
                  <p className="mb-0"><strong>TOB:</strong> {kundli?.tob}</p>
                  <p className="mb-0"><strong>Place:</strong> {kundli?.birth_place}</p>

                  <div className="horoscope-box my-2">
                    <div
                      className="d-flex justify-content-center p-2 bg-white rounded-2 shadow-lg"
                      dangerouslySetInnerHTML={{ __html: kundli?.horoscope_chart_image?.svg }}
                    />

                  </div>

                  <div className="mahadasa-section mt-4">
                    <h5>Mahadasha</h5>

                    <div className="mahadasa-card">
                      <h6 className="text-center">Mahadasha 1</h6>
                      <p className="d-flex justify-content-between mb-1"><strong>Planet:</strong>{kundli?.mahadasha?.major?.planet}</p>
                      <p className="d-flex justify-content-between mb-1"><strong>Start:</strong> {kundli?.mahadasha?.major?.start}</p>
                      <p className="d-flex justify-content-between mb-1"><strong>End:</strong> {kundli?.mahadasha?.major?.end}</p>
                    </div>

                    <div className="mahadasa-card">
                      <h6 className="text-center">Mahadasha 2</h6>
                      <p className="d-flex justify-content-between mb-1"><strong>Planet:</strong>{kundli?.mahadasha?.minor?.planet}</p>
                      <p className="d-flex justify-content-between mb-1"><strong>Start:</strong> {kundli?.mahadasha?.minor?.start}</p>
                      <p className="d-flex justify-content-between mb-1"><strong>End:</strong> {kundli?.mahadasha?.minor?.end}</p>
                    </div>


                    <div className="mahadasa-card">
                      <h6 className="text-center">Mahadasha 3</h6>
                      <p className="d-flex justify-content-between mb-1"><strong>Planet:</strong>{kundli?.mahadasha?.sub_minor?.planet}</p>
                      <p className="d-flex justify-content-between mb-1"><strong>Start:</strong> {kundli?.mahadasha?.sub_minor?.start}</p>
                      <p className="d-flex justify-content-between mb-1"><strong>End:</strong> {kundli?.mahadasha?.sub_minor?.end}</p>
                    </div>

                    <div className="mahadasa-card">
                      <h6 className="text-center">Mahadasha 4</h6>
                      <p className="d-flex justify-content-between mb-1"><strong>Planet:</strong>{kundli?.mahadasha?.sub_sub_minor?.planet}</p>
                      <p className="d-flex justify-content-between mb-1"><strong>Start:</strong> {kundli?.mahadasha?.sub_sub_minor?.start}</p>
                      <p className="d-flex justify-content-between mb-1"><strong>End:</strong> {kundli?.mahadasha?.sub_sub_minor?.end}</p>
                    </div>

                    <div className="mahadasa-card">
                      <h6 className="text-center">Mahadasha 5</h6>
                      <p className="d-flex justify-content-between mb-1"><strong>Planet:</strong>{kundli?.mahadasha?.sub_sub_sub_minor?.planet}</p>
                      <p className="d-flex justify-content-between mb-1"><strong>Start:</strong> {kundli?.mahadasha?.sub_sub_sub_minor?.start}</p>
                      <p className="d-flex justify-content-between mb-1"><strong>End:</strong> {kundli?.mahadasha?.sub_sub_sub_minor?.end}</p>
                    </div>

                  </div>
                </div>
              </div>
              {/* <Skelton/> */}
            </div>
          </div>
          :
          <Skelton />
        }
      </section>


    </>
  )
}
export default HoroscopeDetails


const Skelton = () => {
  return (
    <>

      <div className="col-12">
        <div className="details-card mt-3 p-3 rounded-3 shadow-sm bg-white">
          <>
            <div className="skeleton-horoscope skeleton-title mb-2" style={{ width: '50%' }}>

            </div>
            <div className="skeleton-horoscope skeleton-text mb-1" style={{ width: '40%' }}></div>
            <div className="sskeleton-horoscope skeleton-text mb-1" style={{ width: '60%' }}></div>
            <div className="skeleton-horoscope skeleton-text mb-1" style={{ width: '55%' }}></div>
            <div className="skeleton-horoscope skeleton-text mb-1" style={{ width: '70%' }}></div>

            <div className="skeleton-horoscope skeleton-box my-3"></div>

            <div className="skeleton-horoscope skeleton-subtitle mb-2" style={{ width: '30%' }}></div>
            <div className="skeleton-horoscope skeleton-card mb-2"></div>
            <div className="skeleton-horoscope skeleton-card"></div>
          </>

        </div>
      </div>
    </>
  )
}