function DealTrackAgent() {
  return (
    <section className="intro FI-agent">
      <div className="mask d-flex align-items-center h-100">
        <div className="container">
          <div className="row justify-content-center gy-4 pb-5">
            <div className="text-center head">
              <h2>DealerTrack Agent</h2>
            </div>
            <div className="col-12">
              <div className="b1-wrapper">
                <div className="lead-status b1-page">
                  <div className="details align-items-center border-0">
                    <h3 className="m-0 border-0">Jhon Doe</h3>
                    <div>
                      <div className="banks">
                        <a href="">E.D</a>
                        <a href="">P.F</a>
                        <a href="">I.A</a>
                        <a href="">S.A</a>
                        <a href="">O.C</a>
                        <a href="">I.B</a>
                        <a href="">L.C</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lead-status b1-page">
                  <div className="details align-items-center border-0">
                    <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          id="ex1-tab-1"
                          data-bs-toggle="tab"
                          href="#bank-message"
                          role="tab"
                          aria-controls="bank-message"
                          aria-selected="true"
                        >
                          Bank Message
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="ex1-tab-2"
                          data-bs-toggle="tab"
                          href="#decision"
                          role="tab"
                          aria-controls="decision"
                          aria-selected="false"
                        >
                          Decision
                        </a>
                      </li>
                    </ul>
                    <div>
                      <div className="links">
                        <a href="" className="document">
                          %scale 0 to 100% for Document
                        </a>
                        <a className="call-lead">04/01/2024</a>
                        <a className="call-lead">3 hours</a>
                      </div>
                    </div>
                  </div>

                  <div className="tab-content" id="ex1-content">
                    <div
                      className="tab-pane fade show active"
                      id="bank-message"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-1"
                    >
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed quisquam soluta possimus? Reprehenderit ducimus
                        tempora distinctio? Ipsam illo quibusdam at corrupti
                        fugit excepturi! Amet exercitationem dolores suscipit,
                        temporibus nostrum debitis.
                      </textarea>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="decision"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-2"
                    >
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed quisquam soluta possimus? Reprehenderit ducimus
                        tempora distinctio? Ipsam illo quibusdam at corrupti
                        fugit excepturi! Amet exercitationem dolores suscipit,
                        temporibus nostrum debitis.
                      </textarea>
                    </div>
                  </div>
                  <div className="message-wrapper">
                    <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          id="ex1-tab-1"
                          data-bs-toggle="tab"
                          href="#client-message"
                          role="tab"
                          aria-controls="client-message"
                          aria-selected="true"
                        >
                          Message to Bank
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="ex1-tab-2"
                          data-bs-toggle="tab"
                          href="#message-client"
                          role="tab"
                          aria-controls="message-client"
                          aria-selected="false"
                        >
                          Message to Client
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="ex1-content">
                      <div
                        className="tab-pane fade show active"
                        id="client-message"
                        role="tabpanel"
                        aria-labelledby="ex1-tab-1"
                      >
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sed quisquam soluta possimus? Reprehenderit
                          ducimus tempora distinctio? Ipsam illo quibusdam at
                          corrupti fugit excepturi! Amet exercitationem dolores
                          suscipit, temporibus nostrum debitis.
                        </textarea>

                        <div
                          className="form-group custom-file my-2"
                          x-data="{ fileName: '' }"
                        >
                          <div className="input-group">
                            <input
                              type="file"
                              x-ref="file"
                              name="img[]"
                              className="d-none"
                            />
                            <button
                              className="browse btn btn-primary px-4"
                              type="button"
                            >
                              <i className="fas fa-image"></i> Attach File
                            </button>
                          </div>
                        </div>
                        <div className="btns-wrapper">
                          <a href="" className="btn">
                            SMS
                          </a>
                          <a href="" className="btn">
                            email
                          </a>
                          <a href="" className="btn">
                            vocal
                          </a>
                          <a href="" className="btn">
                            ibv
                          </a>
                          <a href="" className="btn">
                            send message
                          </a>
                          <a href="" className="btn">
                            add campaign
                          </a>
                          <a href="" className="btn">
                            Message Forward
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="message-client"
                        role="tabpanel"
                        aria-labelledby="ex1-tab-2"
                      >
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sed quisquam soluta possimus? Reprehenderit
                          ducimus tempora distinctio? Ipsam illo quibusdam at
                          corrupti fugit excepturi! Amet exercitationem dolores
                          suscipit, temporibus nostrum debitis.
                        </textarea>
                        {/* <div className="form-group custom-file my-2" x-data="{ fileName: '' }">
                                              <div className="input-group">
                                                <input type="file" x-ref="file" @change="fileName = $refs.file.files[0].name" name="img[]" className="d-none">
                                                <button className="browse btn btn-primary px-4" type="button" x-on:click.prevent="$refs.file.click()"><i className="fas fa-image"></i> Attach File</button>
                                              </div>
                                            </div> */}
                        <div className="btns-wrapper">
                          <a href="" className="btn">
                            SMS
                          </a>
                          <a href="" className="btn">
                            email
                          </a>
                          <a href="" className="btn">
                            vocal
                          </a>
                          <a href="" className="btn">
                            ibv
                          </a>
                          <a href="" className="btn">
                            send message
                          </a>
                          <a href="" className="btn">
                            add campaign
                          </a>
                          <a href="" className="btn">
                            Message Forward
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="b1-wrapper ">
                <div className="heading mb-0 d-flex align-items-center">
                  <h2 className="text-capitalize">Campaign</h2>
                  <div className="onoffbtn">
                    <div
                      className="btn-group align-items-stretch"
                      role="group"
                      aria-label="Basic radio toggle button group"
                    >
                      <input
                        type="radio"
                        className="btn-check w-100 h-100"
                        name="btnradio"
                        id="btnradio1"
                        autocomplete="off"
                        checked
                      />
                      <label
                        style={{ padding: " 12px", margin: "0" }}
                        className="fw-normal btn btn-outline-primary d-flex justify-content-center align-items-center"
                        for="btnradio1"
                      >
                        ON
                      </label>

                      <input
                        type="radio"
                        className="btn-check w-100 h-100"
                        name="btnradio"
                        id="btnradio2"
                        autocomplete="off"
                      />
                      <label
                        style={{ padding: "6px 12px", margin: "0" }}
                        className="fw-normal btn btn-outline-primary d-flex justify-content-center align-items-center"
                        for="btnradio2"
                      >
                        OFF
                      </label>
                    </div>
                  </div>
                  <div
                    className="btn-group "
                    role="group"
                    aria-label="Basic checkbox toggle button group"
                  >
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btncheck1"
                      autocomplete="off"
                    />
                    <label
                      style={{ padding: "12px" }}
                      className="start-campaign fw-normal btn btn-outline-primary"
                      for="btncheck1"
                    >
                      Start Campaign
                    </label>
                  </div>
                </div>
                <div className="lead-status b1-page campaign-sec">
                  <div className="details align-items-center border-0">
                    <h3 className="m-0 border-0">Jhon Doe</h3>
                    <div>
                      <div className="banks">
                        <a href="">Start Date</a>
                        <a href="">End Date</a>
                        <a href="">SMS</a>
                        <a href="">Vocal</a>
                        <a href="">Email</a>
                        <input
                          type="text"
                          className="form-control w-100"
                          placeholder="Message..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DealTrackAgent;
