import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  addDoc,
  where,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  return snapshot.data();
}

export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
    role?: string;
  },
  callback: Function
) {
  try {
    // ================== VALIDASI ==================
    if (!userData.email) {
      return callback({
        status: "error",
        message: "Email wajib diisi",
      });
    }

    if (!userData.password) {
      return callback({
        status: "error",
        message: "Password wajib diisi",
      });
    }

    if (userData.password.length < 6) {
      return callback({
        status: "error",
        message: "Password minimal 6 karakter",
      });
    }

    // ================== CEK EMAIL DUPLIKAT ==================
    const q = query(
      collection(db, "users"),
      where("email", "==", userData.email)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return callback({
        status: "error",
        message: "Email already exists",
      });
    }

    // ================== HASH PASSWORD ==================
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // ================== SIMPAN DATA ==================
    await addDoc(collection(db, "users"), {
      email: userData.email,
      fullname: userData.fullname,
      password: hashedPassword,
      role: "member",
    });

    return callback({
      status: "success",
      message: "User registered successfully",
    });

  } catch (error: any) {
    return callback({
      status: "error",
      message: error.message,
    });
  }
}