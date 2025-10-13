
import SEOHead from "@/components/seo";
import Link from "next/link";
import React, { useEffect } from "react";
import { kundliService } from "@/services";
import { useRouter } from "next/router";

export default function Horoscope() {
	const router =useRouter()
	const [filters, setFilters] = React.useState<any>({
		page: 1,
		per_page: 9,
	})
	const [kundli, setKundli] = React.useState<any>({ items: [], pagination: {} });

	useEffect(() => {
		kundliService.getKundlies(filters).then((results: any) => {
			setKundli({ items: results.items, pagination: results.pagination })
		})


		setFilters({
		page: 1,
		per_page: 9,
	})
	
	}, [filters])

	
	return (
		<>
			<SEOHead title={'Horoscope'} />
			<section className="user-profile-mobile">

				<div className="card-header bg-white border-bottom p-3 sticky-sidebar d-flex justify-content-between">

					<h5 className="card-title text-black d-flex align-items-center gap-2">
						<Link href='/home'>
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23" height="20" x="0" y="0" viewBox="0 0 24 24" >
								<g><path d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg>
						</Link>
						Horoscope
					</h5>
					<button type="button" className="border-1 border-primary rounded-5 bg-white  text-primary px-3 py-1" onClick={()=>router.push('/add-horoscope')}> Add +</button>
				</div>
				<div className="container pt-4">
					<div className="col-12">
						{kundli.items.map((item: any, i: number) => {
							return (
								<>
									<div className="card rounded-2  shadow-lg bg-white px-3 py-4 mb-2" key={i}>
										<div className="d-flex align-items-center">
											<div className="user-info">
												<h6 className="mb-1">{item?.full_name}
												</h6>
												<p className="mb-0"><small className="d-block fw-semibold">Gender: {item?.gender}</small> <small className="d-block fw-semibold"> DOB: {item?.dob}</small></p>
											</div>
											<div className="ms-auto">
												<button type="button" className="border-1 border-primary rounded-5 bg-white  text-primary px-3 py-1" onClick={()=>router.push(`/horoscope/${item?.id}`)}>View</button>
											</div>
										</div>
									</div>
								</>
							)
						})}

{/* 
						<div className="card rounded-2  shadow-lg bg-white px-3 py-4 mb-2">
							<div className="d-flex align-items-center">
								<div className="user-info">
									<h6 className="mb-1">bkkddd
									</h6>
									<p className="mb-0"><small className="d-block fw-semibold">Gender:female</small> <small className="d-block fw-semibold"> DOB:2025-10-05</small></p>
								</div>
								<div className="ms-auto">
									<button type="button" className="border-1 border-primary rounded-5 bg-white  text-primary px-3 py-1">View</button>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</section>






		</>
	);
}
