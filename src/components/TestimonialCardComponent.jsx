import quote_img from "../assets/quote.png";

const TestimonialCardComponent = ({
  index,
  quote,
  author,
  company,
  rating,
  avatar,
}) => {
  return (
    <div
      className={`carousel-custom-card carousel-item ${
        index === 0 ? "active" : ""
      }`}
      key={index}
    >
      <div className="testimonial-item">
        <div className="pt-5 pb-3 px-4">
          <img alt="quote-img" className="quote-img mb-4" src={quote_img} />
          <blockquote className="blockquote-txt">
            <p className="mb-4">{quote}</p>
          </blockquote>
          <div className="rating mb-0">{"★".repeat(rating)}</div>
        </div>

        <div className="profile-container d-flex align-items-center px-4 py-4">
          <img src={avatar} alt="profile" className="profile-testimonial" />
          <div className="ms-3">
            <p className="author-name-txt mb-0">{author}</p>
            <p className="author-company-txt mb-0">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardComponent;
