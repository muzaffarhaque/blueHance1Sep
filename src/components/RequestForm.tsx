import { Select } from "antd";
import Image from "next/image";
import React from "react";
import img1 from "../assets/images/service45.jpg";
export default function RequestForm() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="recent-works-us-section about-form-main-frame">
      <h3>Talk to us</h3>
      <p className="large m-0">
        BlueHans offers premium UX/UI design, advanced design training, custom
        AI solutions.
      </p>

      <div className=" recent-work-svg-frame text-center">
        <Image src={img1} className="recent-w-image" alt="image" />
        <div className="send-your-req-form">
          <h6>Send your request</h6>

          <div className="label-frame">
            <p>Name</p>
            <div className="fields-frame">
              <input
                type="text"
                className="input-box"
                placeholder="First Last Name"
              />
            </div>
          </div>

          <div className="label-frame">
            <p>Number</p>
            <div className="fields-frame">
              <Select
                className="select-bluehence-filed"
                defaultValue="+19"
                style={{ width: 120 }}
                allowClear
                options={[{ value: "+19", label: "+19" }]}
                placeholder="+19"
              />
              <input
                type="number"
                placeholder="Type Number"
                className="input-box"
              />
            </div>
          </div>

          <div className="label-frame">
            <p>Email</p>
            <div className="fields-frame">
              <input
                type="email"
                className="input-box"
                placeholder="bluehance@gmail.com"
              />
            </div>
          </div>

          <div className="label-frame">
            <p>Intrested in</p>
            <div className="fields-frame">
              <Select
                className="select-bluehence-filed"
                defaultValue="Select "
                style={{ width: "100%" }}
                allowClear
                options={[{ value: "I dont know", label: "This is not bled" }]}
                placeholder="Select filed"
              />
            </div>
          </div>

          <button className="form-submit">Submit</button>

        </div>
      </div>
    </div>
  );
}
