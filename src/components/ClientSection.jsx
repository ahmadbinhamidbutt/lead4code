import maskGroup from "../assets/mask_group.png";
import ellipse from "../assets/Ellipse 22.png";
import rectangle_client from "../assets/Rectangle_client.png";

import bookCallIcon from "../assets/book_call.png";
import callersIcon from "../assets/callers.png";
import leadsIcon from "../assets/leads.png";
import moneyIcon from "../assets/money.png";
import vectorSolid from "../assets/vector-solid.png";
import vectorLine from "../assets/vector-line.png";
import ClientCard from "./ClientCard";

function ClientSection() {
  const dummy_data = [
    {
      id: 1,
      title: "1. Book a Call To Get Started",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      color: "#55D35233",
      icon: bookCallIcon,
    },
    {
      id: 2,
      title: "2. Tell Us How Many Callers You Want",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      color: "#63E4E333",
      icon: callersIcon,
    },
    {
      id: 3,
      title: "3. We Start Sending You Leads",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      color: "#FFEBE6",
      icon: leadsIcon,
    },
    {
      id: 4,
      title: "4. You Close Deals & Make More Money",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      color: "#FFECDD",
      icon: moneyIcon,
    },
  ];

  return (
    <div className="container client-section-container p-0">
      <div className="position-relative">
        <img
          alt="mask-group-img"
          className="position-absolute vector-solid-img"
          src={vectorSolid}
        />
        <img
          alt="mask-group-img"
          className="position-absolute vector-line-img"
          src={vectorLine}
        />
        <div className="row counter-section">
          <div className="col-md-4 mb-4 mb-md-0">
            <p className="counter-txt">80+</p>
            <p>Active Clients</p>
          </div>
          <div className="col-md-4  mb-4 mb-md-0">
            <p className="counter-txt">135+</p>
            <p>Projects Done</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <p className="counter-txt">20+</p>
            <p>Team Advisors</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <p className="steps-text px-3 px-md-5">
              You’re <span className="steps-text-blue">Just 4 Steps Away</span>
              <br /> From Getting Potential Deals
              <br /> Sent Right To You!
            </p>
            <div className="position-relative">
              <img
                alt="mask-group-img"
                className="mask-group-img"
                src={maskGroup}
              />
              <img
                alt="ellipse-img"
                className="position-absolute ellipse-client-img"
                src={ellipse}
              />
              <img
                alt="rectangle-client-img"
                className="position-absolute rectangle-client-img"
                src={rectangle_client}
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="row d-flex justify-content-center align-items-center">
              {dummy_data.map((data) => (
                <div className="col-6 col-lg-5 d-flex justify-content-center align-items-center">
                  <ClientCard
                    id={data.id}
                    title={data.title}
                    subTitle={data.subTitle}
                    cardIcon={data.icon}
                    color={data.color}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientSection;
