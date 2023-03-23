import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ViewImage = (props) => {
  const { imagePath, show = false, setShow } = props;

  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal={show}
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white">
              <div class="relative sm:flex sm:items-start">
                <AiOutlineCloseCircle
                  className="absolute text-5xl text-white hover:text-gray-300 cursor-pointer"
                  style={{ right: 0, top: 0 }}
                  onClick={() => setShow(false)}
                />
                <img
                  src={imagePath}
                  className="hover:scale-125 transition-all duration-500"
                  alt="zoom my"
                />
                {/* <HiMinusCircle  className="absolute text-white text-4xl cursor-pointer hover:text-gray-300" style={{right : 40, bottom : 0}}/>
                            <HiPlusCircle  className="absolute text-white text-4xl cursor-pointer hover:text-gray-300" style={{right : 0, bottom : 0}}/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewImage;
