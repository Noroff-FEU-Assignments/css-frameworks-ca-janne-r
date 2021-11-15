import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";


const PageHeading = styled(Navbar)`
    color: ${(props) => props.theme.primaryColour};
    font-family: Playfair Display;
    font-weight: 600;
    margin-right: 25px;
`;

export default PageHeading;