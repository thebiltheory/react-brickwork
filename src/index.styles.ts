import styled from "styled-components";
import { space } from "styled-system";
import isOdd from "./utils/isOdd";
// import isOdd from "./utils/isOdd";

export const Wall = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

export const Brick: any = styled.li`
  ${space}
  display:flex;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  /* flex: 0 0 calc(60%);
  max-width: calc(60%); */

  ${(props: any) => {
    const { rowIndex } = props;

    if (isOdd(rowIndex)) {
      return `
      flex: 0 0 ${100 / 4}%;
      max-width: ${100 / 4}%;
      
      &:nth-child(even) {
        // background: red!important;
        flex: 0 0 ${100 / 2}%;
        max-width: ${100 / 2}%;
      }
      `;
    } else if (!isOdd(rowIndex)) {
      return `
      flex: 0 0 ${100 / 2}%;
      max-width: ${100 / 2}%;
      
      &:nth-child(odd) {
        // background: red!important;
        flex: 0 0 ${100 / 4}%;
        max-width: ${100 / 4}%;
      }
      `;
    }

    return null;
  }}
  /*
  &:nth-child(4n + 1),
  &:nth-child(4n + 4) {
    flex: 0 0 40%;
    max-width: 40%;
  } */

  /* &:nth-child(odd) {
    padding-left: 0;
  }

  &:nth-child(even) {
    padding-right: 0;
  } */

  @media only screen and (max-width: 800px) {
    & {
      flex: 0 0 50%;
      max-width: 50%;
    }

    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  @media only screen and (max-width: 600px) {
    & {
      flex: 1 0 100%;
      max-width: 100%;
      padding-left: 0;
      padding-right: 0;
    }

    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      flex: 1 0 100%;
      max-width: 100%;
    }
  }
`;
