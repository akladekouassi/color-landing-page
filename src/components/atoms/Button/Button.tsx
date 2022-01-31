import React from 'react';
import clsx from 'clsx';
import { Button, ButtonProps } from 'react-bootstrap';
import './Button.scss';

interface ButtonComponentProps extends ButtonProps {
  label: string;
  height: number;
  width: number;
  fontSize: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  label,
  className,
  size = 'sm',
  height = 1,
  width = 1,
  fontSize,
  ...props
}): JSX.Element => {
  return (
    <React.Fragment>
      <Button
        variant='none'
        className={clsx(
          className,
          'button-style',
          `button-height-${height}`,
          `button-width-${width}`,
          `font-size-${fontSize}`
        )}
        size={size}
        {...props}
      >
        {label}
      </Button>
    </React.Fragment>
  );
};

export default ButtonComponent;
