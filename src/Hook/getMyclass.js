import axios from "axios";
import { useQuery } from "react-query";
import { ContextAuth } from "../AuthContext/Authcontext";
import { useContext } from "react";

const getMyclass = () => {

  let { user } = useContext(ContextAuth)
  const { refetch, data: myclass = [] ,isLoading } = useQuery({
    queryKey: ['myclass', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(`https://eduhub-server.vercel.app/cart?email=${user?.email}`)

      return res.data;

    },

  })


  return [myclass, refetch,isLoading]



};

export default getMyclass;