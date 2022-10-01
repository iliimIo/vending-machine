import { ReactElement } from 'react';

interface IProps {
  title: string;
  classed?: string;
}

export default function Header({ title, classed }: IProps): ReactElement {
  return <h2 className={'my-2  ' + classed}>{title}</h2>;
}
