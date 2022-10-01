import { ReactElement } from 'react';

interface IProps {
  permalink: string;
  alt: string;
  classed?: string;
}

export default function Image({ permalink, alt, classed }: IProps): ReactElement {
  return <img className={classed} src={permalink} alt={alt} />;
}
