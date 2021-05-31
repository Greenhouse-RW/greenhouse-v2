import React from 'react'
import './settings.css';
import { useFileUpload } from "use-file-upload";

const Settings = () => {
  const [files, selectFiles] = useFileUpload();
  const defaultSrc =
  "https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png";
    return (
        <div className="grid justify-items-center">

<img className="myimage mt-6" src={files?.source || defaultSrc} alt="preview" />
      <button className="button_left mt-4"
        onClick={() =>
          selectFiles({ accept: "image/*" }, ({ name, size, source, file }) => {
            console.log("Files Selected", { name, size, source, file });
          })
        }
      >
        Upload Avatar
      </button>

            <form className="myform mt-8">
            {/* <h2>Enter your credential for sudden information</h2> */}
            <div class="field">
              <label for="">Full Name</label>
              <input type="text" 
              name="full-name"  />
            </div>
            <div class="field">
              <label for="">Username</label>
              <input class="full_name"
                     type="text"
                     name="full-name" />
            </div>
            <div class="field">
              <label for="">Email or Phone</label>
              <input
                     type="text"
                     name="full-name" />
            </div>
        
            <div class="field">
              <label for="">Password</label>
              <input class="full_name"
                     type="password"
                     name="full-name" />
            </div>

            <div class="field">
              <label for="">Confirm Password</label>
              <input class="full_name"
                     type="password"
                     name="full-name" />
            </div>

            <a href="#"><button class="button_left mb-8" type="submit" name="button">Save Changes</button></a>
          <a href="#"><button class="button_right mb-8" type="cancel" name="button">Cancel</button></a>
            </form>
            
          
        
        </div>
    )
}

export default Settings
