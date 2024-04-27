import verified_icon from "../assets/verified_icon.png";

function LeadGenerationCard({ title, subTitle }) {
  return (
    <div className="d-flex justify-content-between  align-items-center lead-generation-card py-3 px-3 px-md-3 mb-3">
      <img alt="verified-img" className="verified-img" src={verified_icon} />
      <div>
        <p className="lead-generation-card-title mb-1">{title}</p>
        <p className="custom-card-text mb-0">{subTitle}</p>
      </div>
    </div>
  );
}

export default LeadGenerationCard;
