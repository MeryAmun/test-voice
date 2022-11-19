import React from "react";
//import moment from "moment";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";
import { HomeScreen, GridStackComponent } from "./components";

function App() {
  // // NOTIFY BUTTON TOGGLE
  // const [toggle, setToggle] = useState(true);
  // const classStr = toggle ? "notification__hide" : "notification__show";
  // if (toggle === false) {
  //   setTimeout(() => {
  //     inputRef.current.focus();
  //   }, 10);
  // }

  // // TIME AND DATE
  // const now = new Date();
  // const options = {
  //   day: "numeric",
  //   weekday: "short",
  //   month: "long",
  // };
  // const date = new Intl.DateTimeFormat(navigator.language, options).format(now);
  // const [time, setTime] = useState("");

  // useEffect(() => {
  //   setInterval(() => {
  //     setTime(moment().format("hh:mm"));
  //   }, 100);
  // }, []);

  // // FORM HANDLING
  // const [input, setInput] = useState("");
  // const inputRef = useRef();
  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };

  // const [response, setResponse] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setResponse("Not Implemented");
  // };
  // // HEIGHT CSS BUG FIX
  // useEffect(() => {
  //   const appHeight = () => {
  //     const main = document.querySelector(".main");
  //     main.style.setProperty("height", `${window.innerHeight}px`);
  //   };
  //   window.addEventListener("resize", appHeight);
  //   appHeight();
  // });

  return (
    
    // <div className="main flex items-end justify-center md:justify-end  overflow-hidden">
    //   <div className="text-center pb-10 h-fit text-white md:pr-[5rem] md:pb-[5.5rem] mb-10 md:mb-0">
    //     <div className="w-[100%]">
    //       <h1 className="text-3xl w-full md:mb-[2px] mb-3 font-thin">
    //         Enjoy Freedom
    //       </h1>
    //       {toggle && (
    //         <div className="notify-btn flex items-center">
    //           <button
    //             onClick={() =>
    //               setToggle((prev) => {
    //                 return !prev;
    //               })
    //             }
    //             className="hover:bg-opacity-25 transition-all duration-300 cursor-pointer btn px-2 py-1 bg-opacity-20 bg-black rounded-md block text-center text-lg font-semibold w-3/4 md:w-full mx-auto"
    //           >
    //             Notify Me
    //           </button>
    //           <Link to='/grid'>
    //             Dashboard
    //           </Link>
    //         </div>
    //       )}
    //       <form
    //         className={`${classStr} form transition-all justify-center flex-col`}
    //       >
    //         <input
    //           ref={inputRef}
    //           type="email"
    //           placeholder="Enter your email"
    //           name="email"
    //           value={input}
    //           onChange={handleChange}
    //           className="input-email mb-3 transition-all outline-none block md:w-full w-3/4 mx-auto placeholder:text-white bg-opacity-10 bg-black py-3 px-2 rounded-md"
    //         />

    //         {response && <p>{response}</p>}
    //         <button
    //           onClick={handleSubmit}
    //           type="submit"
    //           className="hover:bg-opacity-25 transition-all duration-300 font-bold block px-3 py-2 rounded-md w-20 mx-auto md:bg-opacity-20 bg-opacity-20 md:bg-black bg-white"
    //         >
    //           Submit
    //         </button>
    //       </form>
    //       <div className="flex flex-col items-center md:items-end">
    //         <h2 className=" text-6xl md:text-7xl ">{time}</h2>
    //         <div className="">{date}</div>
    //         <h3 className="font-sans">
    //           <span className="inline-block translate-x-[8px] md:translate-x-[10px]">
    //             voice
    //           </span>
    //           <span className="notification__customfont inline-block translate-y-[10px] md:text-[1.8rem] text-[1.4rem] text-[#fdd22a]">
    //             Spree
    //           </span>
    //         </h3>
    //       </div>
    //     </div>
    //   </div>
    <div className="App">
      <BrowserRouter>
        <Routes>
  <Route path='/' element={<HomeScreen/>}/>
  <Route path='/grid' element={<GridStackComponent/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
