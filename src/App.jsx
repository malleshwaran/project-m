import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Input } from "./component/Input";
import { Button } from "./component/Button";
import { Icon } from "./component/Icon";
const App = () => {
  const FaceBookBackground =
    "linear-gradient(to right, #0546A0 0%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <Input type='text' placeholder='Email' />
        <Input type='password' placeholder='Password' />
      </InputContainer>
      <ButtonContainer>
        <Button content='Sign Up' />
      </ButtonContainer>
      <LoginWith>OR LoginWith</LoginWith>
      <HorizontalRule></HorizontalRule>
      <IconContainer>
        <Icon color={FaceBookBackground}>
          <FaFacebookF></FaFacebookF>
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram></FaInstagram>
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter></FaTwitter>
        </Icon>
      </IconContainer>
      <ForgetPassWord>Forgot PassWord?</ForgetPassWord>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80vh;
  width: 25vw;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%; ;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  margin: 3rem 0 2rem 0;
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  margin: 1.5rem 0 1rem 0;
  background: linear-gradient(to right, #14163c 0%, #03271b 79%);
  backdrop-filter: blur(25px);
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;
const ForgetPassWord = styled.h4`
  cursor: pointer;
`;
export default App;
