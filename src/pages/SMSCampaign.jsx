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

function SMSCampaign() {
  const formik = useFormik({
    initialValues: {
      campaignName: "",
      areaCode: "Use Same",
      phoneNo: "",
      smsBody: "",
      chooseCampaign: "2",
      newName: "",
      customSchedule: "",
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
                  <h2>SMS CAMPAIGN</h2>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Name SMS Campaign
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    {...formik.getFieldProps("campaignName")}
                  />
                </div>

                <div className="col-md-6">
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
                <div class="col-12 my-3">
                  <label for="inputAddress" class="form-label">
                    SMS Body
                  </label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    rows="8"
                    placeholder="This Will Be A WYSIWYG Editor"
                    {...formik.getFieldProps("smsBody")}
                  ></textarea>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputPassword4" className="form-label">
                    Choose Campaign
                  </label>
                  <select
                    id="inputState"
                    className="form-select"
                    {...formik.getFieldProps("chooseCampaign")}
                  >
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputPassword4" className="form-label">
                    New Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder=""
                    {...formik.getFieldProps("newName")}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputPassword4" className="form-label">
                    Custom Defined Schedule
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder=""
                    {...formik.getFieldProps("customSchedule")}
                  />
                </div>
                <div className="col-md-4 my-2">
                  <select
                    id="inputState"
                    className="form-select"
                    {...formik.getFieldProps("chooseCampaign")}
                  >
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="col-md-4 my-2">
                  <select
                    id="inputState"
                    className="form-select"
                    {...formik.getFieldProps("chooseCampaign")}
                  >
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                <div className="col-md-4 my-2">
                  <select
                    id="inputState"
                    className="form-select"
                    {...formik.getFieldProps("chooseCampaign")}
                  >
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SMSCampaign;
