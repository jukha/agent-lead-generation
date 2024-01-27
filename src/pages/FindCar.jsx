import { useState } from "react";

function FindCar() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [driven, setDriven] = useState("");
  const [years, setYears] = useState("");
  const [transmition, setTransmition] = useState("");
  const [drive, setDrive] = useState("");
  const [gasoline, setGasonline] = useState("");
  const [targetPrice, setTargetPrice] = useState("");

  const myBrands = [
    "Jeep",
    "Kia",
    "Lexus",
    "Lincoln",
    "Mazda",
    "Mercedes",
    "Mini",
    "Mitsubishi",
    "Nissan",
    "Ram",
    "Subaru",
    "Toyota",
    "Volkswagen",
    "Volvo",
    "tesla",
    "smart",
    "Rolls-Royce",
    "Porsche",
    "McLaren",
    "Mazda",
    "Maserati",
    "Lotus",
    "Lexus",
    "Land Rover",
    "Karma",
    "Jaguar",
    "Infiniti",
    "Hyundai",
    "Honda",
    "Genesis",
    "GMC",
    "Ford",
    "Ferrari",
    "Dodge",
    "Chrysler",
    "Chevrolet",
    "Cadillac",
    "Buick",
    "Bugatti",
    "Bentley",
    "BMW",
    "Audi",
    "Aston Martin",
    "Alfa Romeo",
    "Acura",
  ];

  const models = {
    Jeep: ["Cherokee", "Compass", "Gladiato", "Grand Cherokee", "Renegade"],

    Kia: [
      "Forte",
      "Forte5",
      "Niro",
      "Niro EV",
      "Optima",
      "Rio",
      "Sedona",
      "Sorento",
      "Soul",
      "Soul EV",
      "Sportage",
      "Stinger",
      "Telluride",
    ],

    Lexus: [
      "ES300h",
      "ES350",
      "GS F",
      "GS350",
      "GX460",
      "IS300",
      "IS350",
      "LC500",
      "LC500h",
    ],

    Lincoin: [
      "Aviator",
      "Continental",
      "Corsair",
      "MKZ",
      "Nautilus",
      "Navigator",
    ],

    Mazda: ["3 Sport", "CX-3", "CX-30", "CX-5", "CX-9", "MX-5 Miata"],

    Mercedes: [
      "A220",
      "A250",
      "A35 AMG",
      "AMG GT",
      "AMG GT 53",
      "AMG GT 63",
      "AMG GT 63 S",
      "AMG GT C",
      "AMG GT R",
      "AMG GT R Pro",
      "C300",
      "C43 AMG",
      "C63 AMG",
      "C63 AMG S",
      "CLA250",
      "CLA35 AMG",
      "CLA45 AMG",
      "CLA450",
      "CLA53 AMG",
      "E350",
      "E450",
      "E53 AMG",
      "E63 AMG S",
      "G550",
      "G63 AMG",
      "GLA250",
      "GLB250",
      "GLC300",
      "GLC350e",
      "GLC43 AMG",
      "GLC63 AMG S",
      "GLE350",
      "GLE450",
      "GLE53 AMG",
      "GLS450",
      "GLS580",
      "Maybach S560",
      "Maybach S650",
      "Metris",
      "S450",
      "S560",
      "S560e",
      "S63 AMG",
      "S65 AMG",
      "SL450",
      "SL550",
      "SLC300",
      "SLC43 AMG",
      "Sprinter 1500",
      "Sprinter 2500",
      "Sprinter 3500",
      "Sprinter 3500XD",
    ],

    Mini: ["Cooper", "Cooper Clubman", "Cooper Countryman"],

    Mitsubishi: [
      "Eclipse Cross",
      "Mitsubi",
      "Mirage",
      "Outlander",
      "Outlander PHEV",
      "RVR",
    ],

    Nissan: [
      "370Z",
      "Altima",
      "Armada",
      "GT-R",
      "Kicks",
      "LEAF",
      "Maxima",
      "Murano",
      "NV1500",
      "NV200",
      "NV200",
      "NV2500",
      "NV3500",
      "Pathfinder",
      "Qashqai",
      "Rogue",
      "Sentra",
      "TITAN",
      "TITAN XD",
    ],

    Ram: [
      "1500",
      "1500 Classic",
      "2500",
      "3500",
      "ProMaster 1500",
      "ProMaster 2500",
      "ProMaster 3500",
      "ProMaster City",
    ],

    Subaru: [
      "Ascent",
      "Crosstrek",
      "Forester",
      "Impreza",
      "Legacy",
      "Outback",
      "WRX",
      "WRX STI",
    ],

    Toyota: [
      "4Runner",
      "86",
      "Avalon",
      "C-HR",
      "Camry",
      "Corolla",
      "GR Supra",
      "Highlander",
      "Mirai",
      "Prius",
      "Prius AWD-e",
      "Prius Prime",
      "RAV4",
      "Sequoia",
      "Sienna",
      "Tacoma",
      "Tundra",
      "Yaris",
    ],

    Volkswagen: [
      "Arteon",
      "Atlas Cross Sport",
      "GTI",
      "Golf",
      "Jetta",
      "Passat",
      "Tiguan",
      "e-Golf",
    ],

    Volvo: ["S60", "S90", "V60", "V60 Cross Country", "XC40", "XC60", "XC90"],
  };

  const handleBrandChange = (event) => {
    const selectedBrand = event.target.value;
    setBrand(selectedBrand);

    // Set default model if available for the selected brand
    const defaultModel = models[selectedBrand] && models[selectedBrand][0];
    setModel(defaultModel || "");
  };

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
                  <label htmlFor="">Brand</label>
                  <select
                    id="brand"
                    name="brand"
                    onChange={handleBrandChange}
                    value={brand}
                  >
                    <option value="" label="Select a brand" />
                    {myBrands.map((brandOption, i) => (
                      <option
                        key={i}
                        value={brandOption}
                        label={brandOption}
                      />
                    ))}
                  </select>
                </div>
                <div className="col-md-3">
                  <div className="option d-inline-block w-100">
                    <label htmlFor="">Model</label>
                    <select
                      id="model"
                      name="model"
                      onChange={(event) => setModel(event.target.value)}
                      value={model}
                    >
                      <option value="" label="Select a model" />
                      {models[brand] &&
                        models[brand].map((modelOption, i) => (
                          <option
                            key={i}
                            value={modelOption}
                            label={modelOption}
                          />
                        ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="">Driven</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Kilometer"
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="">Years</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="3.."
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="">Transmition</label>
                  <select name="" id="">
                    <option value="" selected>
                      Automatic
                    </option>
                    <option value="">Manual</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label htmlFor="">Drive</label>
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
                  <label htmlFor="">Gasoline</label>
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
                  <label htmlFor="">Traget Price</label>
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
                  <th scope="row" style={{ color: "#666666" }}>
                    <div className="car-image">
                      <img src="/images.jpeg" alt="" />
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
                  <th scope="row" style={{ color: "#666666" }}>
                    <div className="car-image">
                      <img src="/images.jpeg" alt="" />
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
                  <th scope="row" style={{ color: "#666666" }}>
                    <div className="car-image">
                      <img src="/images.jpeg" alt="" />
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
          <h2 className="text-start text-capitalize">Car Fax</h2>
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
