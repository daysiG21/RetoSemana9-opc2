import React, {useState, useEffect} from 'react'
import Flor from './Flor';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

export default function App() {
  let [lista, setLista] = useState(["https://www.rosatel.pe/6377/florero-con-10-rosas-y-flores.jpgºRosa",
  "https://thumbs.dreamstime.com/b/ramo-de-margaritas-en-el-florero-de-cristal-68610341.jpgºMargarita",
  "https://www.kukyflor.com/2877/florero-20-tulipanes-variados.jpgºTupilan",
"https://previews.123rf.com/images/mallivan/mallivan1307/mallivan130700003/20932853-ramo-fragante-jazm%C3%ADn-en-un-florero-en-la-mesa.jpgºJazmin"])

  let [lista2,setLista2]=useState(["https://thumbs.dreamstime.com/b/flor-rosada-de-la-dalia-en-florero-10603503.jpgºDalia",
  "https://www.serviflores.com/web/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/i/lirios_florero.jpgºLirio",
"https://thumbs.dreamstime.com/b/un-florero-rojo-del-clavel-12221726.jpgºClavel",
"https://www.alejoscolor.com/wp-content/uploads/2020/05/Girasoles-en-florero.jpgºGirasol"])

  return (
    <div className="container">
      <h5>New</h5>  
      <div className="row mt-4">
      {lista.map((item)=>{
        return (<Flor url={item.split("º")[0]} nombre={item.split("º")[1]}/>)
      })}        
        
      </div>  
      <h5>Relevant</h5>
      <div className="row mt-4">
      {lista2.map((item)=>{
        return (<Flor url={item.split("º")[0]} nombre={item.split("º")[1]}/>)
      })}
      </div>       
    </div>
  );
}

