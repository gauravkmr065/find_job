
function Card({image,h,p}) {
  const styl={width:"30px",height:"30px"} 
   return (
      <div className="Card">
          <div className="imageset">
          <img  src={image}/>
          </div>
         
        <h3 className="imageset">{h}</h3>
        <p className="imageset">{p}</p>
      </div>
    );
  }
  
  export default Card;
  