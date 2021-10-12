// eslint-disable-next-line 
import react from "react";
import posters from "./poster.png";
import "./Poster.css";
function poster(){
    return(
        <div className="Body">
            <img src={posters} alt="" height="600" />
        </div>
    );
}
export default poster;