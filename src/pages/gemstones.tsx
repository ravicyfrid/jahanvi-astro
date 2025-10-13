import Image from "next/image"
import {  CategoryIcon, PlaceHolder } from "@/assets/images"
import { useEffect, useState } from "react"
import { gemsService } from "@/services"
import { Footer, SEOHead } from "@/components"
import { Breadcrumb } from "@/assets/svg"
import Link from "next/link"

const Gemstones = () => {
  const [results, setResults] = useState<any>({ items: [], pagination: {} })
  const [shoItemsVertically, setShowItemsVertically] = useState(false)

  useEffect(() => {
    gemsService.getGems().then((results: any) => {
      setResults({ items: results.items, pagination: results.pagination })
    })
  }, [])

  return (
    <>
      <SEOHead title={'Gemstones'} />
      <section className="gems-details-mobile">
        <div className="card-header bg-white border-bottom p-3 sticky-sidebar d-flex justify-content-between">

          <h5 className="card-title text-black d-flex align-items-center gap-2">
            Gemstone
          </h5>

          {shoItemsVertically ?
            <button type="button" className="border-0 bg-white" onClick={() => setShowItemsVertically(!shoItemsVertically)}>
              <Breadcrumb />
            </button>
            :
            <button type="button" className="border-0 bg-white" onClick={() => setShowItemsVertically(!shoItemsVertically)}>
              <Image src={CategoryIcon} className="icon me-1 img-fluid" height={20} width={20} alt="Category icon" />
            </button>
          }
        </div>

        <div className="container pt-4">
          <div className="row">
            {results?.items.length > 0 ? results?.items?.map((item: any, i: number) => (
              shoItemsVertically ? (
                <div className="col-6" key={i}>
                  <div className="card mb-3 shadow-sm rounded-2 mb-2 bg-white">
                    <Link href={`/gemstones/${item.id}`}>
                      <Image src={item?.images[0]?.path || PlaceHolder} className="icon me-1 img-fluid rounded-2 w-100" height={100} width={100} alt={item.title} />
                      <div className="card-body py-1 px-1 text-center">
                        <h5 className="card-title text-primary mb-1">{item.title}</h5>
                        <p className="mb-1">Price:{item.price}</p>
                      </div>
                    </Link>
                  </div>
                </div>

              ) : (

                <div key={i} className="card mb-3 rounded-2 mb-2 ps-0 gemes-details-card-box">
                  <Link href={`/gemstones/${item.id}`}>
                    <div className="row g-0">
                      <div className="col-4">
                        <Image src={item?.images[0]?.path || PlaceHolder} className="icon card-img-top rounded-2" height={100} width={100} alt={item.title} />
                      </div>
                      <div className="col-8 ps-2 d-flex align-items-center">
                        <div className="card-body py-1 px-1">
                          <h5 className="card-title text-primary mb-1">
                            {item.title}</h5>
                          <h6 className="mb-1">Price:{item.price}</h6>
                          <p className="mb-0">
                            {item?.description?.length > 79
                              ? item.description.slice(0, 79) + "..."
                              : item?.description}
                          </p>

                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            )
            ) :
              <HorizontalSkeleton />
            }
          </div>
          {/* <div className="row gap-4">
            <div className="col-12">




              <div className="card mb-3 rounded-2 mb-2 ps-0 gemes-details-card-box">
                <div className="row g-0">
                  <div className="col-4">
                    <Image src={CoralImg} className="icon card-img-top rounded-2" height={100} width={100} alt="Coral (Moonga)" />
                  </div>
                  <div className="col-8 ps-2 d-flex align-items-center">
                    <div className="card-body py-1 px-1">
                      <h5 className="card-title text-primary mb-1">Coral (Moonga)</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3 rounded-2 mb-2 ps-0 gemes-details-card-box">
                <div className="row g-0">
                  <div className="col-4">
                    <Image src={BlueTopaz} className="icon card-img-top rounded-2" height={100} width={100} alt="Blue Topaz" />
                  </div>
                  <div className="col-8 d-flex align-items-center ps-2">
                    <div className="card-body py-1 px-1">
                      <h5 className="card-title text-primary mb-1">Blue Topaz</h5>

                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3 bg-white rounded-2 mb-2 ps-0 gemes-details-card-box">
                <div className="row g-0">
                  <div className="col-4">
                    <Image src={CatsEye} className="icon card-img-top rounded-2" height={100} width={100} alt="Cats Eye" />
                  </div>
                  <div className="col-8 ps-2 d-flex align-items-center">
                    <div className="card-body py-1 px-1">
                      <h5 className="card-title text-primary">Cats Eye (Lahsuniya)
                        Pearl (Moti)</h5>

                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3 rounded-2 mb-2 bg-white gemes-details-card-box">
                <div className="row g-0">
                  <div className="col-4">
                    <Image src={PearlMoti} className="icon me-2 card-img-top rounded-2" height={100} width={100} alt="Pearl Moti" />
                  </div>
                  <div className="col-8 ps-2 d-flex align-items-center">
                    <div className="card-body py-1 px-1">
                      <h5 className="card-title text-primary">
                        Pearl (Moti)</h5>

                    </div>
                  </div>
                </div>
              </div>


              <div className="card mb-3 rounded-2 mb-2 bg-white gemes-details-card-box">
                <div className="row g-0">
                  <div className="col-4">
                    <Image src={PearlMoti} className="icon card-img-top rounded-2" height={100} width={100} alt="Gems" />
                  </div>
                  <div className="col-8 ps-2 d-flex align-items-center">
                    <div className="card-body py-1 px-1">
                      <h5 className="card-title text-primary">
                        Pearl (Moti)</h5>
                      <h6>Price</h6>
                      <p className="mb-0">Lorem, ipsum dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div> */}

          {/* <div className="row">

            <div className="col-6">
              <div className="card mb-3 shadow-sm rounded-2 mb-2 bg-white">
                <Image src={OpalImg} className="icon me-1 img-fluid rounded-2 w-100" height={100} width={100} alt="Gems" />
                <div className="card-body py-1 px-1 text-center">
                  <h5 className="card-title text-primary mb-1">Opal</h5>
                  <p>Price:4500</p>

                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="card mb-3 shadow-sm rounded-2 mb-2 bg-white">
                <Image src={OpalImg} className="icon me-1 img-fluid rounded-2 w-100" height={100} width={100} alt="Gems" />
                <div className="card-body py-1 px-1 text-center">
                  <h5 className="card-title text-primary mb-2">Opal</h5>
                  <p>Price:400</p>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </section >
      <Footer />

    </>

  )
}
export default Gemstones

const HorizontalSkeleton = () => {
  return (

    <div className="card mb-3 rounded-2 mb-2 ps-0 geme-category-skeleton">
      <div className="row g-0">
        <div className="col-4 placeholder-glow">
          <p className="placeholder gemes-img-skeletons mb-0 rounded-2"></p>
        </div>
        <div className="col-8 ps-2 d-flex align-items-center">
          <div className="card-body ps-0 placeholder-glow">
            <h5 className="card-title placeholder col-7"></h5>
            <p className="mb-1 placeholder col-6"></p>
            <span className="placeholder col-7 sub-title-skeleton"></span>
          </div>
        </div>
      </div>
    </div>
  )
}