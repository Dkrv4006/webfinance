
import { onAuthStateChanged} from 'firebase/auth'
import { auths, db, provider,  } from '@/main'
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useStore } from '@/store';
export default {
    auth(to, from, next){
        
        onAuthStateChanged(auths, async (user) => {
          if (!user) {
            next('/login')
          } else if (user) {
            const { uid, photoURL, displayName, email } = user
            const storeId = useStore()
            const userDatas = {uid, photoURL, displayName, email}
            storeId.salveUser(userDatas)
            // Armazenar dados do usuário no Local Storage
            const userData = localStorage.getItem('userData')
            console.log('store', userData);
            if(!userData){
              localStorage.setItem('userData', JSON.stringify(userDatas))
              await setDoc(doc(db, email, 'user'), { uid, photoURL, displayName });
              next()
              
            }
            next()
          }
        })
        
    }
}