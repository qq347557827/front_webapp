import SearchNav from "./childCom/searchNav";
import "./index.css"
import HomeMain from "./childCom/homeMain";

export default function home() {
  return (
    <div>
      <SearchNav/>
      <HomeMain/>
    </div>
  )
}
