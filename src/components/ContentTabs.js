import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import image1 from "../images/tab/tab-1.jpg";
import image2 from "../images/tab/tab-2.jpg";
import image3 from "../images/tab/tab-3.jpg";

function ContentTabs() {
  return (
    <Tabs defaultActiveKey="first" id="uncontrolled-tab-example">
      <Tab eventKey="first" title="First">
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.

      </Tab>
      <Tab eventKey="second" title="Second">
        <img
          className="d-block w-100"
          src={image2}
          alt="First slide"
        />
        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.

      </Tab>
      <Tab eventKey="third" title="Third">
        <img
          className="d-block w-100"
          src={image3}
          alt="First slide"
        />
        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.

      </Tab>
    </Tabs>
  );
}

export default ContentTabs;