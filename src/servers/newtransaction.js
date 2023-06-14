import { onAuthStateChanged} from 'firebase/auth'
import { auths, db, provider,  } from '@/main'
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import { v4 as uuidV4 } from 'uuid'
import { getAllCategoris } from '@/store/db';

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
getAllCategoris()

          }
}


    
export{
    newTrasation
}