import image1 from './linked.png'
import image2 from './mail.png'
function Footer() {
  const styl={width:"30px",height:"30px"} 
    return (
      <div className="footer">
        <div a="h2"  className="footerelement">Find Job</div>
        <div className="footerelement">
          <a> <img alt="background image " src={image1} class=""  style={styl}/></a>
          <a> <img alt="background image " src={image2} class="" style={styl}/></a>
          
        </div>
        < div className="footerelement" >
        
          <a className="myanchor2"  href="">Contact us</a>
          <a className="myanchor2" href="" >FAQs</a>
          <a className="myanchor2" href="" >Terms Of Use</a>
          <a className="myanchor2" href="">Privacy Policy</a>
          <a className="myanchor2" href="" >Cookie Policy</a>
         </div>
          <div className="footerelement" ><h5 >© Copyright 2021 Job Find. All Rights Reserved.</h5></div>
      </div>
    );
  }
  
  export default Footer;
  