import React from "react";
import BarraMenu from "/src/Componentes/BarraMenu";
import { useEffect, useState } from "react";
import Loading from "../../Componentes/Loading";


 

const Productos  = () => {

    // const [count, setCount] = useState(0);
    // const [mostrar, setMostrar] = useState(false);
 
    const [isLoading, setIsLoading] = useState(true);
 
    useEffect(() => {
      console.log("MONTAJE");
 
      setTimeout(() => {
      setIsLoading(false);
      }, 2000);
 
     return () => {
       console.log("DESMONTAJE");
     };
   }, []);
 
   if (isLoading) {
     return <Loading></Loading>
   }
 
 


    return(
        <main>
        
        <BarraMenu></BarraMenu>
        <h1>JOAN ORDOÑEZ</h1>
   </main>
    );
};
export default  Productos;