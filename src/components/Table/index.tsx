import {
  TableContainer,
  THeadContainer,
  TBodyContainer,
  TFootContainer,
  TRContainer,
  THContainer,
  TDContainer,
  ITableContainer,
  ITDContainer,
} from "./Table.style";

export type TScope = "row" | "col";

interface IChilden {
  children: React.ReactNode;
}

export interface ITable extends ITableContainer, IChilden {
  caption: string;
  colgroup?: string[];
}

interface IThead extends IChilden {
  scope: TScope;
}

interface ITD extends ITDContainer, IChilden {
  colSpan?: number;
  rowSpan?: number;
  cssStyle?: React.CSSProperties;
}

export const Table:React.FC<ITable> = ({
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

export const THead = ({ children }: IChilden) => {
  return <THeadContainer>{children}</THeadContainer>;
};

export const TBody = ({ children }: IChilden) => {
  return <TBodyContainer>{children}</TBodyContainer>;
};

export const TFoot = ({ children }: IChilden) => {
  return <TFootContainer>{children}</TFootContainer>;
};

export const TR = ({ children }: IChilden) => {
  return <TRContainer>{children}</TRContainer>;
};

export const TH = ({ scope, children }: IThead) => {
  return <THContainer scope={scope}>{children}</THContainer>;
};

export const TD = ({ colSpan, rowSpan, children, cssStyle }: ITD) => {
  return (
    <TDContainer colSpan={colSpan} rowSpan={rowSpan} style={cssStyle}>
      {children}
    </TDContainer>
  );
};
