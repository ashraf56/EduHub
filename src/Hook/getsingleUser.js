import { useContext } from "react";
import { useQuery } from "react-query";
import { ContextAuth } from "../AuthContext/Authcontext";
import axios from "axios";


const getsingleUser = () => {
    let {user} = useContext(ContextAuth)
    const { refetch, data: Userinfo=[] } = useQuery({
        queryKey: ['Userinfo', user?.email],
        enabled:!!user?.email ,
        queryFn: async () => {
          const res = await axios.get(`https://eduhub-ndns.onrender.com/alluser/${user?.email}`)
    
          return res.data;
          
        },
        
      })
      
      
      return[Userinfo,refetch]
  
};

export default getsingleUser;