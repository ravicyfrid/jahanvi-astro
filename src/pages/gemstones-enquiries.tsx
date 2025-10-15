import { Pagination } from "@/components"
import { gemsService } from "@/services"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const GemsonesEnquirires = () => {
	const [gems, setGems] = useState<any>({ items: [], Pagination: {} })
	const [filters, setFilters] = React.useState<any>({
		page: 1,
		per_page: 2,
	})

	useEffect(() => {
		gemsService.getGemsInquiries().then((result: any) => {
			setGems({ items: result.items, Pagination: result.pagination })
		})
	}, [filters])

	return (
		<>
			<section className="gemsones-enquirires">

				<div className="card-header bg-white border-bottom p-3 sticky-sidebar">
					<h5 className="card-title text-black d-flex align-items-center gap-2">
						<Link href="/user-profile">
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23" height="20" x="0" y="0" viewBox="0 0 24 24" >
								<g><path d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg></Link>
						Gemstones Enquiries</h5>
				</div>
				<div className="container pt-4">
					<div className="row">
						{gems?.items?.length > 0 ? gems?.items?.map((item: any, i: number) => {
							return (

								<div className="col-12" key={i}>

									<div className="card rounded-2 shadow-lg bg-white mb-2 position-relative">
										<Image
											src={item?.gem?.path}
											alt="Gemstons"
											width={100}
											height={100}
											className="img-fluid w-100 rounded-2 lllll"
										/>
										<Link
											href={`/gemstones-enquiries/${item.id}`}
											className="bg-white border-0 rounded-2 px-2 py-1 mt-1 me-1 position-absolute top-0 end-0 d-inline-block text-decoration-none"
										>
											<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 24 24"><g><path fill="#328fe0" d="m16.004 9.414-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2z" opacity="1" data-original="#000000"></path></g></svg>
										</Link>
										<div className="card-body">
											<div className="d-flex justify-content-between mb-2">
												<div className="user-info">
													<h6 className="mb-0">Inquiry
													</h6>
													<p className="mb-0"><small>{item?.enquiry_number}</small></p>
												</div>

												<div className="user-info">
													<h6 className="mb-0 text-end">Gemstones
													</h6>
													<p className="mb-0 text-end"><small>{item?.gem?.title}</small></p>
												</div>

											</div>

											<div className="d-flex justify-content-between mb-2">
												<div className="user-info">
													<h6 className="mb-0">Create date
													</h6>
													<p className="mb-0"><small>{moment(item?.created_at).format("DD MMM YYYY HH:mm")}</small></p>
												</div>

												<div className="user-info">
													<h6 className="mb-0 text-end">Status
													</h6>
													<p className="mb-0 text-end"><small>{item?.status}</small></p>
												</div>

											</div>

										</div>
									</div>


									{/* <div className="card rounded-2 shadow-lg bg-white mb-2 enquirires-placehoder-card">
										<div className="placeholder-glow">
											<span className="placeholder placehoder-img-enquires col-12 rounded-2"></span>
										</div>
										<div className="card-body">
											<div className="d-flex justify-content-between mb-2">
												<div className="user-info user-info-placehoder">
													<h6 className="mb-0 placeholder-glow">
														<span className="placeholder col-12 inquiry-placehoder"></span>
													</h6>
													<p className="mb-0 placeholder-glow">
														<small className="placeholder id-placehoder"></small>
													</p>
												</div>

												<div className="user-info user-info-placehoder">
													<h6 className="mb-0 placeholder-glow">
														<span className="placeholder col-12 inquiry-placehoder"></span>
													</h6>
													<p className="mb-0 placeholder-glow">
														<small className="placeholder id-placehoder"></small>
													</p>
												</div>
											</div>

											<div className="d-flex justify-content-between mb-2">
												<div className="user-info user-info-placehoder">
													<h6 className="mb-0 placeholder-glow">
														<span className="placeholder col-12 inquiry-placehoder"></span>
													</h6>
													<p className="mb-0 placeholder-glow">
														<small className="placeholder id-placehoder"></small>
													</p>
												</div>

												<div className="user-info user-info-placehoder">
													<h6 className="mb-0 placeholder-glow">
														<span className="placeholder col-12 inquiry-placehoder"></span>
													</h6>
													<p className="mb-0 placeholder-glow">
														<small className="placeholder id-placehoder"></small>
													</p>
												</div>
											</div>

										</div>
									</div> */}
								</div>
							)
						})
							:
							<Skelton />

						}

					</div>
				</div>
				{gems?.pagination?.total_pages > 1 &&
					<Pagination
						pageCount={gems?.pagination?.total_pages}
						current_page={gems?.pagination?.current_page}
						onPageChange={(e: any) => {
							setFilters({ ...filters, page: e.selected + 1 })
						}}
					/>
				}
			</section>
		</>
	)
}
export default GemsonesEnquirires


const Skelton = () => {
	return (
		<>
			<div className="card rounded-2 shadow-lg bg-white mb-2 enquirires-placehoder-card">
				<div className="placeholder-glow">
					<span className="placeholder placehoder-img-enquires col-12 rounded-2"></span>
				</div>
				<div className="card-body">
					<div className="d-flex justify-content-between mb-2">
						<div className="user-info user-info-placehoder">
							<h6 className="mb-0 placeholder-glow">
								<span className="placeholder col-12 inquiry-placehoder"></span>
							</h6>
							<p className="mb-0 placeholder-glow">
								<small className="placeholder id-placehoder"></small>
							</p>
						</div>

						<div className="user-info user-info-placehoder">
							<h6 className="mb-0 placeholder-glow">
								<span className="placeholder col-12 inquiry-placehoder"></span>
							</h6>
							<p className="mb-0 placeholder-glow">
								<small className="placeholder id-placehoder"></small>
							</p>
						</div>
					</div>

					<div className="d-flex justify-content-between mb-2">
						<div className="user-info user-info-placehoder">
							<h6 className="mb-0 placeholder-glow">
								<span className="placeholder col-12 inquiry-placehoder"></span>
							</h6>
							<p className="mb-0 placeholder-glow">
								<small className="placeholder id-placehoder"></small>
							</p>
						</div>

						<div className="user-info user-info-placehoder">
							<h6 className="mb-0 placeholder-glow">
								<span className="placeholder col-12 inquiry-placehoder"></span>
							</h6>
							<p className="mb-0 placeholder-glow">
								<small className="placeholder id-placehoder"></small>
							</p>
						</div>
					</div>

				</div>
			</div>
		</>
	)
}