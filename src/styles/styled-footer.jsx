import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #201e1e;
  padding: 80px 0 110px 0;
  .container {
    max-width: 960px;
    margin: 0 auto;
    color: #fff;
    display: flex;
  }
  .box {
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
  .svg-group {
    flex: 1;
    text-align: center;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
  .svg-wrapper {
    background-color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    position: relative;
    margin: 0px 8px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      opacity: 0.7;
    }
  }
  .svg-wrapper svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
