import React from "react";
import Activities_icon from "../assests/activities_icon.svg";
import Instructor_icon from "../assests/Instructor_icon.svg";
import Allumnos_icon from "../assests/Allumni.svg";
import Star_icon from "../assests/search_icon.svg";
import Blog_icon from "../assests/blog_icon.svg";
import Reports_icon from "../assests/reports_icon.svg";
import Legal_icon from "../assests/legals_icon.svg";
import Administrator_icon from "../assests/hand_icon.svg";
import Config_icon from "../assests/Configuration_icon.svg";
import Down_Arrow from "../assests/down_arrow_icon.svg";

export default function Trail() {
    const sideNavItems = [
        {
            icon: Activities_icon,
            text: "ACTIVIDADES",
            id : "collapseOne"
        },
        {
            icon: Activities_icon,
            text: "ACTIVIDADES",
            id : "collapseTwo"
        },
        {
            icon: Activities_icon,
            text: "ACTIVIDADES",
            id : "collapseT"
        },
        {
            icon: Activities_icon,
            text: "ACTIVIDADES",
            id : "collapseOne"
        },
        
    ];

    return (
        <div>
            <div className="h-full px-6 py-4 overflow-y-scroll scrollbar">
                {sideNavItems.map((item, id) => {
                    return (
                        // <div className="h[51px] pl-6 pr-5 py-4 flex flex-row items-center gap-4">
                        //     <img
                        //         src={item.icon}
                        //         alt="I am activitios icon in side bar"
                        //         className="w-7"
                        //     />
                        //     <p className="text-[16px #7677F4] font-[600] ">
                        //         {item.text}
                        //     </p>
                        //     <img
                        //         src={Down_Arrow}
                        //         alt="i am down arrow in side bar"
                        //         className="h-3 ml-auto"
                        //     />
                        // </div>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item bg-white border border-gray-200">
                                <button
                                    class="
                                accordion-button
                                relative
                                flex
                                items-center
                                w-full
                                py-4
                                px-5
                                text-base text-gray-800 text-left
                                bg-red-200
                                border-0
                                rounded-none
                                transition
                                focus:outline-none
                                "
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target= {`#${id}`}
                                    aria-expanded="true"
                                    aria-controls={id}
                                >
                                    {item.text}
                                </button>
                                <div
                                    id={id}
                                    class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div class="accordion-body py-4 px-5">
                                        <strong>
                                            This is the first item's accordion
                                            body.
                                        </strong>{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item bg-white border border-gray-200">
                    <button
                        class="
                                accordion-button
                                relative
                                flex
                                items-center
                                w-full
                                py-4
                                px-5
                                text-base text-gray-800 text-left
                                bg-red-200
                                border-0
                                rounded-none
                                transition
                                focus:outline-none
                                "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        Accordion Item #1
                    </button>
                    <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body py-4 px-5">
                            <strong>
                                This is the first item's accordion body.
                            </strong>{" "}
                        </div>
                    </div>
                </div>
                <div class="accordion-item bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="headingTwo">
                        <button
                            class="
                                accordion-button
                                collapsed
                                relative
                                flex
                                items-center
                                w-full
                                py-4
                                px-5
                                text-base text-gray-800 text-left
                                bg-white
                                border-0
                                rounded-none
                                transition
                                focus:outline-none
                                "
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body py-4 px-5">
                            <strong>
                                This is the second item's accordion body.
                            </strong>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
