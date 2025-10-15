import Image from "next/image"

import React, { useEffect, useState } from "react"
import { gemsService } from "@/services"
import { Footer, Pagination, SEOHead } from "@/components"
import { Breadcrumb } from "@/assets/svg"
import Link from "next/link"
import { CategoryIcon } from "@/assets/images"

const GemsCategories = () => {
  const [results, setResults] = useState<any>({ items: [], pagination: {} })
  const [shoItemsVertically, setShowItemsVertically] = useState(false)
  const [filters, setFilters] = React.useState<any>({
    page: 1,
    per_page: 8,
  })

  useEffect(() => {
    gemsService.getGemsCategories(filters).then((results: any) => {
      setResults({ items: results.items, pagination: results.pagination })
    })
  }, [filters])

  return (
    <>
      <SEOHead title={'Gemstone Category'} />
      <section className="gems-details-mobile">
        <div className="card-header bg-white border-bottom p-3 sticky-sidebar d-flex justify-content-between">

          <h5 className="card-title text-black d-flex align-items-center gap-2">
            Gemstone Category
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

        <div className="container pt-4 gems-category-card-box-list">
          <div className="row gap-4">
            <div className="col-12">
              <div className="row">

                {results?.items.length > 0 ? results?.items?.map((item: any, i: number) => (
                  shoItemsVertically ? (
                    <div className="col-6" key={i}>
                      <div key={i} className="card mb-3 shadow-sm rounded-2 mb-2 bg-white">
                        <Link href={'/gemstones'}>
                          <img
                            src={item?.images?.path}
                            className="icon card-img-top w-100 rounded-2"
                            height={100}
                            width={100}
                            alt={item.title}
                          />
                          <div className="card-body py-1 px-1 text-center">
                            <h5 className="card-title text-primary mb-1">{item.title}</h5>
                          </div>
                        </Link>
                      </div>
                    </div>

                  ) : (

                    <div key={i} className="card mb-3 rounded-2 mb-2 ps-0 gemes-details-card-box">
                      <Link href={'/gemstones'}>
                        <div className="row g-0">
                          <div className="col-4">
                            <img
                              src={item?.images?.path}
                              className="icon card-img-top rounded-2"
                              height={100}
                              width={100}
                              alt={item.title}
                            />
                          </div>
                          <div className="col-8 ps-2 d-flex align-items-center">
                            <div className="card-body py-1 px-1">
                              <h5 className="card-title text-primary mb-0">{item.title}</h5>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                )
                ) :
                  (
                    Array.from({ length: 4 }).map((_, index) => (
                      <HorizontalSkeleton key={index} />
                    )))
                }
              </div>
            </div>
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
export default GemsCategories

const HorizontalSkeleton = () => {
  return (
    <div className="card mb-3 rounded-2 mb-2 ps-0 geme-category-skeleton">
      <div className="row g-0">
        <div className="col-4 placeholder-glow">
          <p className="placeholder gemes-img-skeletons mb-0 rounded-2"></p>
        </div>
        <div className="col-8 ps-2 d-flex align-items-center">
          <div className="card-body ps-0 placeholder-glow">
            <h5 className="card-title placeholder col-6"></h5>

          </div>
        </div>
      </div>
    </div>
  )
}