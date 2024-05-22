import { ComponentProps } from 'react';

import styles from './button.module.css';
import clsx from 'clsx';

export type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
};

export const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => {
  // let className = clsx(
  //   styles.button,
  //   variant === 'primary' && styles.primary,
  //   variant === 'secondary' && styles.secondary,
  //   variant === 'destructive' && styles.destructive,
  // );
  let classes = clsx(styles.button, styles[variant], className);
  return <button className={classes} {...props} />;
};
