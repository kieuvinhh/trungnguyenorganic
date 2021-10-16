// eslint-disable-next-line 
import react from "react";
import poster from "./IMG_1245.png";
import "./Poster.css";
function Poster(){
    return(
        <div className="Body">
            <img src={poster} alt="poster"/>
        </div>
    );
}
export default Poster;