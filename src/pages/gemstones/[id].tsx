import { genestroImg } from "@/assets/images"
import { Button, InputField } from "@/components"
import Image from "next/image"
import PhoneInput from "react-phone-input-2"


const Gems = () => {
  return (
    <>
      <section className="gems-details-mobile">
        <div className="card-header shadow-sm bg-white border-bottom shadow-sm bg-white border-bottom p-3 sticky-sidebar">
          <h5 className="card-title text-black d-flex align-items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23" height="20" x="0" y="0" viewBox="0 0 24 24" >
              <g><path d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg>
            Gemstones Details</h5>
        </div>
        <Image src={genestroImg} alt="User Profile" width={250} height={250} className="img-fluid w-100" />
        <div className="container pt-4">
          <div className="row">
            <div className="col-12">
              <div className="gemestone-content mb-4">
                <div className="item-container mb-2">
                <h5 className="">Natural Opal </h5>
                  {/* <h6>text</h6> */}
                  <p>Size: 8 Carat to 10 Carat</p>
                </div>

                <div className="item-container mb-2">
                  <h6>Benefits of Gemstone</h6>
                  <p>Price Range: ₹8000 to ₹15000 per carat</p>

                </div>

                <div className="item-container">
                  <h6>How to Use</h6>
                  <p>Available for rings and pendant</p>
                </div>
              </div>
              <div className="col-12 py-2">
                <div className="card shadow-sm rounded-2 p-3 text-center border" >

                  <form className="login-form">
                    <h6 className="mb-3">Content With Our Team</h6>
                    <div className="col-12">
                      <InputField
                        // label="Full Name"
                        required={true}
                        type="text"
                        name="full_name"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className='form-group mb-3'>
                      {/* <label className="form-label">Mobile Number</label> */}
                      <PhoneInput
                        country={"in"}
                        value=''
                        inputStyle={{ width: "100%" }}
                      />
                      {/* <p style={{ textAlign: 'right', marginTop: '5px', fontSize: '12px' }}>
																					{phoneLength} / {maxLength}
																				</p> */}
                    </div>

                    <div className="form-group mb-3 col-12">
                      {/* <label className="form-label">Gender<span className="text-danger">*</span></label> */}
                      <select
                        name="gender"
                        className="form-select "

                      >
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>

                    </div>

                    <div className="form-group mb-3 col-12">
                      <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Meassage" rows={3}></textarea>
                    </div>

                    <Button
                      label='Submit'
                      className='primary w-100 rounded-pill mt-3'
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