import React from 'react'
import './settings.css';

const Settings = () => {
    return (
        <div className="ml-80 justify-center">
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
            </form>
            <div class="bottom">
          <a href="#"><button class="button_left" type="submit" name="button">Save Changes</button></a>
          <a href="#"><button class="button_right" type="cancel" name="button">Cancel</button></a>
        </div>
            
        </div>
    )
}

export default Settings
