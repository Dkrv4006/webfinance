import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auths, db, provider,  } from '@/main'
import { useStore } from "./index";


const deleteFinance = async (id) => {
  await deleteDoc(doc(db, "revenue", id));
}
async function getAllCategoris() {
  const storeId = useStore()
    const email = await storeId.getEmail
      try {
        const citiesRef = collection(db, email, "categoris", "types")
        const citiesSnapshot = await getDocs(citiesRef);
        let dados = []
        citiesSnapshot.forEach((doc) => {
          if (doc.exists()) {
            const { categoris } = doc.data()
            dados.push(categoris)
            
          } else {console.log("O documento não existe.");
          }
          
        });
        
        storeId.init(dados)
        getAllMoney()
      } catch (error) {
        console.error("Erro ao obter documentos:", error);
      }
 }

async function getAllMoney() {
    const storeId = useStore()
    const email = await storeId.getEmail
      try {
        const citiesRef = collection(db, email, "money", "types")
        const citiesSnapshot = await getDocs(citiesRef);
        let dados = []
        citiesSnapshot.forEach((doc) => {
          if (doc.exists()) {
            const { categoris } = doc.data()
            dados.push(categoris)
            
          } else {console.log("O documento não existe.");
          }
          
        });
        
        console.log('get', dados);
      } catch (error) {
        console.error("Erro ao obter documentos:", error);
      }
 }
  
  

  async function addMoneyDB() {
    try {
      const docRef = await addDoc(collection(db, "account"), {
        uuid: 'dad',
        data: 'daniel'
      });
  
      console.log('Documento adicionado com ID:', docRef.id);
      await account(docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Erro ao adicionar documento:", error);
      return null;
    }
  }
  
  // addMoneyDB();
  
// getFilterFinance()

  async function getAllFinance() {
    try {
      const citiesRef = collection(db, "revenue")
      const citiesSnapshot = await getDocs(citiesRef);
  
      let dados = []
      citiesSnapshot.forEach((doc) => {
        if (doc.exists()) {
          const cityid = doc.id;
          const cityData = doc.data();
        //   console.log(cityid);
        //   console.log(cityData);

          dados.push(doc.data())
        //   console.log("Dados do documento:", dados);
        
        } else {
          console.log("O documento não existe.");
        }

      });

      return  dados
    } catch (error) {
      console.error("Erro ao obter documentos:", error);
    }
  }

//   getAllFinance()

export {
    getAllCategoris,
    deleteFinance
}
