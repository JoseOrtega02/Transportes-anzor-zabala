import React from "react";
import db from "../../firebase";
import {
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  deleteDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  DocumentData,
} from "firebase/firestore";
function UpdateTarifaPage() {
  const getPrices = async (): Promise<DocumentData[]> => {
    const colletionRef = collection(db, "pricing");
    const querySnapshot = await getDocs(colletionRef);
    const price: DocumentData = [];
    querySnapshot.forEach((doc) => {
      price[doc.id] = doc.data();
    });
    return Object.values(price);
  };
  const handlePrices = () => {
    getPrices()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <>{<button onClick={handlePrices}>obten los precios</button>}</>;
}

export default UpdateTarifaPage;
