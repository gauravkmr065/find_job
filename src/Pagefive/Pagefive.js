import Card from "./Card";
import image1 from './timer.png'
import image2 from './cloud-connect.png'
import image3 from './broadcasting.png'

function Pagefive() {
    return (
      <div className="pagefive">
        <div className="headingfive" >
        <h1 className="headingfive">How Expertia Can Help You</h1>
        </div>
        <div className="cardcontainer">
        <Card  image={image1} h="Save Time & Money"  p="In our pilot study, 1 professional from the top 5 recommended is hired with a 100% success rate"/>
        <Card image={image2} h="Widest Sourcing"  p="Our platform integrated with top leading job portals to broaden your reach and sourcing of professionals."/>
        <Card image={image3} h="Integrate with your services!"  p="You can chose to get real time updates and integrations based on your convenience!"/>
       </div>
        
      </div>
    );
  }
  
  export default Pagefive;
  