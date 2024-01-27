import { useFormik } from "formik";
import * as Yup from "yup";

const weekDays = [
  { name: "M", code: "mon" },
  { name: "T", code: "tue" },
  { name: "W", code: "wed" },
  { name: "T", code: "thur" },
  { name: "F", code: "fri" },
  { name: "S", code: "sat" },
  { name: "S", code: "sun" },
];

const campaignTypes = [
  { name: "Email", value: "email" },
  { name: "SMS", value: "sms" },
  { name: "Vocal", value: "vocal" },
  { name: "Phone", value: "phone" },
];

const toggleField = (fieldName, value, formik) => {
  formik.setFieldValue(
    fieldName,
    formik.values[fieldName].includes(value)
      ? formik.values[fieldName].filter((fieldValue) => fieldValue !== value)
      : [...formik.values[fieldName], value]
  );
};

function Home() {
  const formik = useFormik({
    initialValues: {
      campaignName: "",
      areaCode: "Use Same",
      phoneNo: "",
      callBack: "2",
      redicalGap: "",
      callerId: "",
      pressToCall: "",
      hours: "",
      minutes: "",
      lastAttempt: "",
      fixSchedule: "",
      weekDays: [],
      weekNo: "1",
      monthNo: "1",
      followUp: "",
      agentName: "",
      agentPhoneNo: "",
      campaignTypes: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      console.log("form values", values);
    },
  });
  return (
    <section className="form-wrapper">
      <div className="container">
        <div className="inner">
          <div className="integration shadow mb-5 bg-body rounded bg-white">
            <form onSubmit={formik.handleSubmit}>
              <div className="row my-4">
                <div className="col-12 text-center mb-4">
                  <h2>Dialer Agent</h2>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    Name Of Campaign
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    {...formik.getFieldProps("campaignName")}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputPassword4" className="form-label">
                    Area Code
                  </label>
                  <select
                    id="inputState"
                    className="form-select"
                    {...formik.getFieldProps("areaCode")}
                  >
                    <option value="Use Same">Use Same</option>
                    <option value="Others 1">Others 1</option>
                    <option value="Others 2">Others 2</option>
                    <option value="Others 3">Others 3</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    Phone No
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Use To Call Agent"
                    {...formik.getFieldProps("phoneNo")}
                  />
                </div>
                <div className="col-md-4">
                  <a href="" className="btn w-100 text-uppercase">
                    Ring All Agent
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="" className="btn w-100 text-uppercase">
                    Round Robin
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="" className="btn w-100 text-uppercase">
                    Priority one Free
                  </a>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputPassword4" className="form-label">
                    CallBack
                  </label>
                  <select
                    id="inputState"
                    className="form-select"
                    {...formik.getFieldProps("callBack")}
                  >
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputPassword4" className="form-label">
                    Redial Gap
                  </label>
                  <select
                    id="inputState"
                    className="form-select"
                    {...formik.getFieldProps("redicalGap")}
                  >
                    <option value="1">1 Min</option>
                    <option value="2">2 Min</option>
                    <option value="3">3 Min</option>
                    <option value="4">4 Min</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputPassword4" className="form-label">
                    Caller Id
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder=""
                    {...formik.getFieldProps("calledId")}
                  />
                </div>
                <div className="col-12 my-3">
                  <label htmlFor="inputAddress" className="form-label">
                    Press 1 To Call
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    rows="2"
                    placeholder="CLient Name"
                    {...formik.getFieldProps("pressToCall")}
                  ></textarea>
                </div>
                <div className="col-md-4">
                  <a id="deal-menu" className="btn w-100 text-uppercase">
                    Define Menu
                  </a>
                </div>
                {/* <div className="deal-menu">
                  <div className="row my-2">
                    <div className="col-md-6 my-2  d-flex align-items-center justify-content-center">
                      <label htmlFor="inputPassword4" className="form-label">
                        1.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-md-6 my-2 d-flex align-items-center justify-content-center">
                      <label htmlFor="inputPassword4" className="form-label">
                        2.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-md-6 my-2 d-flex align-items-center justify-content-center">
                      <label htmlFor="inputPassword4" className="form-label">
                        3.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-md-6 my-2 d-flex align-items-center justify-content-center">
                      <label htmlFor="inputPassword4" className="form-label">
                        4.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-md-6 my-2 d-flex align-items-center justify-content-center">
                      <label htmlFor="inputPassword4" className="form-label">
                        5.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-md-6 my-2 d-flex align-items-center justify-content-center">
                      <label htmlFor="inputPassword4" className="form-label">
                        6.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-md-6 my-2 d-flex align-items-center justify-content-center">
                      <label htmlFor="inputPassword4" className="form-label">
                        7.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-md-6 my-2 d-flex align-items-center justify-content-center">
                      <label htmlFor="inputPassword4" className="form-label">
                        8.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-md-6 my-2 d-flex align-items-center justify-content-center">
                      <label htmlFor="inputPassword4" className="form-label">
                        9.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-md-6 my-2 d-flex align-items-center justify-content-center">
                      <label htmlFor="inputPassword4" className="form-label">
                        10.
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div> */}
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
                          {...formik.getFieldProps("hours")}
                        />
                      </div>
                      <div className="item">
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress2"
                          placeholder="Min"
                          {...formik.getFieldProps("minutes")}
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
                          {...formik.getFieldProps("lastAttempt")}
                        />
                      </div>
                      <div className="item">
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress2"
                          placeholder="Fix Schedule"
                          {...formik.getFieldProps("fixSchedule")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 my-2">
                    <div className="weekDays-selector">
                      {weekDays.map((day, i) => (
                        <button
                          key={day.code}
                          type="button"
                          className={
                            formik.values.weekDays.includes(day.code)
                              ? "active"
                              : ""
                          }
                          onClick={() =>
                            toggleField("weekDays", day.code, formik)
                          }
                        >
                          {day.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputAddress2" className="form-label">
                      Week Number
                    </label>
                    <select
                      id="inputState"
                      className="form-select"
                      {...formik.getFieldProps("weekNo")}
                    >
                      <option value="1">1 week</option>
                      <option value="2">2 week</option>
                      <option value="3">3 week</option>
                      <option value="4">4 week</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputAddress2" className="form-label">
                      Month Number
                    </label>
                    <select
                      id="inputState"
                      className="form-select"
                      {...formik.getFieldProps("monthNo")}
                    >
                      <option value="1">1 Month</option>
                      <option value="2">2 Month</option>
                      <option value="3">3 Month</option>
                      <option value="4">4 Month</option>
                      <option value="5">5 Month</option>
                      <option value="6">6 Month</option>
                      <option value="7">7 Month</option>
                      <option value="8">8 Month</option>
                      <option value="9">9 Month</option>
                      <option value="10">10 Month</option>
                      <option value="11">11 Month</option>
                      <option value="12">12 Month</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputAddress2" className="form-label">
                      Add Follow Up
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder=""
                      {...formik.getFieldProps("followUp")}
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
                      {...formik.getFieldProps("agentName")}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="Phone No Used"
                      {...formik.getFieldProps("agentPhoneNo")}
                    />
                  </div>
                  <div className="col-12 my-2">
                    <button type="submit" className="btn d-block ms-auto">
                      Add Agent
                    </button>
                  </div>
                </div>
                <div className="col-12 my-3">
                  <label htmlFor="inputAddress" className="form-label">
                    Agent's Name
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    rows="3"
                    placeholder="Max 50 Agents"
                  ></textarea>
                </div>
                <div className="col-12 my-2">
                  <h3>Define types Of Campaigns</h3>
                  <div className="weekDays-selector campaigns-selector">
                    {campaignTypes.map((campaign, i) => (
                      <button
                        key={campaign.value}
                        type="button"
                        className={`w-100 ${
                          formik.values.campaignTypes.includes(campaign.value)
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          toggleField("campaignTypes", campaign.value, formik)
                        }
                      >
                        {campaign.name}
                      </button>
                    ))}
                  </div>
                  <div className="col-12 my-2">
                    <button type="submit" className="btn d-block ms-auto">
                      Save Configration
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
