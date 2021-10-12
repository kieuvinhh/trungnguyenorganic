// eslint-disable-next-line 
import react from "react";
import posters from "./poster.png";
import "./Poster.css";
function poster(){
    return(
        <div className="Body">
            <img src={posters} alt="" />
        </div>
    );
}
export default poster;