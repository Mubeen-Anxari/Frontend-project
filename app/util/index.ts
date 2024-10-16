import { collection, getDocs, query, getDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const getAllProducts = async () => {
    const snapshot = query(collection(db, "products"));
    const docs = await getDocs(snapshot);
    const products = docs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return products;
  };

export const getOrders = async () => {
  const productRef = collection(db, "orders");
  const productSnap = await getDocs(productRef);
  const orders = productSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return orders;
};
    


export { getAllProducts };