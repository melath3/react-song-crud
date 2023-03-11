import styled from "styled-components";
import children from '../images/children.jpg'


const Container = styled.div`
  height: 180px;
  background-color: #C7D710;
  background-image: url(${children});
  overflow: hidden;
  onject-fit: contain;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
`;

const Header = () => {
  return <Container>Children Music APP </Container>;
};

export default Header;