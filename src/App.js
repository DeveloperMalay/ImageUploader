import "./App.scss";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import profile from "./profile.png";

function App() {
  const [imagepreview, setImagePreview] = useState();

  // to change profile picture
  const handleImagechange = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="App">
      <header>Image Uploder</header>
      <article>
        <div className="profile_pic">
          <input
            type="file"
            name="profilePic"
            accept=".png, .jpg, .jpeg"
            multiple={false}
            onChange={handleImagechange}
          />
          <span>
            <BsFillPlusCircleFill />
          </span>
          <div className="previewPic">
            <img src={!imagepreview ? profile : imagepreview} />
          </div>
        </div>
      </article>
    </div>
  );
}

export default App;
