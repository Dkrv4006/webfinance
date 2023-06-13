import { onAuthStateChanged} from 'firebase/auth'
import { auths, db, provider,  } from '@/main'
import { doc, setDoc, getDoc } from "firebase/firestore";


const newTrasation =  async (data) => {

          if (!data) {
            alert('errro')
          } else if (data) {
            
               await setDoc(doc(db, email, 'receita'), { data });

             }
          
        }
        
    
export{
    newTrasation
}