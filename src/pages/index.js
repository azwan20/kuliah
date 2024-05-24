import { db } from "../../public/firbaseConfig";
import { getDocs, getDoc, collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

async function fetchDataLoginFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "login"));

  const data = [];

  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

export default function Home() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [dataLogin, SetDataLogin] = useState([]);
  const [passSekretaris, SetPassSekretaris] = useState("");
  const router = useRouter();

  console.log(dataLogin);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataLoginFromFirestore();
      SetDataLogin(data);
      SetPassSekretaris(data[0].password);
    }

    fetchData();
  }, []);


  const handleLogin = () => {
    if (emailInput === "admin@gmail.com" && passwordInput === passSekretaris) {
      alert("Login berhasil");
      router.push('/admin');
    } else if (emailInput === "" && passwordInput === "") {
      alert("Harap mengisi email dan pasword");
    } else {
      alert("Email atau Password Salah!!!");
    }
  };
  return (
    <>
      <div className="home">
        <div className="halLog d-flex justify-content-center align-items-center flex-column" style={{ background: 'linear-gradient(to bottom right, #5786FF, #A7C7FF)', height: '100vh' }}>
          <div className="login p-4 rounded d-flex flex-column" style={{width: '30%'}}>
            <section>
          <h1 className="text-uppercase text-center text-light mb-5">ADMIN LOGIN</h1>
              <span>
                <input type="email" placeholder="Email" onChange={(e) => setEmailInput(e.target.value)} />
              </span>
              <span>
                <input type="password" placeholder="Password" onChange={(e) => setPasswordInput(e.target.value)} />
              </span>
            </section>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}