function FindCar() {
  return (
    <section className="intro FI-agent find-car">
      <div className="mask d-flex align-items-center h-100">
        <div className="container">
          <div className="row justify-content-center gy-4 pb-5">
            <div className="text-center head">
              <h2>Find Car For your structure</h2>
            </div>
            <div className="col-12">
              <div className="c1-wrapper lead-status row gy-3">
                <div className="col-md-3">
                  <label for="">Brand</label>
                  <select className="brands"></select>
                </div>
                <div className="col-md-3">
                  <div className="option d-inline-block w-100">
                    <label for="">Model</label>
                    <select className="Jeep"></select>
                    <select className="Kia"></select>
                    <select className="Lexus"></select>
                    <select className="Lincoin"></select>
                    <select className="Mazda"></select>
                    <select className="Mercedes"></select>
                    <select className="Mini"></select>
                    <select className="Mitsubishi"></select>
                    <select className="Nissan"></select>
                    <select className="Ram"></select>
                    <select className="Subaru"></select>
                    <select className="Toyota"></select>
                    <select className="Volkswagen"></select>
                    <select className="Volvo"></select>
                  </div>
                </div>
                <div className="col-md-3">
                  <label for="">Driven</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Kilometer"
                  />
                </div>
                <div className="col-md-3">
                  <label for="">Years</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="3.."
                  />
                </div>
                <div className="col-md-3">
                  <label for="">Transmition</label>
                  <select name="" id="">
                    <option value="" selected>
                      Automatic
                    </option>
                    <option value="">Manual</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label for="">Drive</label>
                  <select name="" id="">
                    <option value="" selected>
                      4x4
                    </option>
                    <option value="">2x4</option>
                    <option value="">FWD</option>
                    <option value="">AWD</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label for="">Gasoline</label>
                  <select name="" id="">
                    <option value="" selected>
                      Diesel
                    </option>
                    <option value="" selected>
                      Gas
                    </option>
                    <option value="" selected>
                      Electric
                    </option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label for="">Traget Price</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="1500"
                  />
                </div>
                <div className="col-12">
                  <a href="" className="btn">
                    Search
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="cars lead-status">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th scope="col">Car Image</th>
                  <th scope="col">Car Desc</th>
                  <th scope="col">Add Link</th>
                  <th scope="col">Asking Price</th>
                  <th scope="col">Blackbook Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" style={{ color: "#666666;" }}>
                    <div className="car-image">
                      <img src="images.jpeg" alt="" />
                    </div>
                  </th>
                  <td>
                    <div className="desc w-100">
                      <p className="w-100 text-wrap">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Assumenda quos culpa, consequatur illo recusandae
                        voluptatem. Dignissimos saepe itaque nemo vel ut enim
                        exercitationem modi, illo repellendus tempora voluptas,
                        sint optio?
                      </p>
                    </div>
                  </td>
                  <td>
                    <a href="" className="text-wrap">
                      Lorem ipsum dolor sit amet consectetur.
                    </a>
                  </td>
                  <td>
                    <div className="price">
                      <span>
                        <strong>2500$</strong>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="price">
                      <span>
                        <strong>2500$</strong>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ color: "#666666;" }}>
                    <div className="car-image">
                      <img src="images.jpeg" alt="" />
                    </div>
                  </th>
                  <td>
                    <div className="desc w-100">
                      <p className="w-100 text-wrap">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Assumenda quos culpa, consequatur illo recusandae
                        voluptatem. Dignissimos saepe itaque nemo vel ut enim
                        exercitationem modi, illo repellendus tempora voluptas,
                        sint optio?
                      </p>
                    </div>
                  </td>
                  <td>
                    <a href="" className="text-wrap">
                      Lorem ipsum dolor sit amet consectetur.
                    </a>
                  </td>
                  <td>
                    <div className="price">
                      <span>
                        <strong>2500$</strong>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="price">
                      <span>
                        <strong>2500$</strong>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ color: "#666666;" }}>
                    <div className="car-image">
                      <img src="images.jpeg" alt="" />
                    </div>
                  </th>
                  <td>
                    <div className="desc w-100">
                      <p className="w-100 text-wrap">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Assumenda quos culpa, consequatur illo recusandae
                        voluptatem. Dignissimos saepe itaque nemo vel ut enim
                        exercitationem modi, illo repellendus tempora voluptas,
                        sint optio?
                      </p>
                    </div>
                  </td>
                  <td>
                    <a href="" className="text-wrap">
                      Lorem ipsum dolor sit amet consectetur.
                    </a>
                  </td>
                  <td>
                    <div className="price">
                      <span>
                        <strong>2500$</strong>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="price">
                      <span>
                        <strong>2500$</strong>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Car Fax</h2>
          <div className="car-fax lead-status mt-4 pt-4">
            <div className="head">
              <div className="d-flex align-content-center">
                <div className="serial-no d-flex align-items-center ">
                  <h3>Serial no:</h3>
                  {/* <!-- <h6>578462248</h6> --> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Vin(Serial No)"
                  />
                </div>
                <a href="" className="btn">
                  Verify
                </a>
              </div>
              <div className="d-flex align-content-center">
                <a href="" className="btn">
                  Print
                </a>
                <a href="" className="btn">
                  Download
                </a>
              </div>
            </div>
            <div className="car-fax-wrapper">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos est mollitia cum fuga nemo fugit voluptatem!
                Deleniti perferendis repellendus voluptatum ad optio veritatis,
                cumque quia quis aliquam earum debitis temporibus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindCar;
