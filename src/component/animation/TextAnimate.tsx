import { m, MotionProps } from 'framer-motion';

//
import { varFade } from './variants';

type Props = MotionProps;

interface TextAnimateProps extends Props {
  text: string;
}
// ----------------------------------------------------------------------

export default function TextAnimate({
  text,
  variants,
  ...other
}: TextAnimateProps) {
  return (
    <m.div className="inline-flex overflow-hidden " {...other}>
      {text.split('').map((letter: any, index: any) => (
        <m.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </m.span>
      ))}
    </m.div>
  );
}
