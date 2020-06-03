import styled from "styled-components";

export const StyledTableWrapper = styled.div`
  width: 100%;
  .header {
    width: 100%;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 2.4rem;
    margin-bottom: 10px;
  }
  .row {
    display: flex;
    align-items: stretch;
    border: 1px solid #000;
    flex-wrap: wrap;
  }
  .title {
    flex: 2;
    text-align: center;
    align-self: center;
    padding: 10px;
    min-width: 300px;
  }
  .content {
    flex: 4;
    border-left: 1px solid #000;
    min-width: 300px;
  }
  .content ul {
    margin-left: 50px;
  }
`;
