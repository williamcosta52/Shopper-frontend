import { styled } from 'styled-components';
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #51d093;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .title {
    margin-right: 665px;
    margin-bottom: 20px;
  }
  header {
    width: 100%;
    height: 120px;
    background: #0b0000;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    h1 {
      color: #fff;
      font-family: Imperial Script;
      font-size: 90px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
export const Products = styled.div`
  width: 1150px;
  height: 648px;
  display: flex;
  background-color: #000;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: absolute;
  top: 25%;
  p {
    margin-left: 100px;
    color: ${(props) => (props.buttonText === 'VALIDAR' ? 'red' : 'green')};
    font-weight: bold;
  }
  div {
    border-radius: 5px;
    background: #d9d9d9;
    width: 95%;
    height: 95%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    div {
      display: flex;
      background-color: black;
      width: 696px;
      height: 126px;
      border-radius: 5px;
      margin-left: 100px;
      h3 {
        color: white;
        letter-spacing: 1px;
        margin-bottom: auto;
        margin-left: 5px;
        margin-top: 5px;
      }
    }
    h1 {
      color: #000;
      text-align: center;
      font-family: Inter;
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
export const InfosButtons = styled.article`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 200px;
  align-items: flex-start;
  justify-content: center;
  margin-left: 100px;
  h2 {
    margin-bottom: 10px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${(props) => (props.disabledButton ? 'gray' : 'green')};
    flex-direction: column;
    justify-content: center;
    color: #050000;
    text-align: center;
    font-family: Inter;
    font-style: normal;
    line-height: normal;
    cursor: pointer;
    width: 150px;
    height: 32px;
    font-size: 20px;
    font-weight: 400;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .secondButton {
    display: flex;
    border: none;
    justify-content: center;
    text-align: center;
    font-style: normal;
    line-height: normal;
    color: black;
    height: 40px;
    border-radius: 5px;
    font-family: Inter;
    width: 100%;
    font-size: 20px;
    font-weight: 400;
  }
`;
