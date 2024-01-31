import { useSelector } from "react-redux";

const Conclusion = () => {
  const { successed, failed, pressed } = useSelector(
    (state) => state.typing.counts
  );

  const calculatePercentage = (correct, total) =>
    ((correct / total) * 100).toFixed(2);

  return (
    <div className="m-auto w-64 mt-5 rounded-md shadow-md shadow-black/20">
      <div className="prose bg-sky-300 p-2 rounded-t-md ">
        <h3 className="text-white font-bold text-center">Sonuç</h3>
      </div>
      <div className="bg-gray-100 shadow-inner shadow-black/20 odd:bg-red-600">
        <div className="bg-gray-200 grid grid-cols-1 place-content-center text-center prose gap-2 p-2 border-b-2 border-black">
          <strong className="font-bold text-4xl text-green-700">
            {successed} DKS
          </strong>
          <small className="font-light text-gray-400   ">
            (kelime yazabiliyorsun)
          </small>
        </div>
        <div className="text-center grid grid-cols-2 p-2  border-b-2 border-black">
          <span className="font-medium text-start">Tuş Vuruşu</span>
          <span className="text-end pr-2">
            <small>
              ( <span className="text-green-500"> {pressed.successed}</span> |
              <span className="text-red-500"> {pressed.failed} </span> )
            </small>
            <span className="font-semibold ml-2">
              {pressed.successed + pressed.failed}
            </span>
          </span>
        </div>
        <div className="bg-gray-200 text-center grid grid-cols-2 p-2  border-b-2 border-black">
          <span className="font-medium text-start">Doğruluk</span>
          <span className="font-semibold text-end text-black text-xl pr-2">
            {calculatePercentage(successed, failed + successed)}%
          </span>
        </div>
        <div className="text-center grid grid-cols-2 p-2  border-b-2 border-black">
          <span className="font-medium text-start">Doğru kelime</span>
          <span className="font-semibold text-end text-green-500 text-xl pr-2">
            {successed}
          </span>
        </div>
        <div className="bg-gray-200 text-center grid grid-cols-2 p-2    ">
          <span className="font-medium text-start">Yanlış kelime</span>
          <span className="font-semibold text-end text-red-500 text-xl pr-2">
            {failed}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
