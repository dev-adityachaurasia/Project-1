const ProfileCard = ({ img, name, onFollow }) => (
  <div className="flex justify-between items-center w-[80%]">
    <div className="flex gap-2 items-center">
      <img
        src={img}
        alt={name}
        className="h-[50px] rounded-full border-2 p-[1px] border-red-400 object-cover"
      />
      <div className="flex flex-col">
        <p>{name}</p>
        <p className="text-xs">{name}</p>
      </div>
    </div>
    <button onClick={onFollow} className="font-bold">
    </button>
  </div>
);

export default ProfileCard;
