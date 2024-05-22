import { ComponentProps } from 'react';

import styles from './button.module.css';
import clsx from 'clsx';

export type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'medium' | 'small' | 'large';
};

export const Button = ({
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}: ButtonProps) => {
  let classes = clsx(
    'bg-indigo-600 hover:bg-indigo-200',
    styles.button,
    styles[variant],
    styles[size],
    className,
  );
  return <button className={classes} {...props} />;
};
