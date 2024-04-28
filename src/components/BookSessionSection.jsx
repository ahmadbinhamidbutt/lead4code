import leads_bg from "../assets/leads-bg.png";
import arrow_right from "../assets/arrow-right.png";

function BookSessionSection() {
  return (
    <div className="container p-0 my-lg-5">
      <div className="position-relative d-flex justify-content-center align-items-center">
        <img alt="leads-bg" className="leads-bg-img" src={leads_bg} />
        <div className="position-absolute  d-flex flex-column justify-content-center align-items-center p-3 p-md-5">
          <p className="real-estate-txt mb-5">
            Are You Prepared to Get Leads from Highly Qualified Real Estate
            Investors?
          </p>
          <div className="d-flex justify-content-between align-items-center get-started-btn-leads">
            <p className="mb-0">Book Your Session Today</p>
            <img
              alt="arrow-right-img"
              className="arrow-right-img"
              src={arrow_right}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookSessionSection;
