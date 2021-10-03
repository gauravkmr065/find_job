import Card from "./Card";
import image1 from './bar.png'
import image2 from './people.png'
import image3 from './globe.png'
import image4 from './layergif.gif'
function Pagethree() {
  const styl={width:"360px",height:"260px"} 
    return (
      <div className="pagethree">
        <div>
          <Card  image={image1} h="At First" p="Expertia AI uses algorithms (validated at AAAI conference) which, given a Job Description, identifies Top 10 candidates from a given pool of applications with 100% accuracy."/>
        </div>
        <div>
          <img className="imagesetting" src={image4} style={styl}/>
          <Card image={image2} h="Then," p="It assigns a scope to each profile, scores skills to explain why one candidate is better than the other purely in terms of desired skills." />
        </div>
        <div>
          <Card image={image3}  h="Not just that..." p="The algorithm doesn't just rely on the information in the CV; But goes beyond to build a skill graph, collect information regarding the candidate to enhance the screening abilities of the algorithm." />
        </div>
      </div>
    );
  }
  
  export default Pagethree;
  