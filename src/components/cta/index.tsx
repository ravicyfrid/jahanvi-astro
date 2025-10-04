import Link from "next/link";

export default function CTA() {
  return (
    <>
      <section className="consultations-section" id="gems">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-9 col-sm-12 col-12">
              <h2 className="fs-1">Discover Your Perfect Gemstones: Inquire Today!</h2>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-12 col-12 my-auto book-button">
              <Link href="#contactus" type="button" className="btn btn-light">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
