import { genestroImg } from "@/assets/images";
import { Footer, Header } from "@/components";
import { Button, InputField } from "@/components/form-inputs";
import { enquirieService, gemsService } from "@/services";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { toast } from "react-toastify";



const GemestonsDetails = () => {
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
        enableReinitialize: true,
        onSubmit: async (values) => {
            try {
                setLoading(true);
                const results = await enquirieService.gemsEnquiries(values);
                if (results.error === false) {
                    toast.success(results.message);
                    formik.resetForm();
                } else {
                    toast.error(results.message);
                }
            } catch (error) {
                toast.error('Something went wrong. Please try again later.');
            } finally {
                setLoading(false);
            }
        }
    });

    return (
        <>
            <Header />
            <section className="gemestons-details py-5">
                <div className="container">

                    <div className="row mb-4">

                        <div className="col-lg-6 col-md-6 col-12 mb-3">
                            <Image src={genestroImg} alt="Gemestons" className="img-fluid gemestons-img-box" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <h4 className="mb-2 text-primary">Gemstone Details </h4>
                            <div className="item-container mb-2">
                                <h6>{gem?.title}</h6>
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

                            <div className="form-section mt-4">
                                <div className="card">
                                    <form className="row" onSubmit={formik.handleSubmit}>
                                        <h6 className="mb-3">Connect with our team</h6>
                                        <div className="col-lg-6 col-md-6 col-12">

                                            <InputField
                                                label="Full Name"
                                                required={true}
                                                type="text"
                                                name="name"
                                                placeholder="Enter name"
                                                onChange={formik.handleChange}
                                                value={formik.values.name}
                                                className={`${formik.errors.name && formik.touched.name ? "is-invalid" : ""
                                                    }`}
                                            />
                                            {formik.errors.name && formik.touched.name && (
                                                <div className="invalid-feedback">{formik.errors.name}</div>
                                            )}
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <InputField
                                                label="Email"
                                                required={true}
                                                type="email"
                                                name="email"
                                                placeholder="Enter Email"
                                                onChange={formik.handleChange}
                                                value={formik.values.email}
                                                className={`${formik.errors.email && formik.touched.email ? "is-invalid" : ""
                                                    }`}
                                            />
                                            {formik.errors.email && formik.touched.email && (
                                                <div className="invalid-feedback">{formik.errors.email}</div>
                                            )}
                                        </div>
                                        <div className="mb-3 form-group col-lg-6 col-md-6 col-12">
                                            <label className="form-label">Mobile Number<span className="text-danger">*</span></label>
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
                                        <div className="mt-3 text-center mx-auto">
                                            <Button
                                                type="submit"
                                                label="Submit"
                                                className={`btn btn-primary py-2 ${loading && 'loading'} `}
                                                disabled={loading}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />


        </>

    );
};

export default GemestonsDetails
