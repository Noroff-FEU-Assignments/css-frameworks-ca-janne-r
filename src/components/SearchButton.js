import Button from "react-bootstrap/Button";
import styled from "styled-components";


const SearchButton = styled(Button)`
    background: ${(props) => props.theme.primaryColour};
    color: white;
    border: none;
   
`;

export default SearchButton;