import react from "react";
import "./Comunity.css";
function Comunity() {
  return (
    <div className="Comunity">
      <div className="Video">
        <div className="Video1">
          <iframe width="80%" height="auto" src="https://www.youtube.com/embed/oubyBG2QdgM" 
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
          encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
          </div>
        <div className="video2">
          <iframe width="80%" height="auto" src="https://www.youtube.com/embed/Sp_vwyPcOXg" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        </div>
        <div className="Video3"> 
        <iframe width="80%" height="auto" src="https://www.youtube.com/embed/T2jtWGQsf9k" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        </div>

        <div className="video4">
        <iframe width="80%" height="auto" src="https://www.youtube.com/embed/sDwvPCAWCL4"
         title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

          </iframe>
        </div>
      </div>
    </div>
  );
}
export default Comunity;
