import { genestroImg } from "@/assets/images"
import { Button, InputField } from "@/components"
import { enquirieService, gemsService } from "@/services"
import { useFormik } from "formik"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import PhoneInput from "react-phone-input-2"
import * as Yup from "yup"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image"
const Gems = () => {

  const [gem, setGem] = useState<any>({})
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const { id } = router.query

  useEffect(() => {
    if (!id) return;
    gemsService.getGemsDetails(id).then((results) => {
      setGem(results)
    })
  }, [id])

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone_number: '',
      gem_id: id
    },
    validationSchema: Yup.object({
      name: Yup.string().label('Name').required(),
      phone_number: Yup.string().label('Phone Number').required(),

    }),
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const results = await enquirieService.gemsEnquiries(values);
        if (results.error === false) {
          formik.resetForm();
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <>
      <section className="gems-details-mobile">
        <div className="card-header bg-white border-bottom p-3 sticky-sidebar">
          <h5 className="card-title text-black d-flex align-items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23" height="20" x="0" y="0" viewBox="0 0 24 24" >
              <g><path d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg>
            Gemstones Details</h5>
        </div>
        {/* <img src={gem?.images?.lenght > 0 ? gem?.images[0]?.path : PlaceHolder} alt="User Profile" width={250} height={250} className="img-fluid w-100" /> */}


        <div className="gemeston-single-silder">
          <div className="container">
            <div className="row">
              <div className="col-12">
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
                  <div className="card">
                  </div>
                  <SwiperSlide>
                    <div className="card">
                      <a href="#" className="">
                        <Image
                          src={genestroImg}
                          alt="Hero Banner"
                          className="img-fluid"
                          width={500}
                          height={450}
                          priority
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                   <SwiperSlide>
                    <div className="card">
                      <a href="#" className="">
                        <Image
                          src={genestroImg}
                          alt="Hero Banner"
                          className="img-fluid"
                          width={500}
                          height={450}
                          priority
                        />
                      </a>
                    </div>
                  </SwiperSlide>

                </Swiper>
              </div>
            </div>
          </div>
        </div>


        <div className="container pt-4">
          <div className="row">
            <div className="col-12">
              <div className="gemestone-content mb-4">
                <div className="item-container mb-2">
                  <h5 className="">{gem?.title} </h5>
                  {/* <h6>text</h6> */}
                  <p>{gem?.description}</p>
                </div>

                <div className="item-container mb-2">
                  <h6>Benefits of Gemstone</h6>
                  <div dangerouslySetInnerHTML={{ __html: gem?.benefits || "" }} />

                </div>

                <div className="item-container">
                  <h6>How to Use</h6>
                  <p><div dangerouslySetInnerHTML={{ __html: gem?.how_to_use || "" }} /></p>
                </div>
              </div>
              <div className="col-12 py-2">
                <div className="card shadow-sm rounded-2 p-3 text-center border" >

                  <form className="login-form" onSubmit={formik.handleSubmit}>
                    <h6 className="mb-3">Content With Our Team</h6>
                    <div className="col-12">
                      <InputField
                        required={true}
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        className={`${formik.errors.name && formik.touched.name ? "is-invalid" : ""
                          }`}
                        error={formik.errors.name && formik.touched.name ? formik.errors.name : ""}
                      />
                    </div>
                    <div className='form-group mb-3'>
                      <PhoneInput
                        country={"in"}
                        value={formik.values.phone_number}
                        onChange={(phone) =>
                          formik.setFieldValue("phone_number", phone)
                        }
                        inputStyle={{ width: "100%" }}
                        countryCodeEditable={false}
                      />
                      {formik.errors.phone_number && formik.touched.phone_number && (
                        <div className="text-danger small">
                          {formik.errors.phone_number}
                        </div>
                      )}
                    </div>

                    <div className="form-group mb-3 col-12">
                      <InputField
                        required={true}
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className={`${formik.errors.email && formik.touched.email ? "is-invalid" : ""
                          }`}
                        error={formik.errors.email && formik.touched.email ? formik.errors.email : ""}
                      />

                    </div>

                    <div className="form-group mb-3 col-12">
                      <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Write Your Message (Optional)" rows={3}></textarea>
                    </div>

                    <Button
                      label='Submit'
                      className='primary w-100 rounded-pill mt-3'
                      disabled={loading || (
                        (!formik.isValid || !formik.dirty)
                      )}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Gems