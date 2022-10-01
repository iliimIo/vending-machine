import { ReactElement, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

interface IProps {
  name: string;
  color?: string;
  size?: SizeProp;
}

export default function Icon({ name, color, size }: IProps): ReactElement | null {
  const [isColor, setIsColor] = useState<string>('#6b7280');
  const [isSize, setIsSize] = useState<SizeProp>('xs');

  useEffect(() => {
    if (color) setIsColor(color);
  }, [color]);

  useEffect(() => {
    if (size) setIsSize(size);
  }, [size]);

  switch (name) {
    case 'wineBottle':
      return <FontAwesomeIcon icon={['fas', 'wine-bottle']} size={isSize} color={isColor} />;
    case 'scroll':
      return <FontAwesomeIcon icon={['fas', 'scroll']} size={isSize} color={isColor} />;
    case 'wallet':
      return <FontAwesomeIcon icon={['fas', 'wallet']} size={isSize} color={isColor} />;
    case 'close':
      return <FontAwesomeIcon icon={['fas', 'close']} size={isSize} color={isColor} />;
    default:
      return null;
  }
}
