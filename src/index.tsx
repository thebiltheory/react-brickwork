import * as React from "react";

import { Wall, Brick } from "./index.styles";
import "./styles.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import chunk from "./utils/chunk";
import isOdd from "./utils/isOdd";

export type Props = { text: string };

const BrickWork = ({ children, gap, itemsPerRow }: any) => {
  const rows = chunk(children, 3);

  const oddLayout = (index:number) => {
    if (isOdd(index)) {
      
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Wall>
        {rows.map((row: any, rowIndex: number) => {
          return React.Children.map(row, (child: any) => (
            <Brick rowIndex={rowIndex}layout={itemsPerRow} p={gap}>
              {child}
            </Brick>
          ));
        })}
      </Wall>
    </ThemeProvider>
  );
};

export default BrickWork;
