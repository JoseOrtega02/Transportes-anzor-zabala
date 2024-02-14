import { useContext, useEffect, useState } from "react";
import { getFirestore, doc, updateDoc } from "firebase/firestore/lite";
import { AuthContext } from "./Auth/AuthProvider";
import { logOut } from "./Auth/Login";
import getPrices from "../../utils/getPrice";
import "./updateTarifa.css";
import reloadArrow from "../../assets/4213447_arrow_load_loading_refresh_reload_icon.svg";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
function UpdateTarifaPage() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const [loader, setLoader] = useState(false);
  const [price, setPrice] = useState(0);
  const priceId = import.meta.env.VITE_PRICE_ID_KEY || "";
  const handleGetPrices = async () => {
    try {
      const data = await getPrices();

      setPrice(data[0]?.price || 0);
    } catch (error) {
      console.log(error);
    }
  };
  const redirectUser = () => {
    if (!currentUser) {
      console.log(currentUser);
      navigate("/login");
    }
  };
  useEffect(() => {
    redirectUser();
    handleGetPrices();
  }, []);

  const updatePrice = async (priceId: string, newPriceData: any) => {
    try {
      console.log(`Updating price with ID: ${priceId}`);
      const db = getFirestore();
      const priceDocRef = doc(db, "pricing", priceId);
      await updateDoc(priceDocRef, newPriceData);
      console.log(`Price with ID ${priceId} updated successfully!`);
    } catch (error) {
      console.error("Error updating price:", error);
      throw error;
    }
  };

  const handleUpdatePrice = async (
    priceId: string,
    newPriceData: any,
    setLoader: any
  ) => {
    try {
      await updatePrice(priceId, newPriceData);
      setLoader(false);
      console.log("Price updated successfully!");
    } catch (error) {
      console.error("Error updating price:", error);
      setLoader(false);
    }
  };

  return (
    <>
      <div className="updateTarifa__container">
        <h1>Actualizar Tarifa</h1>
        <div className="price__container">
          <p>Precios: {price}</p>
          <button onClick={handleGetPrices}>
            <img src={reloadArrow} alt="" />
          </button>
        </div>

        <input
          type="number"
          placeholder="10$"
          onChange={(event) => setPrice(Number(event.target.value))}
        />
        <button
          className="update"
          onClick={() => {
            handleUpdatePrice(priceId, { price }, setLoader);
            setLoader(true);
          }}
        >
          Actualizar precio
          {loader && <Loader className="btn__loader" />}
        </button>
        <button
          onClick={() => {
            logOut();
            navigate("/");
          }}
        >
          LogOut
        </button>
      </div>
    </>
  );
}

export default UpdateTarifaPage;
