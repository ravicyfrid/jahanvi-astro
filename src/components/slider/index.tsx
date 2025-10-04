import React, { } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image from 'next/image';
import { PlaceHolder } from '@/assets/images';
import { _Object } from '@/utils/interfaces';

export default function Slider({ props }: _Object) {
	return (
		<>
			<section className="card-slider margin-top-scrolls" id="gemstones">
				<div className="container">
					<div className="row">
						<div className="card-slider-heading">
							<h2>Gemstones</h2>
						</div>
						<div className="col-12">
							<Swiper
								slidesPerView={4}
								loop={true}
								navigation={true}
								pagination={{ clickable: true }}
								spaceBetween={30}
								autoplay={{
									delay: 1000,
									disableOnInteraction: false
								}}
								modules={[Keyboard, Pagination, Navigation, Autoplay]}
								className="mySwiper"

								breakpoints={{
									350: { slidesPerView: 1, spaceBetween: 7 },
									550: { slidesPerView: 2, spaceBetween: 10 },
									992: { slidesPerView: 3, spaceBetween: 10 },
									1200: { slidesPerView: 4 },
								}}
							>
								{props?.items?.map((item: { images: [{ path: string }], title: string, description: string }, i: number) => {
									return (
										<SwiperSlide key={i}>
											<div className="card">
												<Image src={item?.images[0]?.path || PlaceHolder} alt="Camera" className="" width={300} height={250} />
												<div className="card-body">
													<h6>{item?.title}</h6>
													<p>{item?.description?.slice(0, 300)} </p>
												</div>
											</div>
										</SwiperSlide>
									)
								})}
							</Swiper>
						</div>
					</div>
				</div>
			</section>

		</>
	);
}
