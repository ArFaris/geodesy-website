import React from 'react';
import Loader from '../Loader';
import Text from 'components/Text';
import s from './Button.module.scss';
import cn from 'classnames';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Состояние загрузки */
  loading?: boolean;
  /** Текст кнопки */
  children: React.ReactNode;
  /** Варианты отображения */
  view: 'dark' | 'light' | 'strong';
};

const Button: React.FC<ButtonProps> = ({
  loading = false,
  children,
  view,
  ...props
}) => {
  return (
    <button
      className={cn(s.button, s[`button-${view}`], props.disabled && s.button_disabled, props.className)}
      disabled={props.disabled || loading}
      {...props}
    >
      {loading && <Loader size="s" className={s.button__loader} />}
      <Text color={view === 'dark' ? 'secondary' : 'primary'} tag="span" view="button">
        {children}
      </Text>
    </button>
  );
};

export default Button;
