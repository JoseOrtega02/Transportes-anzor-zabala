import { useContext, useEffect, useState } from "react";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { AuthContext } from "./Auth/AuthProvider";
import Login, { logOut } from "./Auth/Login";
import getPrices from "../../utils/getPrice";

function UpdateTarifaPage() {
  const { currentUser } = useContext(AuthContext);
  const [price, setPrice] = useState(0);
  const priceId = "ckjtkQrohTnIMCeY8TYk";
  const handleGetPrices = async () => {
    try {
      const data = await getPrices();
      console.log(data);
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
        <>
          <button onClick={handleGetPrices}>obten los precios</button>
          <p>Precios: {price}</p>
          <input
            type="number"
            onChange={(event) => setPrice(Number(event.target.value))}
          />
          <button onClick={() => handleUpdatePrice(priceId, { price })}>
            Actualizar precio
          </button>
          <button onClick={() => logOut()}>LogOut</button>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default UpdateTarifaPage;
