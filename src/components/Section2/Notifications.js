import React from "react";
import bell from "../assets/bell.svg";
function Notification() {
    const Data = [
        { id: "1", text: "Lorem ipsum dolor sit amet, consectetur" },
        { id: "2", text: "Lorem ipsum dolor sit amet, consectetur" },
        { id: "3", text: "Lorem ipsum dolor sit amet, consectetur" },
        { id: "4", text: "Lorem ipsum dolor sit amet, consectetur" },
    ];
    return (
        <div className="m-10">
            <div className=" border border-[#D7D7D7] h-72 w-96 p-7 rounded  flex flex-col">
                <div className="flex flex-row gap-3">
                    <img src={bell} alt="this is notification svg"></img>
                    <p className="text-[21px] font-semibold text-[#59595B]">
                        Notifications
                    </p>
                </div>
                {Data.map((item) => {
                    return (
                        <div className="items-center ">
                            <div className="flex justify-center text-[16px] text-[#59595B] font-normal leading-9">
                                {item.text}
                            </div>
                            <hr></hr>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Notification;
