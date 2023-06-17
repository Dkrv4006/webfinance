
import { auths, db, provider,  } from '@/main'
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import { v4 as uuidV4 } from 'uuid'


const newTrasation =  async (data) => {

  if (!data) {
    alert('errro')
  } else if (data) {
            const uuid = uuidV4()

                 await setDoc(doc(db,'money', uuid), {
                  description: data.description,
                  money: data.money,
                  category: data.category,
                  date: data.date,
                  conta: data.conta,
                  dateCreate: data.dateCreate,
                  id: uuid,
                 });
               


          }
}


    
export{
    newTrasation
}