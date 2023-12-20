import { useContext } from "react";
import { useQuery } from "react-query";
import { ContextAuth } from "../AuthContext/Authcontext";
import axios from "axios";


const getAdmin = () => {
    let {user} = useContext(ContextAuth)
    const { data:isAdmin , isLoading: adminloading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled:!!user?.email ,
        queryFn: async () => {
          const res = await axios.get(`https://eduhub-ndns.onrender.com/alluser/admin/${user?.email}`)
    
          return res.data.admin;
          
        },
        
      })
      
      
      return[isAdmin,adminloading]
  
};

export default getAdmin;