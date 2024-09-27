import { IListStyle, ListContainer, ListItem } from "./List.style";

interface IListRowProps<T> {
  index?: number;
  value?: T;
  onClick?: (state: T) => void;
}

export interface IList<T> extends IListStyle, IListRowProps<T> {
  data: T[];
  children:
    | React.ReactNode
    | ((
        props: IListRowProps<T>
      ) => React.ReactElement<any, string | React.JSXElementConstructor<any>>);
}

export function List<T>({
  align = "vertical",
  gap = "24px",
  data,
  children,
}: IList<T>) {
  return (
    <ListContainer align={align}>
      {typeof children === "function"
        ? data.map((val, idx) => (
            <ListItem key={`list-row-${idx}`} align={align} gap={gap}>
              {children({
                index: idx + 1,
                value: val,
              })}
            </ListItem>
          ))
        : children}
    </ListContainer>
  );
}

export default List;
