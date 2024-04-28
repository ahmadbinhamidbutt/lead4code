import circle_mark from "../assets/circle-xmark.png";
import chevron_down from "../assets/chevron-down.png";

function FAQComponent({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="accordian-custom-container p-4 px-3 px-md-5 my-4"
      onClick={onToggle}
    >
      <div className="accordian-custom-header-container d-flex justify-content-between align-items-center">
        <p className="accordian-custom-title mb-0">{question}</p>
        <img
          alt="faq-img"
          className="faq-img"
          src={isOpen ? circle_mark : chevron_down}
        />
      </div>

      {isOpen ? (
        <p className="accordian-answer-txt mb-0 mt-4">{answer}</p>
      ) : null}
    </div>
  );
}

export default FAQComponent;
