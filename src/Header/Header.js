import LeftItem from "./LeftItem";
import RightItem from "./RightItem";
import '../App.css'

function Header() {
  return (
    <div className="Header">
      
       <LeftItem />
       <RightItem />
    </div>
  );
}

export default Header;
