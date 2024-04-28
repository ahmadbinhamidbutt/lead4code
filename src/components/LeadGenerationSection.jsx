import lead_gen from "../assets/lead_gen_img.png";
import LeadGenerationCard from "./LeadGenerationCard";
import vectorImgLarge from "../assets/Vector.png";
import vectorImgSmall from "../assets/Vector_small.png";

function LeadGenerationSection() {
  return (
    <div className="container lead-generation-container p-0">
      <div className="row">
        <div className="col-12 col-lg-6 px-3 px-md-5 mb-3 mb-md-0 position-relative">
          <img
            alt="vector-img-large"
            className="position-absolute vector-img-large d-none d-lg-block"
            src={vectorImgLarge}
          />
          <img
            alt="vector-img-small"
            className="position-absolute vector-img-small d-none d-lg-block"
            src={vectorImgSmall}
          />
          <p className="lead-generation-text">
            Lead Generation <br />
            Splurged
          </p>
          <div className="my-3 my-md-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center">
            <LeadGenerationCard
              title={"State of the Art Systems"}
              subTitle={
                "Some explanatory text would make it look better and help to avoid large gaps"
              }
            />
            <LeadGenerationCard
              title={"Priced to Perfection"}
              subTitle={
                "Some explanatory text would make it look better and help to avoid large gaps"
              }
            />
            <LeadGenerationCard
              title={"Flexible Plans"}
              subTitle={
                "Some explanatory text would make it look better and help to avoid large gaps"
              }
            />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <p className="text-small px-3 px-md-5 mb-5">
            Better to have 2-3 lines of text here, related to the heading on the
            left
          </p>
          <img alt="lead-gen" className="lead--gen-img" src={lead_gen} />
        </div>
      </div>
    </div>
  );
}

export default LeadGenerationSection;
