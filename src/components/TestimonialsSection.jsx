import TestimonialCardComponent from "./TestimonialCardComponent";
import testimonial_img from "../assets/profile-testimonial.png";
import quote_img from "../assets/quote.png";
import ellipse from "../assets/Ellipse 8.png";

function TestimonialsSection() {
  const testimonials_data = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Robert Johnson",
      role: "Manager, Sherlock Homes LLC",
      rating: 4,
      avatar: testimonial_img,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Robert Johnson",
      role: "Manager, Sherlock Homes LLC",
      rating: 4,
      avatar: testimonial_img,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Robert Johnson",
      role: "Manager, Sherlock Homes LLC",
      rating: 4,
      avatar: testimonial_img,
    },
  ];
  return (
    <div className="container p-0">
      <div
        id="testimonialCarousel"
        className="carousel slide carousel-container d-flex flex-column justify-content-center align-items-center position-relative"
        data-bs-ride="carousel"
      >
        <div className="quote-img-container position-absolute d-flex justify-content-center align-items-center">
          {/* <img alt="quote-img" className="ellipse-img" src={ellipse} /> */}
          <img alt="quote-img" className="quote-img-absolute" src={quote_img} />
        </div>

        <p className="clients-txt">
          Don’t Take Our Word for It See What Our Clients Have to Say
        </p>
        <div className="carousel-indicators">
          {testimonials_data.map((testimonial, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to={index}
              className={
                index === 0
                  ? "carousel-custom-indicator active"
                  : "carousel-custom-indicator"
              }
              aria-current={index === 0 ? "true" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {testimonials_data.map((testimonial, index) => (
            <TestimonialCardComponent
              index={index}
              quote={testimonial.text}
              author={testimonial.author}
              company={testimonial.role}
              rating={testimonial.rating}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default TestimonialsSection;
