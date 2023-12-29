import React, { useContext } from "react";
import db from "../../firebase";
import {
  collection,
  getDocs,
  DocumentData,
  doc,
  updateDoc,
} from "firebase/firestore";
import { AuthContext } from "./Auth/AuthProvider";
import Login, { logOut } from "./Auth/Login";
function UpdateTarifaPage() {
  const { currentUser } = useContext(AuthContext);
  const [price, setPrice] = React.useState(0);
  let priceId = "ckjtkQrohTnIMCeY8TYk";
  const getPrices = async (): Promise<DocumentData[]> => {
    const colletionRef = collection(db, "pricing");
    const querySnapshot = await getDocs(colletionRef);
    const price: DocumentData = [];
    querySnapshot.forEach((doc) => {
      price[doc.id] = doc.data();
    });

    return Object.values(price);
  };
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

  const handleGetPrices = () => {
    getPrices()
      .then((data) => {
        console.log(data);
        setPrice(data[0].price);
      })
      .catch((err) => {
        console.log(err);
      });
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
            value={price}
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
