import "./Comunity.css";
import { react, useState } from "react";
import axios from "axios";

function Comunity() {
  let Url = "http://2764-35-225-204-31.ngrok.io/link";
  const [links, setLink] = useState('');
  axios.get(Url)
  .then(response => {
    setLink(response.data);
  })
    console.log(links);
    
  return (
    <div className="Comunity">
    
      <div className="Video">
        <div className="Video1">
          <iframe width="100%" height="300px" src="https://www.youtube.com/embed/oubyBG2QdgM"
          title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; 
          encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
          </div>
        <div className="video2">
          <iframe width="100%" height="300px" src="https://www.youtube.com/embed/Sp_vwyPcOXg"
        title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        </div>
        <div className="Video3"> 
        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/T2jtWGQsf9k" 
        title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        </div>

        <div className="video4">
        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/sDwvPCAWCL4"
         title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

          </iframe>
        </div>
      </div>
    </div>
  );
}
export default Comunity;
