export const renderScreenSize = (index: number): number => {
  return index === 0 ? 3 : index === 1 ? 6 : 3;
};

export const renderClassNames = (index: number): string => {
  return index === 0
    ? 'justify-content-start'
    : index === 1
    ? 'justify-content-center align-self-end'
    : 'justify-content-end';
};
