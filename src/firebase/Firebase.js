import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJjgU43QcGfxgWN6gU4_fmSY4dQ84NGfg",
  authDomain: "webbshop-8eae2.firebaseapp.com",
  projectId: "webbshop-8eae2",
  storageBucket: "webbshop-8eae2.appspot.com",
  messagingSenderId: "425245579452",
  appId: "1:425245579452:web:fd7d094fc94bee20da18b9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const productsCollectionRef = collection(db, 'products');

// Add a document to the collection
const addProduct = async (productData) => {
  await addDoc(productsCollectionRef, productData);
};

// Get all documents from the collection
const getProducts = async () => {
  const snapshot = await getDocs(productsCollectionRef);
  const productList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return productList;
};

const getProductById = async (productId) => {
  const productRef = doc(db, 'products', productId);
  const productSnap = await getDoc(productRef);

  if (productSnap.exists()) {
    return { id: productSnap.id, ...productSnap.data() };
  } else {
    // Handle the case where the product does not exist
    throw new Error('Product not found');
  }
};

// Update a document
const updateProduct = async (productId, updatedData) => {
  const productDocRef = doc(db, 'products', productId);
  await updateDoc(productDocRef, updatedData);
};

// Delete a document
const deleteProductdb = async (productId) => {
  const productDocRef = doc(db, 'products', productId);
  await deleteDoc(productDocRef);
};

// Export the db (Firestore) instance if needed elsewhere
export { db, addProduct, getProducts, getProductById, updateProduct, deleteProductdb };
