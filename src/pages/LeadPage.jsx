function LeadPage() {
  return (
    <section className="form-wrapper">
      <div className="container">
        <div className="inner">
          <div className="integration shadow mb-5 bg-body rounded bg-white">
            <form action="">
              <div className="row my-4 gy-2">
                <div className="col-12 text-center mb-4">
                  <h2>Lead Page</h2>
                </div>
                <a href="" className="mb-3 mt-2">
                  https://www.google.com/docs/about/
                </a>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <a className="btn w-100" id="editrow">
                      Edit Campaing In Next Row
                    </a>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="New Campaign Name"
                    />
                  </div>
                </div>
                <div className="col-12 my-2">
                  <button type="submit" className="btn d-block ms-auto">
                    Add Rule
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

export default LeadPage;
