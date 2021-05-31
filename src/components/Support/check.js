<div class="container-fluid">
  <div class="row">
    <div class="col-sm-12">

      <div class="profile-holder">
        <div class="profile-people-holder">
          <div class="profile-name">
            <h3>Profile settings</h3>
            <p>Update your profile password and notifications settings</p>
          </div>
        </div>
        <div class="profile-settings-holder">

          <form class="form-horizontal profile-update">
            <div class="form-group clearfix">
              <div class="col-sm-12 control-label">
                <label for="profile_email">Your email</label>
              </div>
              <div class="col-sm-12 profile-email clearfix">
                <p>hcarneiro@fliplet.com</p>
                <div class="btn btn-primary text-helper">Request new invitation</div>
              </div>
            </div>

            <div class="form-group clearfix">
              <div class="col-sm-12 control-label">
                <label for="profile_password">Change password</label>
                <span class="text-helper">Only enter a password if you want to change it</span>
              </div>
              <div class="col-sm-12">
                <input type="password" class="form-control" id="profile_password" name="Change password" placeholder="Enter password to update it">
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="col-sm-12">
                <input type="password" class="form-control" id="profile_password_confirm" name="Confirm password" placeholder="Re-enter password to confirm">
              </div>
            </div>
          </form>

          <div class="notification-settings">
            <div class="notification-legend">
              <p>Enable notifications</p>
              <span class="text-helper">You will receive notifications when new judgments are published</span>
              <div class="notification-toggle">
                <input id="notification_toggle" type="checkbox" class="tgl tgl-ios" />
                <label for="notification_toggle" class="tgl-btn"></label>
              </div>
            </div>
          </div>

          <div class="judgments-settings disabled">
            <div class="settings-legend">
              <p>Select the judgments categories you are interested in</p>
            </div>

            <div class="list">
              <ul>
                <li>
                  <div class="list-desc">
                    <p class="list-title">Patents</p>
                  </div>
                  <div class="notification-toggle">
                    <input id="jg1" type="checkbox" class="tgl tgl-ios" />
                    <label for="jg1" class="tgl-btn"></label>
                  </div>
                </li>
                <li>
                  <div class="list-desc">
                    <p class="list-title">Copyright</p>
                  </div>
                  <div class="notification-toggle">
                    <input id="jg2" type="checkbox" class="tgl tgl-ios" />
                    <label for="jg2" class="tgl-btn"></label>
                  </div>
                </li>
                <li>
                  <div class="list-desc">
                    <p class="list-title">Design</p>
                  </div>
                  <div class="notification-toggle">
                    <input id="jg3" type="checkbox" class="tgl tgl-ios" />
                    <label for="jg3" class="tgl-btn"></label>
                  </div>
                </li>
                <li>
                  <div class="list-desc">
                    <p class="list-title">Trademark</p>
                  </div>
                  <div class="notification-toggle">
                    <input id="jg4" type="checkbox" class="tgl tgl-ios" />
                    <label for="jg4" class="tgl-btn"></label>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          <div class="form-btns clearfix">
            <div class="btn btn-primary">Save changes</div>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>
