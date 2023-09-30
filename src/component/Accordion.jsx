import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );


    return (
      <div key={item.id}>
        <div
          className={ `${isExpanded ? "bg-primary-100 text-white shadow-lg shadow-primary-100/50": " bg-gray-50/30  border-b "} flex justify-between p-4 items-center cursor-pointer` }
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5 text-sm font-pop text-secondary-400  md:w-10/12">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded shadow">{renderedItems}</div>;
}

export default Accordion;
