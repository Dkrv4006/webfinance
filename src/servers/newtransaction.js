
import { auths, db, provider,  } from '@/main'
import { doc, setDoc, getDoc, collection, getDocs,addDoc } from "firebase/firestore";
import { v4 as uuidV4 } from 'uuid'


const newTrasation = async (data) => {
  if (!data) {
    alert('erro');
  } else if (data) {
    try {
      const uuid = uuidV4();
      const newData = { ...data, uuid }; // Inclui o UUID no objeto de dados

      console.log('new', uuid);
      await setDoc(doc(db, 'revenue', uuid), newData);
    } catch (error) {
      console.error("Erro ao adicionar documento:", error);
    }
  }
};

export{
    newTrasation
}