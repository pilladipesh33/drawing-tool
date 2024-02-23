'use client';

import { ReactNode } from 'react';

type ToolbarContainerProps = {
  children: ReactNode;
};
export const ToolbarContainer = ({ children }: ToolbarContainerProps) => {
  //   const [isSelected, setIsSelected] = useState(false);

  return (
    <div className='cursor-pointer h-[36px] w-[36px] hover:bg-[#F57D1F] flex justify-center items-center hover:border hover:rounded-xl hover:text-white'>
      {children}
    </div>
  );
};
