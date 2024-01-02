import { DocumentData, collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const getPrices = async (): Promise<DocumentData[]> => {
  const colletionRef = collection(db, "pricing");
  const querySnapshot = await getDocs(colletionRef);
  const price: DocumentData = [];
  querySnapshot.forEach((doc) => {
    price[doc.id] = doc.data();
  });

  return Object.values(price);
};

export default getPrices;
