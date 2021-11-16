import image1 from "../images/tab/tab-1.jpg";
import image2 from "../images/tab/tab-2.jpg";
import image3 from "../images/tab/tab-3.jpg";


function ContentTabsAccordion(props) {

  const ImgStyle = {
    src: props.src,
  };

  return (
    <div>
      <img
        className="d-block w-100"
        style={ImgStyle}
        alt="First slide"
      />
      <p>Morbi eget efficitur turpis.Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a.Nullam non eleifend justo, a ullamcorper turpis.Cras vehicula pharetra lectus non maximus.Sed condimentum mattis rhoncus.</p>
    </div>
  );

}

function Heading(props) {
  console.log(props);

  const headingStyle = {
    color: props.colour,
    fontSize: props.fontSize + "px",
  };

  return <h2 style={headingStyle}>{props.content}</h2>;
}

export default Heading;

export default ContentTabsAccordion;