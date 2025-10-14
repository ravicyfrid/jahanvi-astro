import { genestroImg } from "@/assets/images"
import { gemsService } from "@/services"
import { useFormik } from "formik"
import moment from "moment"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const EnquiryDetails = () => {
  const router = useRouter();
  const [gems, setGems] = useState<any>({});

  // fetch details when id becomes available
  useEffect(() => {
    const id = router.query.id;
    if (!id) return;
    gemsService.getGemsInquiriesDetails(id).then((result: any) => {
      console.log("result>>>>>>>>>>", result);
      setGems(result);
    }).catch(err => {
      console.error("failed to load details", err);
    });
  }, [router.query.id]);

  const formik: any = useFormik({
    initialValues: {
      comment: "",
    },
    enableReinitialize: true,
    onSubmit: async (values: any, formikHelpers: any) => {
      const id = router.query.id;
      if (!id) return;

      const { setSubmitting, resetForm } = formikHelpers;
      setSubmitting(true);

      try {
        // send the message
        const postResult = await gemsService.gemsInquiriesMessages(id, values);
        console.log("post result", postResult);

        // re-fetch details so UI shows the new state from server
        const refreshed = await gemsService.getGemsInquiriesDetails(id);
        console.log("refreshed details", refreshed);
        setGems(refreshed);

        // reset the form to initial values
        resetForm();
      } catch (err) {
        console.error("submit error", err);
        // optionally show notification to user here
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <section className="gemsones-enquirires">

        <div className="card-header bg-white border-bottom p-3 sticky-sidebar">
          <h5 className="card-title text-black d-flex align-items-center gap-2">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23" height="20" x="0" y="0" viewBox="0 0 24 24" >
                <g><path d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg></a>
            Gemstones Details</h5>
        </div>
        <div className="container pt-4">
          <div className="row">
            <div className="col-12">
              <div className="card mb-2">
                <div className="mb-3">
                  <Image
                    src={gems?.gem?.path}
                    alt="Gemstons"
                    width={100}
                    height={100}
                    className="img-fluid rounded-2 shadow-lg bg-white mb-2 d-flex justify-content-center w-75 h-75 mx-auto p-4"
                  />
                </div>

                <div className="card-body rounded-2 shadow-lg bg-white mb-2">
                  <h4 className="mb-2">Enquirie Details</h4>
                  <div className="d-flex justify-content-between mb-2">
                    <div className="user-info">
                      <h6 className="mb-0">Inquiry
                      </h6>
                      <p className="mb-0"><small>{gems?.enquiry_number}</small></p>
                    </div>

                    <div className="user-info">
                      <h6 className="mb-0">Gemstones
                      </h6>
                      <p className="mb-0"><small>{gems?.gem?.title}</small></p>
                    </div>

                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <div className="user-info">
                      <h6 className="mb-0">Create date
                      </h6>
                      <p className="mb-0"><small>{moment(gems?.created_at).format("DD MMM YYYY HH:mm")}</small></p>
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

            <div className="col-12">
              <div className="card px-2">
                <div className="card-body pb-5">

                  <h5>Comments</h5>
                  <p className="text-center">No comments found</p>
                </div>
                <div className="card-footer bg-white border-0 px-0">
                  <div className="mb-3 form-group position-relative">
                    <form onSubmit={formik.handleSubmit}>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Add your comments"
                        onChange={formik.handleChange}
                        value={formik.values.comment}
                        name="comment"
                      />
                      <button
                        type="submit"
                        className="border-0 position-absolute top-50 end-0 translate-middle-y me-2 p-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          width="18"
                          height="18"
                          x="0"
                          y="0"
                          viewBox="0 0 24 25"
                        >
                          <g>
                            <path
                              fill="#328fe0"
                              fillRule="evenodd"
                              d="M12.293 4.295a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414l5.293-5.293H4a1 1 0 1 1 0-2h13.586L12.293 5.71a1 1 0 0 1 0-1.414z"
                              clipRule="evenodd"
                              opacity="1"
                            ></path>
                          </g>
                        </svg>
                      </button>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
export default EnquiryDetails