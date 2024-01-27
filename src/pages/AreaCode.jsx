import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

function AreaCode() {
  const formik = useFormik({
    initialValues: {
      country: "",
      province: "Test",
      city: "Test",
      areaCode: "Test",
      phoneNo: "Test",
      numberName: "",
      number: "",
      activeNo: "",
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
                  <h2>Area Code Number Buying</h2>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputPassword4" className="form-label">
                    Country
                  </label>
                  <select
                    id="inputState"
                    className="form-select"
                    {...formik.getFieldProps("country")}
                  >
                    <option value="Test">Test</option>
                    <option value="1">Others 1</option>
                    <option value="2">Others 2</option>
                    <option value="3">Others 3</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputPassword4" className="form-label">
                    Province
                  </label>
                  <select
                    id="inputState"
                    className="form-select"
                    {...formik.getFieldProps("province")}
                  >
                    <option value="Test">Test</option>
                    <option value="1">Others 1</option>
                    <option value="2">Others 2</option>
                    <option value="3">Others 3</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputPassword4" className="form-label">
                    City
                  </label>
                  <select
                    id="inputState"
                    className="form-select"
                    {...formik.getFieldProps("city")}
                  >
                    <option value="Test">Test</option>
                    <option value="1">Others 1</option>
                    <option value="2">Others 2</option>
                    <option value="3">Others 3</option>
                  </select>
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
                    <option value="Test">Test</option>
                    <option value="1">Others 1</option>
                    <option value="2">Others 2</option>
                    <option value="3">Others 3</option>
                  </select>
                </div>
                <div className="col-md-8">
                  <label htmlFor="inputPassword4" className="form-label">
                    Phone Numbers
                  </label>
                  <select
                    id="inputState"
                    className="form-select"
                    {...formik.getFieldProps("phoneNo")}
                  >
                    <option value="Test">Test</option>
                    <option value="1">Others 1</option>
                    <option value="2">Others 2</option>
                    <option value="3">Others 3</option>
                  </select>
                </div>
                <div className="col-12 my-2">
                  <button type="submit" className="btn d-block ms-auto">
                    Buy Number
                  </button>
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Name To Number"
                    {...formik.getFieldProps("numberName")}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="68748758478"
                    {...formik.getFieldProps("number")}
                  />
                </div>
                <div className="col-12 my-3">
                  <label htmlFor="inputAddress" className="form-label">
                    Active Number
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    rows="3"
                    placeholder="6647/848795, 489795468768, 654897984158"
                    {...formik.getFieldProps("activeNo")}
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AreaCode;
