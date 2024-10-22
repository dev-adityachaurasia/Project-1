
const DailyUpdate = ({img,name}) => {
  return (
    <li className="flex w-[55px] justify-center flex-col items-center">
      <img
        src={img}
        alt=""
        className=" h-[55px] rounded-full border-2 p-[1px] border-red-400 border-solid object-cover "
      />
      <p className="text-xs overflow-hidden text-center w-[55px]">
        {name}
      </p>
    </li>
  );
};

export default DailyUpdate;
