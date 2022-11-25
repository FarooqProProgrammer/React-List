// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc,query,getDocs,deleteDoc,doc} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClYWVnMo5nJBCASyztG86juEdckjIJO9k",
  authDomain: "item-39632.firebaseapp.com",
  projectId: "item-39632",
  storageBucket: "item-39632.appspot.com",
  messagingSenderId: "137519155497",
  appId: "1:137519155497:web:958808a1ab67fcca2b4f38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// ======================= Add Item ==========================
async function add(Todo){
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "Todo"), {
        name: Todo
    });
    console.log("Document written with ID: ", docRef.id);
    
}


// ================ Get Todo =================================
async function get(){
    const q = query(collection(db, "Todo"));

    const data = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    data.push({id:doc.id,...doc.data()})
});

return data
}



// ============== Delete ==========================
async function DeleteItem(index){
    await deleteDoc(doc(db, "Todo", index));
}
export {add,get,DeleteItem}