import { gemsService } from "@/services"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const GemsonesEnquirires = () => {
	const [results, setResults] = useState<any>({ items: [], pagination: {} })
	useEffect(() => {
		gemsService.getGemsInquiries().then((result: any) => {
			setResults({ items: result.items, pagination: result.pagination })
		})
	}, [])

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
					{results?.items?.map((item: any, i: number) => {
						return (
							<div className="row" key={i}>

								<div className="col-12">

									<div className="card rounded-2 shadow-lg bg-white mb-2">
										<Image
											src={item.gem.path}
											alt="Gemstons"
											width={10}
											height={100}
											className="img-fluid w-100 rounded-2"
										/>
										<div className="card-body">

											<div className="d-flex justify-content-between mb-2">
												<div className="user-info">
													<h6 className="mb-0">Inquiry
													</h6>
													<p className="mb-0"><small>{item.enquiry_number}</small></p>
												</div>

												<div className="user-info">
													<h6 className="mb-0">Gemstones
													</h6>
													<p className="mb-0"><small>{item.gem.title}</small></p>
												</div>

											</div>

											<div className="d-flex justify-content-between mb-2">
												<div className="user-info">
													<h6 className="mb-0">Create date
													</h6>
													<p className="mb-0"><small>{moment(item.updated_at).format("DD MMM YYYY HH:mm")}</small></p>
												</div>

												<div className="user-info">
													<h6 className="mb-0">Status
													</h6>
													<p className="mb-0"><small>New</small></p>
												</div>

											</div>

										</div>
									</div>


								</div>
							</div>
						)
					})}
				</div>

			</section>

		</>
	)
}
export default GemsonesEnquirires