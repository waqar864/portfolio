import React from 'react'
import TechIcon from './TechIcon'
import { twMerge } from 'tailwind-merge';
const ToolBoxItems = ({items, className, itemsWrapperClassName}: {
    items:{
        title: string;
        iconType: React.ElementType;
    }[];
    className?: string;
    itemsWrapperClassName?: string;
}) => {
  return (
  <div className={twMerge('flex [mask-image:linear-gradient(to_right,transparent,black_20%,black_90%,transparent)]', className)}>
    <div className={twMerge('flex flex-none py-0.5 gap-6 pr-6',itemsWrapperClassName)}> 
              {items.map((item) => (
              <div key={item.title} className="inline-flex py-2 px-3 outline outline-2 outline-white/20 gap-2 items-center">
                <div className="">
                  <TechIcon component={item.iconType} />
                </div>
                <span className="">{item.title}</span>
              </div>
            ))}
         </div>

           </div>
  )
}

export default ToolBoxItems
