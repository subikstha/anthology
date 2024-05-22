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
  // let className = clsx(
  //   styles.button,
  //   variant === 'primary' && styles.primary,
  //   variant === 'secondary' && styles.secondary,
  //   variant === 'destructive' && styles.destructive,
  // );
  let classes = clsx(styles.button, styles[variant], styles[size], className);
  return <button className={classes} {...props} />;
};
