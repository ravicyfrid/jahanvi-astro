import { gemsService } from "@/services"
import { useFormik } from "formik"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const EnquiryDetails = () => {
  const router = useRouter();
  const [gems, setGems] = useState<any>({});

  useEffect(() => {
    const id = router.query.id;
    if (!id) return;
    gemsService.getGemsInquiriesDetails(id).then((result: any) => {
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

        const refreshed = await gemsService.getGemsInquiriesDetails(id);
        setGems(refreshed);

        resetForm();
      } catch (err) {
        console.error("submit error", err);
      } finally {
        setSubmitting(false);
      }
    },
  });

  function getShortRelativeTime(date: any) {
    const now = moment();
    const then = moment(date);
    const diffSeconds = now.diff(then, 'seconds');
    const diffMinutes = now.diff(then, 'minutes');
    const diffHours = now.diff(then, 'hours');
    const diffDays = now.diff(then, 'days');
    const diffWeeks = now.diff(then, 'weeks');
    const diffMonths = now.diff(then, 'months');
    const diffYears = now.diff(then, 'years');

    if (diffSeconds < 60) return 'now';
    if (diffMinutes < 60) return `${diffMinutes}m`;
    if (diffHours < 24) return `${diffHours}h`;
    if (diffDays < 7) return `${diffDays}d`;
    if (diffWeeks < 4) return `${diffWeeks}w`;
    if (diffMonths < 12) return `${diffMonths}mo`;
    return `${diffYears}y`;
  }

  return (
    <>
      <section className="gemsones-enquirires">

        <div className="card-header bg-white border-bottom p-3 sticky-sidebar">
          <h5 className="card-title text-black d-flex align-items-center gap-2">
            <Link href="/gemstones-enquiries">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23" height="20" x="0" y="0" viewBox="0 0 24 24" >
                <g><path d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg></Link>
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
                  <div className="chat-list">
                    {gems?.comments?.length > 0 ? [...gems?.comments]?.reverse()?.map((item: any, i: number) => {
                      return (
                        <div className="chat-item" key={i}>
                          <div className="avatar-circle">Y</div>
                          <div className="chat-meta">
                            <div className="chat-top">
                              <div>
                                <div className="chat-name">You</div>
                                <div className="chat-role">{item?.user?.role}</div>
                              </div>
                              <div className="chat-time">{getShortRelativeTime(item?.created_at)}</div>
                            </div>

                            <div className="chat-bubble">{item?.comment}</div>
                          </div>
                        </div>
                      )
                    })
                      :
                      <p className="text-center">No comments found</p>
                    }

                  </div>
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