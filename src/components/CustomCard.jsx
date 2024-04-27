import cardIcon from "../assets/card_icon.png";

function CustomCard({ title, subTitle }) {
  return (
    <div className="custom-card py-3 px-3 px-md-3 mb-4">
      <img alt="verified-img" className="verified-img mb-4" src={cardIcon} />
      <div>
        <p className="custom-card-title mb-3 text-center">{title}</p>
        <p className="custom-card-text mb-0 text-center">{subTitle}</p>
      </div>
    </div>
  );
}

export default CustomCard;
