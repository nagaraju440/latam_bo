

const TimeDataRangePicker = () => {
  return (
    <div>
      <div className="flex flex-row  h-[55px] ">
        <input
          type="date"
          className=" border-[2px] border-solid border-gray-300   w-[150px] "
        />
        <input
          type="time"
          className=" border-[2px] border-solid border-gray-300  w-[150px]"
        />
      </div>
    </div>
  );
};

export default TimeDataRangePicker;
