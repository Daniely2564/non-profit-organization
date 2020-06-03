import styled from "styled-components";

export const StyledNav = styled.nav`
  .nav-list {
    float: right;
  }
  .nav-item {
    float: left;
    list-style: none;
    padding-right: 20px;
    font-weight: bold;
    font-size: 1.27rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #f9f9f9;
    cursor: pointer;
    transition: opacity 0.5s;
  }
  .nav-item.active {
    opacity: 0.7;
  }
  .nav-item:hover {
    opacity: 0.7;
  }
  .main-item.active {
    opacity: 0.7;
  }
  .hidden-nav-item {
    display: none;
    list-style: none;
  }
  .hidden-nav-item li {
    line-height: 2;
    transition: 0.5s;
  }
  .hidden-nav-item li:hover {
    opacity: 0.5;
  }
  .nav-item:hover > .hidden-nav-item {
    display: block;
    text-align: center;
  }
  .nav-item:hover > .main-item {
    opacity: 0.1;
  }
  .main-item {
    transition: 0.5s;
  }
`;
