import { onAuthStateChanged} from 'firebase/auth'
import { auths, db, provider,  } from '@/main'
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import { v4 as uuidV4 } from 'uuid'

const newTrasation =  async (data) => {

          if (!data) {
            alert('errro')
          } else if (data) {
            const userData = localStorage.getItem('userData')
            const {email} = JSON.parse(userData);
            const uuid = uuidV4()
            console.log(uuid);
                await setDoc(doc(db, email, 'receita', 'todo' , uuid), data);
               console.log("data ", data);
getAllFinance()

          }
}

 async function getAllFinance() {
  console.log('aqui!!');
    try {
      const citiesRef = collection(db, "danielkennedy400619@gmail.com", "user", "category")
      const citiesSnapshot = await getDocs(citiesRef);
  
      let dados = []
      citiesSnapshot.forEach((doc) => {
        if (doc.exists()) {
          const cityData = doc.data();

          dados.push(doc.data())
          
        } else {
          console.log("O documento não existe.");
        }
        
      });
      
      console.log("Dados do documento:", dados);
      return  dados
    } catch (error) {
      console.error("Erro ao obter documentos:", error);
    }
  }


    
export{
    newTrasation
}