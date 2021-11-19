import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ShareIcons from "./ShareIcons";

function ContentTabs() {
  return (
    <Tabs defaultActiveKey="first" id="uncontrolled-tab-example">
      <Tab eventKey="first" title="First">
        <img
          className="d-block tab--img"
          src="images/tab/tab-1.jpg"
          alt="First slide"
        />
        <div className="tab--info">
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
          <ShareIcons />
        </div>
      </Tab>
      <Tab eventKey="second" title="Second">
        <img
          className="d-block tab--img"
          src="images/tab/tab-2.jpg"
          alt="First slide"
        />
        <div className="tab--info">
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
          <ShareIcons />
        </div>
      </Tab>
      <Tab eventKey="third" title="Third">
        <img
          className="d-block tab--img"
          src="images/tab/tab-3.jpg"
          alt="First slide"
        />
        <div className="tab--info">
          Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
          <ShareIcons />
        </div>
      </Tab>
    </Tabs>
  );
}

export default ContentTabs;