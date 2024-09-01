import React from "react";
import img1 from "../../../assets/images/service45.jpg";
import img2 from "../../../assets/images/service123.jpg";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle,
  GlobeStand,
  Spinner,
} from "@phosphor-icons/react/dist/ssr";
import Marquee from "@/components/Marquee";
import Blog from "@/components/Blog";
import { Select } from "antd";
import RequestForm from "@/components/RequestForm";

export default function Home() {
  return (
    <section className="home-main-page">
      <div className="hero-section-wrapper">
        <h1 className="large">Pure & mindful elegance</h1>
        <p className="b-e-lg">
          BlueHans offers premium UX/UI design, advanced design training, custom
          AI solutions.{" "}
        </p>
      </div>

      <div className="home-specialties-section">
        <h3>Our Specialties</h3>
        <div className="special-image-frame">
          <Image src={img2} className="spacial-image" alt="image" />
          <div className="special-inside-content">
            <span className="holo-frame">Design Academy</span>
            <h2 className="capitalize text-center bg mb-0 ellipsis-2">
              advamcd your design sikils with experts
            </h2>
            <p className="text-center large bg ellipsis-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsa
              suscipit provident officiis non animi ullam laboriosam! Doloribus
              voluptates iusto, delectus eos explicabo in tenetur ullam animi
              aut, error cumque.
            </p>
            <button className="b-lg primary-btn2 my-30">
              {" "}
              <GlobeStand size={24} /> Button
            </button>
          </div>
        </div>
      </div>

      <div className="about-us-section">
        <h3>About Us</h3>
        <p className="large m-0">
          With over 20 years of experience in the design industry, we have
          established myself as a distinguished professional, renowned for
          crafting some of the most intuitive and user-friendly designs in the
          market.
        </p>
        <div className="about-img-frame">
          <Image src={img1} className="about-image" alt="image" />
          <div className="about-inside-content">
            <p className="b-e-lg bg">
              "When a design is done correctly, consumers are not even aware
              they are using it. They simply accomplish what they set out to do"
            </p>

            <div className="about-author">
              <span className="large bg"> - Pravin Shinde</span>
              <span className="small bg">
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;Design Entrepreneur
              </span>
            </div>
          </div>
        </div>
        <div className="why-us-wrapper">
          <h5>Why us?</h5>
          <ul className="why-us-list">
            <li className=" large">
              <CheckCircle className="icon" size={24} />
              Proven Track Record: With a history of successful projects across
              various industries, we have the expertise to deliver results.
            </li>
            <li className=" large">
              <CheckCircle className="icon" size={24} />
              Proven Track Record: With a history of successful projects across
              various industries, we have the expertise to deliver results.
            </li>
            <li className=" large">
              <CheckCircle className="icon" size={24} />
              Proven Track Record: With a history of successful projects across
              various industries, we have the expertise to deliver results.
            </li>
            <li className=" large">
              <CheckCircle className="icon" size={24} />
              Proven Track Record: With a history of successful projects across
              various industries, we have the expertise to deliver results.
            </li>
          </ul>
          <p className=" large">
            Join us at BlueHans and experience the transformative power of
            exceptional design. Together, we will explore the intricacies of
            design, unravel the complexities of user behaviour, and master the
            latest tools and techniques, ensuring that you are well-prepared to
            succeed in the ever-evolving world of design.
          </p>
        </div>
      </div>

      <div className="recent-works-us-section">
        <h3>Recent works</h3>
        <p className="large m-0">
          These are some of our works, showcasing here just for you to get an
          idea
        </p>
        <div className="recent-work-svg-frame">
          <Image src={img1} className="recent-w-image" alt="image" />
        </div>
      </div>

      {/* <div className="marquee-container">
        <div className="marquee company-card b-e-lg">
          <Spinner size={42} className='icon' />
           Loghorizon
        </div>
        <div className="marquee company-card b-e-lg">
          <Spinner size={42} className='icon' />
           Loghorizon
        </div>
        <div className="marquee company-card b-e-lg">
          <Spinner size={42} className='icon' />
           Loghorizon
        </div>
        <div className="marquee company-card b-e-lg">
          <Spinner size={42} className='icon' />
           Loghorizon
        </div>
        <div className="marquee company-card b-e-lg">
          <Spinner size={42} className='icon' />
           Loghorizon
        </div>
      </div> */}

      <Marquee />

      <div className="feature-works-section">
        <h5>
          <span className="small grey-AEA">01</span> Featured Work
        </h5>

        <div className="feature-works-card-frame">
          {[1, 2, 3, 4].map((ele, i) => {
            return (
              <div key={i} className="feature-card">
                <div className="gui-img">
                  <Image src={img2} width={300} height={400} alt="imge" />
                </div>
                <div className="text-content">
                  <h4>
                    Title of first card{" "}
                    <ArrowUpRight size={28} className="icon" />
                  </h4>
                  <p className="b-18 m-0">Developer</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>


     <Blog/>

    <RequestForm/>

    </section>
  );
}
