import { ButtonProps, Button as NxUiButton } from '@nextui-org/react';
import { FC } from 'react';

interface I_Props extends ButtonProps {
  children?: React.ReactNode;
}

const Button: FC<I_Props> = ({ children, ...rest }) => {
  return <NxUiButton {...rest}>{children}</NxUiButton>;
};

export { Button };
