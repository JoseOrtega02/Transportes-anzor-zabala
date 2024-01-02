import React, { useContext, useEffect } from "react";
import db from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { AuthContext } from "./Auth/AuthProvider";
import Login, { logOut } from "./Auth/Login";
import getPrices from "../../utils/getPrice";
function UpdateTarifaPage() {
  const { currentUser } = useContext(AuthContext);
  const [price, setPrice] = React.useState(0);
  let priceId = "ckjtkQrohTnIMCeY8TYk";
  const handleGetPrices = async () => {
    getPrices()
      .then((data) => {
        console.log(data);
        setPrice(data[0].price);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handleGetPrices();
  }, [currentUser]);

  const updatePrice = async (priceId: string, newPriceData: any) => {
    const priceDocRef = doc(db, "pricing", priceId);

    try {
      await updateDoc(priceDocRef, newPriceData);
      console.log(`Price with ID ${priceId} updated successfully!`);
    } catch (error) {
      console.error("Error updating price:", error);
      throw error;
    }
  };

  const handleUpdatePrice = (priceId: string, newPriceData: any) => {
    updatePrice(priceId, newPriceData)
      .then(() => {
        console.log("Price updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating price:", error);
      });
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
          <button
            onClick={() => {
              handleUpdatePrice(priceId, { price });
            }}
          >
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
