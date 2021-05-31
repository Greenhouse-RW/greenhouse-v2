import React from 'react'
import './settings.css';

const Settings = () => {
    return (
        <div className="flex justify-center">
            <form className="myform">
            <div class="field">
              <label for="">Full Name</label>
              <input class="full_name"
                     type="text"
                     name="full-name"
                     value="" />
            </div>
            <div class="field">
              <label for="">Email</label>
              <input class="full_name"
                     type="text"
                     name="full-name" />
            </div>
            <div class="field">
              <label for="">Password</label>
              <input class="full_name"
                     type="text"
                     name="full-name" />
            </div>
            <div class="field">
              <label for="">Birthday</label>
              <input class="full_name"
                     type="text"
                     name="full-name" />
            </div>

            <a href="#"><button class="button_left" type="submit" name="button">Save Changes</button></a>
          <a href="#"><button class="button_right" type="cancel" name="button">Cancel</button></a>
            </form>
            
          
        
        </div>
    )
}

export default Settings
