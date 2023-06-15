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

                 await setDoc(doc(db, email, 'money', 'types' , uuid), {
                  description: data.description,
                  money: data.money,
                  category: data.category,
                  date: data.date,
                  conta: data.conta,
                  dateCreate: data.dateCreate,
                 });
               


          }
}


    
export{
    newTrasation
}