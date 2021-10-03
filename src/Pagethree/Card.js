function Card({image,h,p}) {
  const styl={width:"60px",height:"60px"} 
    return (
      <div className="pagethreecard">
         <img  style={styl} src={image}/>
        <h1>{h}</h1>
        <p>{p}</p>
      </div>
    );
  }
  
  export default Card;