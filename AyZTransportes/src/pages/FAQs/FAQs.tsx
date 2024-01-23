import FrequentQuestion from "./components/FrequentQuestion";
import "./faqs.css";
import dowloadIcon from "../../assets/9104279_download_save_down_file_folder_icon.svg";
interface IFrequentQuestion {
  title: string;
  description: string;
}
const data: IFrequentQuestion[] = [
  {
    title: "¿Cómo puedo contactar con la Asociación Anzor Zabala?",
    description:
      "Puedes contactar con la Asociación Anzor Zabala a través de los siguientes canales:",
  },

  {
    title:
      "¿Cuáles son los horarios de apertura y cierre de la Asociación Anzor Zabala?",
    description:
      "Los horarios de apertura y cierre de la Asociación Anzor Zabala son los siguientes:",
  },

  {
    title:
      "¿Cuáles son los horarios de apertura y cierre de la Asociación Anzor Zabala?",
    description:
      "Los horarios de apertura y cierre de la Asociación Anzor Zabala son los siguientes:",
  },
];
export function FAQs() {
  return (
    <div className="faqs__container">
      <h1>Preguntas Frecuentes</h1>
      <div className="frequent__question__container">
        <FrequentQuestion data={data} />
      </div>
      <button className="download__contract">
        Descargar Contrato <img src={dowloadIcon} alt="" />
      </button>
    </div>
  );
}

export default FAQs;
