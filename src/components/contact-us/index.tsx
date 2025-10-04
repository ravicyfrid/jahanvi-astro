import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button, InputField, TextArea } from '../form-inputs';
import enquireImage from './images/enquiry-img.jpg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { bioService } from '@/services/bio.serivce';

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const formik = useFormik({
    initialValues: {
      name: '',
      phone_number: '',
      email: '',
      description: '',
    },
    enableReinitialize: true,

    validationSchema: Yup.object({
      name: Yup.string()
        .label('First Name')
        .required('First name is required')
        .min(4, 'Name must be at least 4 characters'),
      phone_number: Yup.string()
        .label('Mobile Number')
        .required('Mobile number is required')
        .matches(/^\d{10,13}$/, 'Mobile number must be between 10 and 13 digits'),
      email: Yup.string()
        .label('Email Address')
        .required('Email is required')
        .email('Invalid email address'),
      description: Yup.string().label('Description/Questions'),
    }),

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: async (values: any, { resetForm }: any) => {
      setLoading(true);
      try {
        const data = await bioService.createEnquiry(values);
        console.log(data);

        setResult('Thanks for contacting us. We will reach out to you soon!');
        setTimeout(() => {
          setResult(null);
        }, 3000);
        resetForm();
      } catch (error) {
        setResult('An error occurred. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
  });

  useEffect(() => {
    const scrollToContactSection = () => {
      const contactSection = document.getElementById('contactus');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (window.location.hash === '#contactus') {
      scrollToContactSection();
    }

    const onHashChange = () => {
      if (window.location.hash === '#contactus') {
        scrollToContactSection();
      }
    };

    // window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return (
    <>
      <section className="contact-form margin-top-scrolls" id="contactus">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-heading">
                <h2>Get in Touch with Us</h2>
                <p>Questions or enquiries? please connect us!</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="card">
                <div className="row flex-lg-row-reverse flex-md-row-reverse">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
                    <div className='contact-images'>
                      <Image src={enquireImage} alt="Enquiry Image" width={500} height={350} className="img-fluid" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
                    <form onSubmit={formik.handleSubmit}>
                      <InputField
                        // label="First Name"
                        type="text"
                        name="name"
                        placeholder="First Name*"
                        required={true}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && formik.errors.name}
                      />
                      <InputField
                        // label="Email Address"
                        type="email"
                        name="email"
                        placeholder="Email Address*"

                        required
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && formik.errors.email}
                      />
                      <InputField
                        // label="Phone Number"
                        type="text"
                        name="phone_number"
                        placeholder="Phone Number*"
                        required
                        value={formik.values.phone_number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phone_number && formik.errors.phone_number}
                      />

                      <TextArea
                        name="description"
                        // label="Description"
                        placeholder="Description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <div className="contact-form-button">
                        <Button label="Submit" type="submit" loading={loading} />
                      </div>
                      {result && (
                        <strong>{result}</strong>
                      )}
                    </form>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
