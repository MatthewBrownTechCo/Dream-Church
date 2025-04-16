export const TextBtn = () => {
  return (
    <div className="text-center">
      <button className="bg-white py-[15px] w-[20%] hover:bg-gray-200">
        <a href="sms:8035675336">Text Us Here</a>
      </button>
    </div>
  );
};

export const TextBtnAlt = () => {
  return (
    <div className="text-center">
      <button className="bg-black py-[15px] w-[250px] hover:bg-gray-700 text-white font-bold text-xl">
        <a href="sms:8035675336">Text Us Here</a>
      </button>
    </div>
  );
};

export default TextBtn;
