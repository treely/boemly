import { useEffect, useState } from 'react';

interface ForceClientSideRenderProps {
  children: React.JSX.Element;
}

export const ForceClientSideRender: React.FC<ForceClientSideRenderProps> = ({
  children,
}: ForceClientSideRenderProps) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRender(true);
    }
  }, []);

  if (render) return children;
  return null;
};
