import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    increment,
} from "firebase/firestore";
import { shoes } from "../firebase";
import { cart } from "../firebase";

export const getAllShoes = async () => {
    const querySnapshot = await getDocs(collection(shoes, "shoes"));

    // console.log(querySnapshot.docs);
    const data = querySnapshot.docs.map((doc) => {
        console.log(doc.id, " => ", doc.data());
        const id = doc.id;
        const restOfData = doc.data();
        return { id, ...restOfData };
    });

    return data;
};

export const getShoeById = async (id) => {
    const docRef = doc(shoes, "shoes", id);
    const docSnap = await getDoc(docRef);
    console.log(docSnap, "doc snap");
    console.log(docSnap.data(), "data");
    console.log(docSnap.exists());
    console.log(docSnap.data());

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error("Doc not found");
    }
};

export const addToCart = async (someObj) => {
    const docRef = await addDoc(collection(cart, "cart"), someObj);
};

export const deleteFromCart = async (id) => {
    await deleteDoc(doc(cart, "cart", id));
    console.log("deleted shoe from cart");
};

export const getCart = async () => {
    const querySnapshot = await getDocs(collection(cart, "cart"));

    // console.log(querySnapshot.docs);
    const data = querySnapshot.docs.map((doc) => {
        console.log(doc.id, " => ", doc.data());
        const id = doc.id;
        const restOfData = doc.data();
        return { id, ...restOfData };
    });

    return data;
};
