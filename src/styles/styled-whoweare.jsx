import styled from "styled-components";

export const StyledWhoWeAre = styled.div`
  .container {
    height: 100vh;
    background: #f9f9f9;
    font-size: 24px;
    padding: 25px;
    position: relative;
  }

  .container.small {
    height: auto;
  }

  .content {
    max-width: 960px;
    margin: 0 auto;
    padding: 50px 0;
  }

  .intro {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/img/whoweare-1.jpg") no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
  .main {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/img/image1.jpeg") no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
  .main2 {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/img/image2.jpg") no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
  .main3 {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/img/image3.jpg") no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
  .main-item {
    transition: 0.5s;
  }
  .logo {
    color: #f9f9f9;
    font-size: 2.4rem;
    font-family: "proxima_nova_rgbold", Helvetica, Arial, sans-serif;
    position: absolute;
    top: 30px;
    left: 30px;
    font-weight: bold;
  }

  .logo-img {
    height: 80px;
  }
  .center {
    position: absolute;
    font-family: "proxima_nova_rgbold", Helvetica, Arial, sans-serif;
    top: 50%;
    left: 50%;
    color: #f9f9f9;
    font-size: 6rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    transform: translate(-50%, -50%);
  }
  .goal-list {
    list-style: circle;
  }
  .goal-list li {
    margin-bottom: 10px;
  }
`;
// Nav Drop down
// Give => Donation.
