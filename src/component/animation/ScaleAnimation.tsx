import { useEffect, ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type scaleType = {
  children: ReactNode;
  className?: string;
  variant?: 'scale' | 'x' | 'y' | undefined;
  vFade?: 'left' | 'right' | 'up' | 'down' | undefined;
  duration?: number | undefined;
};

// const boxVariant = {
//   visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
//   hidden: { opacity: 0, scale: 0 }
// };

export default function ScaleAnimation({
  children,
  className,
  variant,
  vFade,
  duration = 0.5
}: scaleType) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variantFunc = () => {
    if (variant === 'x') {
      const boxVariant = {
        visible: { opacity: 1, x: 0, transition: { duration } },

        hidden: { opacity: 0, x: vFade === 'left' ? '-20%' : '20%' }
      };
      return boxVariant;
    }
    if (variant === 'y') {
      const boxVariant = {
        visible: { opacity: 1, y: 0, transition: { duration } },

        hidden: { opacity: 0, y: vFade === 'down' ? '-20%' : '20%' }
      };
      return boxVariant;
    }
    const boxVariant = {
      visible: { opacity: 1, scale: 1, transition: { duration } },

      hidden: { opacity: 0, scale: 0 }
    };
    return boxVariant;
  };

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
    return () => {
      control.stop();
    };
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={variantFunc()}
      initial="hidden"
      animate={control}
      className={className}
    >
      {children}
    </motion.div>
  );
}
