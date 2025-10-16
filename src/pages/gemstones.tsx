import Image from "next/image"
import { CategoryIcon, PlaceHolder } from "@/assets/images"
import React, { useEffect, useState } from "react"
import { gemsService } from "@/services"
import { Footer, Pagination, SEOHead } from "@/components"
import { Breadcrumb } from "@/assets/svg"
import Link from "next/link"

const Gemstones = () => {
  const [results, setResults] = useState<any>({ items: [], pagination: {} })
  const [shoItemsVertically, setShowItemsVertically] = useState(false)
  const [filters, setFilters] = React.useState<any>({
    page: 1,
    per_page: 6,
  })

  useEffect(() => {
    gemsService.getGems(filters).then((results: any) => {
      setResults({ items: results.items, pagination: results.pagination })
    })
  }, [filters])

  return (
    <>
      <SEOHead title={'Gemstones'} />
      <section className="gems-details-mobile">
        <div className="card-header bg-white border-bottom p-3 sticky-sidebar d-flex justify-content-between">

          <h5 className="card-title text-black d-flex align-items-center gap-2">
            <Link href="/gemstone-category">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23" height="20" x="0" y="0" viewBox="0 0 24 24" >
                <g><path d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg></Link>
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
                  <div className="card mb-3 shadow-sm rounded-2 mb-2 bg-white natural-gemstons-box">
                    <Link href={`/gemstones/${item.id}`}>
                      <Image src={item?.images[0]?.path || PlaceHolder} className="icon me-1 img-fluid rounded-2 w-100" height={120} width={100} alt={item.title} />
                      <div className="card-body p-2 text-center">
                        <h6 className="card-title text-primary mb-1">{item.title}</h6>
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
                        <div className="card-body py-2 px-1">
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
              (
                Array.from({ length: 4 }).map((_, i: number) => {
                  console.log(_);

                  return (
                    <HorizontalSkeleton key={i} />
                  )
                }))
            }
          </div>

        </div>
        {results?.pagination?.total_pages > 1 &&
          <Pagination
            pageCount={results?.pagination?.total_pages}
            current_page={results?.pagination?.current_page}
            onPageChange={(e: any) => {
              setFilters({ ...filters, page: e.selected + 1 })
            }}
          />
        }
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