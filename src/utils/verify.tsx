interface IStatus {
  status: string;
  color: string;
}

export const verifyQuantity = (active: boolean): IStatus => {
  if (active) {
    return {
      status: 'in stock',
      color: '#198754',
    };
  } else {
    return {
      status: 'out stock',
      color: '#c0392b',
    };
  }
};
