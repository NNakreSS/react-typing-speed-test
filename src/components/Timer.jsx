import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { setStatus } from "../redux/slicers/typingSlice";

const Timer = () => {
  const dispatch = useDispatch();
  const { status, counts } = useSelector((state) => state.typing);

  const [timer, setTimer] = useState(60);
  const intervalRef = useRef();

  useEffect(() => {
    if (status === "start") {
      intervalRef.current = setInterval(() => {
        setTimer((time) => --time);
      }, 1000);
    } else if (status === "end") {
      clearInterval(intervalRef.current);
    } else {
      setTimer(60);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [status, dispatch]);

  useEffect(() => {
    if (timer == 0) {
      dispatch(setStatus("end"));
    }
  }, [timer, dispatch]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      id="timer"
      className="bg-gray-600 p-3 h-full rounded-sm text-2xl flex justify-center items-center text-white font-medium"
    >
      {formatTime(timer)}
    </div>
  );
};

export default Timer;
