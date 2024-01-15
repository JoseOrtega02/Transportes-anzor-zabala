import { collection, getDocs, DocumentData } from "firebase/firestore";
import { getFirestore } from "../firebase";

const getPrices = async (): Promise<DocumentData[]> => {
  const db = await getFirestore();
  const collectionRef = collection(db, "pricing");
  const querySnapshot = await getDocs(collectionRef);
  const documentSnapshots = querySnapshot.docs;
  const documentDataPromises = documentSnapshots.map((doc) => doc.data());
  const prices = await Promise.all(documentDataPromises);
  return prices;
};

export default getPrices;
