import "./cardhome.css";
interface Object {
  title: string;
  description?: string;
  image: string;
}

function CardHome({ props }: { props: Object }) {
  return (
    <div className="card__container">
      <img src={props.image} alt="Imagen" className="card__image" />
      <h3 className="card__title">{props.title}</h3>
      {props.description ? (
        <p className="card__description">{props.description}</p>
      ) : null}
    </div>
  );
}

export default CardHome;
