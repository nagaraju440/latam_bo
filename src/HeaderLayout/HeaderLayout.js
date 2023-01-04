import React from "react";
import Backarrow from "../assets/Icons/HeaderSection-Icon.png";
import PlusIcon from "../assets/Icons/HeaderSection-PlusIcon.png";
function HeaderLayout() {
  return (
    <div className="flex justify-center items-center text-center pt-5 pb-5 shadow-white w-full">
      <div className="flex justify-between w-11/12">
        <div className="flex justify-center items-center text-center">
          <div>
            <img src={Backarrow}></img>
          </div>
          <div className="font-normal text-[28px] text-#59595B] pl-5">
            Cursos
          </div>
        </div>
        <div className="flex justify-center items-center text-center">
          <div className="flex bg-[#7677F4] px-6 py-3 rounded-[5px] justify-center items-center text-center">
            <div>
              <img src={PlusIcon}></img>
            </div>
            <button
              className="text-[16px] text-[#ffffff] pl-2.5 text-white"
              type="button"
              // className=" font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalLong"
            >
              NUEVO CURSO
            </button>
            <div
              className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id="exampleModalLong"
              tabindex="-1"
              aria-labelledby="exampleModalLongLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  hello
                </div>
              </div>
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalLongLabel"
                >
                  Modal title
                </h5>
                <div>Here come's the form for new course registration</div>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderLayout;
