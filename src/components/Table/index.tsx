import {
  TableContainer,
  THeadContainer,
  TBodyContainer,
  TFootContainer,
  TRContainer,
  THContainer,
  TDContainer,
  ITableContainer,
  ICellContainer,
} from "./Table.style";

export type TScope = "row" | "col";

interface IChildren {
  children: React.ReactNode;
}

export interface ITable extends ITableContainer, IChildren {
  caption: string;
  colgroup?: string[];
}

interface IThead extends IChildren, ICellContainer {
  scope: TScope;
}

interface ITD extends ICellContainer, IChildren {
  colSpan?: number;
  rowSpan?: number;
  cssStyle?: React.CSSProperties;
}

export const Table: React.FC<ITable> = ({
  width = "auto",
  height = "auto",
  caption,
  colgroup = [],
  children,
}) => {
  return (
    <TableContainer width={width} height={height}>
      <caption hidden>{caption}</caption>
      {!!colgroup.length && (
        <colgroup>
          {colgroup.map((val, idx) => (
            <col key={`table-col-${idx}`} width={val} />
          ))}
        </colgroup>
      )}
      {children}
    </TableContainer>
  );
};

export const THead = ({ children }: IChildren) => {
  return <THeadContainer>{children}</THeadContainer>;
};

export const TBody = ({ children }: IChildren) => {
  return <TBodyContainer>{children}</TBodyContainer>;
};

export const TFoot = ({ children }: IChildren) => {
  return <TFootContainer>{children}</TFootContainer>;
};

export const TR = ({ children }: IChildren) => {
  return <TRContainer>{children}</TRContainer>;
};

export const TH = ({ scope, align = "center", children }: IThead) => {
  return (
    <THContainer scope={scope} align={align}>
      {children}
    </THContainer>
  );
};

export const TD = ({
  colSpan,
  rowSpan,
  align = "center",
  children,
  cssStyle,
}: ITD) => {
  return (
    <TDContainer
      colSpan={colSpan}
      rowSpan={rowSpan}
      align={align}
      style={cssStyle}
    >
      {children}
    </TDContainer>
  );
};
