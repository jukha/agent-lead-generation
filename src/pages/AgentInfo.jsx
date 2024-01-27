import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

function AgentInfo() {
  const formik = useFormik({
    initialValues: {
      agentName: "",
      agetNo: "",
      etc: "",
      email: "",
      file1: null,
      file2: null,
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      console.log("form values", values);
    },
  });

  useEffect(() => {
    document.body.style.backgroundImage = "none";
  }, []);
  return (
    <section className="form-wrapper">
      <div className="container">
        <div className="inner">
          <div className="integration shadow mb-5 bg-body rounded bg-white">
            <form onSubmit={formik.handleSubmit}>
              <div className="row my-4 gy-2">
                <div className="col-12 text-center mb-4">
                  <h2>Agent Info</h2>
                </div>
                <div className="col-md-5">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Agent Name"
                    {...formik.getFieldProps("agentName")}
                  />
                </div>
                <div className="col-md-5">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Agent's Number"
                    {...formik.getFieldProps("agentNo")}
                  />
                </div>
                <div className="col-md-2">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="ETC"
                    {...formik.getFieldProps("etc")}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email Address"
                    {...formik.getFieldProps("email")}
                  />
                </div>
                <div className="col-md-4">
                  <a id="deal-menu" className="btn w-100 text-uppercase">
                    Define Agent's Schedule
                  </a>
                </div>
                {/* <div className="deal-menu">
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
                      <label for="inputAddress2" className="form-label w-100">
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
                      <label for="inputAddress2" className="form-label w-100">
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
                      <label for="inputAddress2" className="form-label w-100">
                        Add Follow Up
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-12 my-2">
                      <button type="submit" className="btn d-block ms-auto">
                        Save Schedule
                      </button>
                    </div>
                  </div>
                </div> */}
                <div className="col-12">
                  <div className="vocal-campaigns-head">
                    <label for="inputAddress" className="form-label fw-bold">
                      Add Vocal Message
                    </label>
                    <a type="submit" className="btn ms-auto fw-bold">
                      <p>+</p>
                    </a>
                  </div>
                  <div className="vocal-messages">
                    <div className="item">
                      <input
                        type="file"
                        className="form-control"
                        {...formik.getFieldProps("file1")}
                      />
                    </div>
                    <div className="item">
                      <input
                        type="file"
                        className="form-control"
                        {...formik.getFieldProps("file2")}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 my-2">
                  <button type="submit" className="btn d-block ms-auto">
                    Save
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

export default AgentInfo;
