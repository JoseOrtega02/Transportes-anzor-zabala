import "./cardhome.css";
interface Object {
  title: string;
  description?: string;
  image: string;
  id?: string;
}

function CardHome({ props }: { props: Object }) {
  return (
    <div className="card__container " id={props.id}>
      <img src={props.image} alt="Imagen" className="card__image" />
      <div>
        <h3 className="card__title">{props.title}</h3>
        {props.description ? (
          <p className="card__description">{props.description}</p>
        ) : null}
      </div>
    </div>
  );
}

export default CardHome;
