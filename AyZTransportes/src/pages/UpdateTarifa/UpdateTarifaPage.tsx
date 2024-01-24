import { useContext, useEffect, useState } from "react";
import { getFirestore, doc, updateDoc } from "firebase/firestore/lite";
import { AuthContext } from "./Auth/AuthProvider";
import Login, { logOut } from "./Auth/Login";
import getPrices from "../../utils/getPrice";
import "./updateTarifa.css";
import reloadArrow from "../../assets/4213447_arrow_load_loading_refresh_reload_icon.svg";
function UpdateTarifaPage() {
  const { currentUser } = useContext(AuthContext);
  const [price, setPrice] = useState(0);
  const priceId = import.meta.env.VITE_PRICE_ID || "";
  const handleGetPrices = async () => {
    try {
      const data = await getPrices();

      setPrice(data[0]?.price || 0);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetPrices();
  }, []);

  const updatePrice = async (priceId: string, newPriceData: any) => {
    try {
      const db = getFirestore();
      const priceDocRef = doc(db, "pricing", priceId);
      await updateDoc(priceDocRef, newPriceData);
      console.log(`Price with ID ${priceId} updated successfully!`);
    } catch (error) {
      console.error("Error updating price:", error);
      throw error;
    }
  };

  const handleUpdatePrice = async (priceId: string, newPriceData: any) => {
    try {
      await updatePrice(priceId, newPriceData);
      console.log("Price updated successfully!");
    } catch (error) {
      console.error("Error updating price:", error);
    }
  };

  return (
    <>
      {currentUser ? (
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
            onClick={() => handleUpdatePrice(priceId, { price })}
          >
            Actualizar precio
          </button>
          <button onClick={() => logOut()}>LogOut</button>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default UpdateTarifaPage;
