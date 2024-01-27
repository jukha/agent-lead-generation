function AreaCode() {
  return (
    <section className="form-wrapper">
      <div className="container">
        <div className="inner">
          <div className="integration shadow mb-5 bg-body rounded bg-white">
            <form action="">
              <div className="row my-4 gy-2">
                <div className="col-12 text-center mb-4">
                  <h2>Area Code Number Buying</h2>
                </div>
                <div className="col-md-4">
                  <label for="inputPassword4" className="form-label">
                    Country
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>Test</option>
                    <option>Others 1</option>
                    <option>Others 2</option>
                    <option>Others 3</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label for="inputPassword4" className="form-label">
                    Province
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>Test</option>
                    <option>Others 1</option>
                    <option>Others 2</option>
                    <option>Others 3</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label for="inputPassword4" className="form-label">
                    City
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>Test</option>
                    <option>Others 1</option>
                    <option>Others 2</option>
                    <option>Others 3</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label for="inputPassword4" className="form-label">
                    Area Code
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>Test</option>
                    <option>Others 1</option>
                    <option>Others 2</option>
                    <option>Others 3</option>
                  </select>
                </div>
                <div className="col-md-8">
                  <label for="inputPassword4" className="form-label">
                    Phone Numbers
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>Test</option>
                    <option>Others 1</option>
                    <option>Others 2</option>
                    <option>Others 3</option>
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
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="68748758478"
                  />
                </div>
                <div className="col-12 my-3">
                  <label for="inputAddress" className="form-label">
                    Active Number
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    rows="3"
                    placeholder="6647/848795, 489795468768, 654897984158"
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
