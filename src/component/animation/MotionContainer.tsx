import { m, MotionProps } from 'framer-motion';
import React from 'react';
// @mui
//
import { varContainer } from './variants';

// ----------------------------------------------------------------------
type IProps = MotionProps;

export interface Props extends IProps {
  animate?: boolean;
  action?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function MotionContainer({
  animate,
  action = false,
  children,
  className,
  ...other
}: Props) {
  if (action) {
    return (
      <m.div
        initial={false}
        animate={animate ? 'animate' : 'exit'}
        variants={varContainer()}
        className={className}
        {...other}
      >
        {children}
      </m.div>
    );
  }

  return (
    <m.div
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      initial="initial"
      variants={varContainer()}
      className={className}
      {...other}
    >
      {children}
    </m.div>
  );
}
