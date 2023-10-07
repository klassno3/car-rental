import React, { useEffect } from 'react';

const Modal = ({ onClose, children, actionBar }) => {
  useEffect(() => {
    document.body.classList.add("overflow");

    return () => {
      document.body.classList.remove("overflow");
    };
  }, [] );
   useEffect(() => {
    // Disable scroll bar for the whole page
    document.body.style.overflow = 'hidden';

    return () => {
      // Enable scroll bar for the whole page when the modal is closed
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
   <div>
      <div onClick={onClose} className="z-50 fixed overflow-scroll bg-black/70 top-0 left-0 right-0 bottom-0"></div>
      <div className="fixed z-50 w-[90vw] h-[100vw] md:w-[60vw] md:h-[80vh] top-[50%] -translate-x-1/2 -translate-y-1/2 right-1/2 bottom-1/2 left-1/2 bg-white p-6 lg:p-12 overflow-y-auto">
        <div className="">{children}</div>
        {actionBar}
      </div>
    </div>
  );
};

export default Modal;