export default function Flor({url,nombre}){
    return(
        <div className="col-lg-3 col-md-6">
          <div className="card">
              <img className="card-img-top" src={url}/>                    
          </div>
          <div className=" text-center">
              <p className="font-weight-bold ">{nombre}</p>
          </div>
        </div>  
    )
}