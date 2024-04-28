import { useState } from "react";
import FAQComponent from "./FAQComponent";

function FAQSection() {
  const faqsData = [
    {
      question: "How do I get started?",
      answer: "Here's how you can get started...",
    },
    {
      question: "What if I am brand new?",
      answer: "Lorem Ipsum is simply dummy text...",
    },
    {
      question: "What if I am brand new?",
      answer: "Lorem Ipsum is simply dummy text...",
    },
    {
      question: "What if I am brand new?",
      answer: "Lorem Ipsum is simply dummy text...",
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="container p-0 my-5">
      <p className="questions-txt pt-lg-5">Still Have Questions?</p>
      <p className="questions-txt questions-txt-blue mb-md-4">
        Don’t Worry, We Got You Covered
      </p>
      <div className="accordion-custom-wrapper">
        {faqsData.map((faq, index) => (
          <FAQComponent
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
