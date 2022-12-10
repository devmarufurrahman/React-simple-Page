import React, { Component } from "react";
import img1 from "./cold.jpg";
import img2 from "./shoes.jpg";
import "./section.css";

class Section extends React.Component {
  render() {
    return (
      <div className="pro-section-main">
        <div className="first-section">
          <div className="section">
            <img src={img1} />
            <h2>Soft Drinks</h2>
            <p>
              Soft drinks make a growing contribution to the diet of children
              and adolescents. The quantity of soft drinks consumed, especially
              carbonated soft drinks, increases with age and accounts for the
              largest single food contribution to nonmilk extrinsic sugar intake
              among young people in the UK (Burniat et al., 2002). One
              prospective study has reported a positive association between
              consumption of sugar-sweetened drinks and obesity in 548 children
              age 11 or 12 years over 19 months' follow-up (Ludwig et al.,
              2001). It found that each sugared soft drink the children consumed
              each day inched their BMI up by 0.18 points. If they increased
              their daily soft drink intake, each extra soda made them 60% more
              likely to become obese, regardless of how many sodas they were
              drinking before.
            </p>
          </div>
        </div>
        <div className="second-section">
          <div className="section">
            <img src={img2} />
            <h2>Shoes</h2>
            <p>
              Selling shoes can be a lucrative business. In recent years, the
              shoe market has emerged as a unique and specialized retail
              industry built on style, scarcity, and presentation. If you have a
              knack for tracking down unique footwear and want to turn your
              know-how into a full-fledged business, check out our shoe store
              sample plans. If you’re looking to develop a more modern business
              plan, we recommend you try LivePlan. It contains the same
              templates and information you see here, but with additional
              guidance to help you develop the perfect plan.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
