import { useInView } from '../hooks/useInView.js';

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`fade-up ${inView ? 'in-view' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
