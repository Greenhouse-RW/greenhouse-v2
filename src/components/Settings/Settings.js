import React from 'react'
import './settings.css';
import { useFileUpload } from 'use-file-upload'

const Settings = () => {
  const [file, selectFile] = useFileUpload()
    return (
      
        <div className="flex justify-center">
          <div>
      <button
        onClick={() => {
          // Single File Upload
          selectFile()
        }}
      >
        Click to Upload
      </button>

      {file ? (
        <div>
          <img src={file.source} alt='preview' />
          <span> Name: {file.name} </span>
          <span> Size: {file.size} </span>
        </div>
      ) : (
        <span>No file selected</span>
      )}
    </div>
            <form className="myform">
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

            <a href="#"><button class="button_left" type="submit" name="button">Save Changes</button></a>
          <a href="#"><button class="button_right" type="cancel" name="button">Cancel</button></a>
            </form>
            
          
        
        </div>
    )
}

export default Settings
