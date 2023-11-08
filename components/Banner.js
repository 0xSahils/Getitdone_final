import React from "react";
import { Title, TitleLogo } from "./common/Title";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="We are looking forward to start a new project" />{" "}
            <br />
            <TitleLogo title="Lets take your business to the next level!" />
          </div>
          <div>
            <a href="+7985179107">
              <button className="button-primary">Request a call-back</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
