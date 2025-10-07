"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import { Logo } from "@/assets/images";
import Image from "next/image";
import { authService } from "@/services/auth.service";
import { toast } from "react-toastify";
import { Button, InputField } from "@/components/form-inputs";
import { useDispatch } from "react-redux";
import { setMobileNumber } from "@/redux/slices/session.slice";
import SEOHead from "@/components/seo";


export default function Register() {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: "",
      phone_number: "",
      email: "",
      gender: "",
      birth_place: "",
      dob: "",
      tob: "",
      lat: "",
      lon: "",
      tzone: "5.5"
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      phone_number: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      gender: Yup.string().required("Required"),
      birth_place: Yup.string().required("Required"),
      dob: Yup.string().required("Required"),
      tob: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const results = await authService.Register(values);
        if (results.error === false) {
          toast.success(results.message);

          dispatch(setMobileNumber(values.phone_number));
        } else {
          toast.error(results.message);
        }
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong, please try again.");
      } finally {
        setLoading(false);
      }
    },

  });

  // Fetch from Nominatim API
  const fetchLocationSuggestions = async (place: string) => {
    if (!place) {
      setSuggestions([]);
      return;
    }
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          place
        )}`,
        {
          headers: {
            "User-Agent": "abc@astro.com",
          },
        }
      );
      const data = await res.json();
      setSuggestions(data);
    } catch (err) {
      console.error("Location fetch error", err);
    }
  };

  // Handle typing with debounce
  const handlePlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    formik.setFieldValue("birth_place", value);

    if (typingTimeout) clearTimeout(typingTimeout);

    const timeout = setTimeout(() => {
      fetchLocationSuggestions(value);
    }, 600);

    setTypingTimeout(timeout);
  };

  const handleSelectSuggestion = (s: any) => {
    formik.setFieldValue("birth_place", s.display_name);
    formik.setFieldValue("lat", s.lat);
    formik.setFieldValue("lon", s.lon);
    setSuggestions([]); // clear dropdown after selection
  };



  return (
    <>
      <SEOHead title={'Register'} />
      <section className="login-auth registration-form align-center d-flex justify-content-center py-2">
        <div className="container">
          <div className="card">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-12">
                <div className="left-panel">
                  <h2>Start Your Journey with the Stars</h2>
                  <p className="mt-3 text-white"><strong>“Join Jahanvi Astro Today!”</strong></p>
                  <p className='text-white'>
                    Create your account and unlock personalized astrological insights.
                    Get daily horoscopes, relationship guidance, and life predictions.
                    The stars have messages for you — discover what they reveal!
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 col-12 d-flex align-center">
                <div className="registration-form-content">
                  <div className="text-center mb-3">
                    <Image src={Logo} alt="Jahanvi Astro Logo" width={120} height={120} />

                    <h5 className="mb-1">Registration</h5>
                    <p className="text-muted mb-4">
                      Please fill in the details below to create your account.
                    </p>
                  </div>
                  <form onSubmit={formik.handleSubmit} className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <InputField
                        label="Full Name"
                        required={true}
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        className={`${formik.errors.name && formik.touched.name ? "is-invalid" : ""
                          }`}
                      />
                      {formik.errors.name && formik.touched.name && (
                        <div className="invalid-feedback">{formik.errors.name}</div>
                      )}
                    </div>

                    <div className="form-group mb-3 col-lg-6 col-md-6 col-12">
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

                    <div className="col-lg-6 col-md-6 col-12">
                      <InputField
                        label="Email"
                        required={true}
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className={`${formik.errors.email && formik.touched.email ? "is-invalid" : ""
                          }`}
                      />
                      {formik.errors.email && formik.touched.email && (
                        <div className="invalid-feedback">{formik.errors.email}</div>
                      )}
                    </div>

                    <div className="form-group mb-3 col-lg-6 col-md-6 col-12">
                      <label className="form-label">Gender<span className="text-danger">*</span></label>
                      <select
                        name="gender"
                        onChange={formik.handleChange}
                        value={formik.values.gender}
                        className={`form-select ${formik.errors.gender && formik.touched.gender
                          ? "is-invalid"
                          : ""
                          }`}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      {formik.errors.gender && formik.touched.gender && (
                        <div className="invalid-feedback">{formik.errors.gender}</div>
                      )}
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <InputField
                        label="Time of Birth (HH:MM)"
                        required={true}
                        type="time"
                        name="tob"
                        onChange={formik.handleChange}
                        value={formik.values.tob}
                        className={` ${formik.errors.tob && formik.touched.tob ? "is-invalid" : ""
                          }`}
                      />
                      {formik.errors.tob && formik.touched.tob && (
                        <div className="invalid-feedback">{formik.errors.tob}</div>
                      )}
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <InputField
                        label="Date of Birth"
                        required={true}
                        type="date"
                        name="dob"
                        onChange={formik.handleChange}
                        value={formik.values.dob}
                        className={`${formik.errors.dob && formik.touched.dob ? "is-invalid" : ""
                          }`}
                      />
                      {formik.errors.dob && formik.touched.dob && (
                        <div className="invalid-feedback">{formik.errors.dob}</div>
                      )}
                    </div>

                    <div className="col-lg-12 col-md-12 col-12">
                      <InputField
                        label="Birth Place"
                        required={true}
                        type="text"
                        name="birth_place"
                        onChange={handlePlaceChange}
                        value={formik.values.birth_place}
                        className={` ${formik.errors.birth_place && formik.touched.birth_place
                          ? "is-invalid"
                          : ""
                          }`}
                        autoComplete="off"
                      />
                      {formik.errors.birth_place && formik.touched.birth_place && (
                        <div className="invalid-feedback">
                          {formik.errors.birth_place}
                        </div>
                      )}

                      {/* Suggestions dropdown */}
                      {suggestions.length > 0 && (
                        <ul
                          className="list-group position-absolute w-100"
                          style={{ zIndex: 1000, maxHeight: "200px", overflowY: "auto" }}
                        >
                          {suggestions.map((s, i) => (
                            <li
                              key={i}
                              className="list-group-item list-group-item-action"
                              onClick={() => handleSelectSuggestion(s)}
                              style={{ cursor: "pointer" }}
                            >
                              {s.display_name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="mb-3 col-12 text-center mx-auto">
                      <Button
                        type="submit"
                        label="Submit"
                        className={`btn btn-primary py-2 ${loading && 'loading'} `}
                        disabled={loading || !formik.isValid || !formik.dirty}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  );
}
