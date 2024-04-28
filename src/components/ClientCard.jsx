function ClientCard({ id, title, subTitle, color, cardIcon }) {
  return (
    <div
      className="client-card py-3 px-2 px-md-3 mb-4"
      style={{
        backgroundColor: color,
        marginTop: id === 1 || id === 3 ? "5rem" : "0",
      }}
    >
      <img alt="verified-img" className="verified-img mb-4" src={cardIcon} />
      <div>
        <p className="client-card-title mb-3 text-center">{title}</p>
        <p className="cleint-card-text mb-0 text-center">{subTitle}</p>
      </div>
    </div>
  );
}

export default ClientCard;
