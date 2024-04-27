import waveRight from "../assets/wave_right.png";
import waveLeft from "../assets/wave_left.png";
import heart_emoji from "../assets/heart_emoji.png";
import CustomCard from "./CustomCard";

function LeedSpeedSection() {
  const card_data = [
    {
      id: 1,
      title: "Heading goes here",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      title: "Heading goes here",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      title: "Heading goes here",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,
      title: "Heading goes here",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <div className="container">
      <div className="position-relative">
        <p className="why-love-text position-absolute text-center w-100">
          Why They Love{" "}
          <img alt="heart-img" className="heart-img" src={heart_emoji} />
          <span className="why-love-text-blue"> LEAD4SPEED</span>
        </p>
        <img
          alt="wave-left-img"
          className="position-absolute wave-left-img d-none d-lg-block"
          src={waveLeft}
        />
        <img
          alt="wave-right-img"
          className="position-absolute wave-right-img d-none d-lg-block"
          src={waveRight}
        />
        <div className="position-absolute row px-3 px-lg-4 text-center w-100 custom-card-container">
          {card_data.map((data) => (
            <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center align-items-center">
              <CustomCard title={data.title} subTitle={data.subTitle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeedSpeedSection;
