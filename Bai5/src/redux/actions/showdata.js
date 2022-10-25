import axios from "axios";

const showData = async ()=> {
    const res = await axios.get(`http://192.168.0.100:3000/products`)
    return{
        
    }
  }

