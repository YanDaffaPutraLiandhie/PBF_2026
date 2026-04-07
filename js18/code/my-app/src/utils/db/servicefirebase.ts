import { 
  getFirestore, 
  collection, 
  getDocs,
  getDoc, 
  doc,
  query,
  addDoc,
  where, 
  updateDoc,
} from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
}

export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  return snapshot.data();
}

export async function signIn(email: string) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));

  return data.length > 0 ? data[0] : null;
}

export async function signInWithOAuth(userData: any, callback: any) {
  try {
    const q = query(
      collection(db, "users"),
      where("email", "==", userData.email),
    );

    const querySnapshot = await getDocs(q);
    const data: any = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    if (data.length > 0) {
      userData.role = data[0].role;
      await updateDoc(doc(db, "users", data[0].id), userData);
    } else {
      userData.role = "member";
      await addDoc(collection(db, "users"), userData);
    }

    callback({
      status: true,
      message: "User registered and logged in",
      data: userData,
    });

  } catch {
    callback({
      status: false,
      message: "Failed to register user",
    });
  }
}

export const signInWithGoogle = signInWithOAuth;
export const signInWithGitHub = signInWithOAuth;