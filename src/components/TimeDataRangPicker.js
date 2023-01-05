

const TimeDataRangePicker = () => {
  return (
    <div>
      <div className="flex flex-row  h-[55px] ">
        <input
          type="date"
          className=" border-[2px] border-solid border-gray-300   w-[150px] "
        />
      <div className="flex flex-row border-[2px] w-[300px]">
        <input
          type="time"
          className=" w-[150px]"
        />
        <div className="flex items-center p-2">to</div>
        <input
          type="time"
          className=" w-[150px]"
        />
        </div>
      </div>
    </div>
  );
};

export default TimeDataRangePicker;
