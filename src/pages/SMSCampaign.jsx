function SMSCampaign() {
  return (
    <section className="form-wrapper">
      <div className="container">
        <div className="inner">
          <div className="integration shadow mb-5 bg-body rounded bg-white">
            <form action="">
              <div className="row my-4">
                <div className="col-12 text-center mb-4">
                  <h2>SMS Campaign</h2>
                </div>
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    Name SMS Campaign
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">
                    Choose Phone No
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-12 my-3">
                  <label for="inputAddress" className="form-label">
                    SMS Body
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    rows="8"
                    placeholder="This Will Be A WYSIWYG Editor"
                  ></textarea>
                </div>
              </div>
              <div className="row my-2">
                <div className="col-md-4">
                  <label for="inputAddress" className="form-label">
                    Choose Campaign
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label for="inputAddress2" className="form-label">
                    New Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder=""
                  />
                </div>
                <div className="col-md-4">
                  <label for="inputAddress2" className="form-label">
                    Custom Defined Schedule
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="row my-2">
                <div className="col-md-4">
                  <select id="inputState" className="form-select">
                    <option selected>Attempt option...</option>
                    <option>...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select id="inputState" className="form-select">
                    <option selected>Webhook Service...</option>
                    <option>...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select id="inputState" className="form-select">
                    <option selected>Personalize Sms...</option>
                    <option>...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-12 my-2">
                  <label for="inputAddress2" className="form-label">
                    Filter Rule
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder=""
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn d-block ms-auto">
                    Add Rule
                  </button>
                </div>
              </div>
              <div className="row my-2">
                <div className="schedule">
                  <div className="timing">
                    <div className="item">
                      <a href="" className="btn">
                        Start
                      </a>
                    </div>
                    <div className="item">
                      <a href="" className="btn">
                        End
                      </a>
                    </div>
                    <div className="item">
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Hours"
                      />
                    </div>
                    <div className="item">
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Min"
                      />
                    </div>
                  </div>
                  <div className="sched">
                    <div className="item">
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Last Attempt"
                      />
                    </div>
                    <div className="item">
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Fix Schedule"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 my-2">
                  <div className="weekDays-selector">
                    <input
                      type="checkbox"
                      id="weekday-mon"
                      className="weekday"
                    />
                    <label for="weekday-mon">M</label>
                    <input
                      type="checkbox"
                      id="weekday-tue"
                      className="weekday"
                    />
                    <label for="weekday-tue">T</label>
                    <input
                      type="checkbox"
                      id="weekday-wed"
                      className="weekday"
                    />
                    <label for="weekday-wed">W</label>
                    <input
                      type="checkbox"
                      id="weekday-thu"
                      className="weekday"
                    />
                    <label for="weekday-thu">T</label>
                    <input
                      type="checkbox"
                      id="weekday-fri"
                      className="weekday"
                    />
                    <label for="weekday-fri">F</label>
                    <input
                      type="checkbox"
                      id="weekday-sat"
                      className="weekday"
                    />
                    <label for="weekday-sat">S</label>
                    <input
                      type="checkbox"
                      id="weekday-sun"
                      className="weekday"
                    />
                    <label for="weekday-sun">S</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <label for="inputAddress2" className="form-label">
                    Week Number
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>1 week</option>
                    <option>2 week</option>
                    <option>3 week</option>
                    <option>4 week</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label for="inputAddress2" className="form-label">
                    Month Number
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>1 Month</option>
                    <option>2 Month</option>
                    <option>3 Month</option>
                    <option>4 Month</option>
                    <option>5 Month</option>
                    <option>6 Month</option>
                    <option>7 Month</option>
                    <option>8 Month</option>
                    <option>9 Month</option>
                    <option>10 Month</option>
                    <option>11 Month</option>
                    <option>12 Month</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label for="inputAddress2" className="form-label">
                    Add Follow Up
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Name Of Agent"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Phone No Used"
                  />
                </div>
                <div className="col-12 my-2">
                  <button type="submit" className="btn d-block ms-auto">
                    Add Agent
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SMSCampaign;
