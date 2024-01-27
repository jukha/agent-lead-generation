function CreateCampaign() {
  return (
    <section className="form-wrapper">
      <div className="container">
        <div className="inner">
          <div className="integration shadow  mb-5 bg-body rounded bg-white">
            <form action="">
              <div className="row my-4">
                <div className="col-12 text-center mb-4">
                  <h2>Create Campaign</h2>
                </div>
                <div className="col-md-4">
                  <label for="inputEmail4" className="form-label">
                    Name Of Campaign
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-8">
                  <label for="inputPassword4" className="form-label">
                    Add Source
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-12">
                  <ul>
                    <li>
                      <span>1.</span>
                      <p>
                        <span>Facebook Lead</span>Test Test Lorem ipsum dolor
                        sit amet.
                      </p>
                    </li>
                    <li>
                      <span>2.</span>
                      <p>
                        <span>Facebook Lead</span>Test Test Lorem ipsum dolor
                        sit amet.
                      </p>
                    </li>
                    <li>
                      <span>3.</span>
                      <p>
                        <span>Facebook Lead</span>Test Test Lorem ipsum dolor
                        sit amet.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12">
                  <h3>Email Integration</h3>
                </div>
                <div className="col-md-6">
                  <label for="inputAddress" className="form-label">
                    Email Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder=""
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputAddress2" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="example@example.com"
                  />
                </div>
                <div className="col-12 my-2">
                  <label for="inputAddress2" className="form-label">
                    Configuration Of Email
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
                    Add Email
                  </button>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12">
                  <h3>Vocal Integration</h3>
                </div>
                <div className="col-md-6">
                  <label for="Namecampaign" className="form-label">
                    Name Of The Campaign
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Namecampaign"
                    placeholder=""
                  />
                </div>
                <div className="col-md-6">
                  <label for="PhoneNumber" className="form-label">
                    Phone No
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="example@example.com"
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12">
                  <h3>Number Integration From Twillo</h3>
                </div>
                <div className="col-md-4">
                  <label for="Namecampaign" className="form-label">
                    Name Of The Campaign
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Namecampaign"
                    placeholder=""
                  />
                </div>
                <div className="col-md-4">
                  <label for="PhoneNumber" className="form-label">
                    Alias
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder=""
                  />
                </div>
                <div className="col-md-4">
                  <label for="PhoneNumber" className="form-label">
                    Phone No
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12">
                  <h3>SMS Integration With Twillo</h3>
                </div>
                <div className="col-md-4">
                  <label for="Namecampaign" className="form-label">
                    Name Of The Campaign
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Namecampaign"
                    placeholder=""
                  />
                </div>
                <div className="col-md-4">
                  <label for="PhoneNumber" className="form-label">
                    Alias
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder=""
                  />
                </div>
                <div className="col-md-4">
                  <label for="PhoneNumber" className="form-label">
                    Phone No
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder=""
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateCampaign;
