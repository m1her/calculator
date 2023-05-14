"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");
  const [equalFlag, setEqualFlag] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  function handleClick(e) {
    const value = e.target.getAttribute("data-value");

    switch (value) {
      case "clear":
        setInput("0");
        setResult("");
        setEqualFlag(false);
        break;
      case "equal":
        try {
          if (
            input === "-" ||
            input === "X" ||
            input === "/" ||
            input === "+" ||
            input === "."
          ) {
            const results = result.slice(0, -1);
            setInput(results.toString());
            setResult(result.slice(0, -1) + "=" + results);
          } else if (equalFlag || result === "") {
          } else {
            const results = eval(result);
            setInput(results.toString());
            setResult(result + "=" + results);
          }
          setEqualFlag(true);
        } catch (error) {
          setInput("Error");
          setTimeout(() => {
            setInput("");
            setResult("");
          }, 1000);
        }
        break;
      case "+": {
        if (input === "+") {
          break;
        } else if (input === "-" || input === "X" || input === "/") {
          setInput("+");
          setResult(result.slice(0, -1) + value);
        } else if (equalFlag) {
          setResult(input + "+");
          setInput("+");
          setEqualFlag(false);
        } else {
          setInput("+");
          setResult(result + value);
          break;
        }
        break;
      }
      case "-": {
        if (input === "-") {
          break;
        } else if (input === "+" || input === "X" || input === "/") {
          setInput("-");
          setResult(result + "-");
        } else if (equalFlag) {
          setResult(input + "-");
          setInput("-");
          setEqualFlag(false);
        } else {
          setInput("-");
          setResult(result + value);
          break;
        }
        break;
      }
      case "/": {
        if (input === "/") {
          break;
        } else if (input === "-" || input === "X" || input === "+") {
          setInput("/");
          setResult(result.slice(0, -1) + value);
        } else if (equalFlag) {
          setResult(input + "/");
          setInput("/");
          setEqualFlag(false);
        } else {
          setInput("/");
          setResult(result + value);
          break;
        }
        break;
      }
      case "X": {
        if (input === "X") {
          break;
        } else if (input === "-" || input === "+" || input === "/") {
          setInput("X");
          setResult(result.slice(0, -1) + value);
        } else if (equalFlag) {
          setResult(input + "*");
          setInput("X");
          setEqualFlag(false);
        } else {
          setInput("X");
          setResult(result + "*");
          break;
        }
        break;
      }

      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0": {
        if (input.length <= 18) {
          if (
            input === "-" ||
            input === "X" ||
            input === "/" ||
            input === "+" ||
            input === "0"
          ) {
            setInput(value);
            setResult(result + value);
          } else if (equalFlag) {
            setInput(value);
            setResult(value);
            setEqualFlag(false);
          } else {
            setInput(input + value);
            setResult(result + value);
          }
        } else {
          setIsDisabled(true);
          let temp = input;
          setInput("DIGIT LIMIT MET");
          setTimeout(() => {
            setInput(temp);
            setIsDisabled(false);
            console.log(input.length);
          }, 1000);
        }
        break;
      }
      case ".": {
        if (input.length <= 18) {
          if (
            input === "-" ||
            input === "X" ||
            input === "/" ||
            input === "+"
          ) {
            setInput("0" + value);
            setResult(result + value);
          } else if (input === "" || equalFlag) {
            setInput("0" + value);
            setResult("0" + value);
            setEqualFlag(false);
          } else if (input.includes(".")) {
          } else {
            setInput(input + value);
            setResult(result + value);
          }
        } else {
          setIsDisabled(true);
          let temp = input;
          setInput("DIGIT LIMIT MET");
          setTimeout(() => {
            setInput(temp);
            setIsDisabled(false);
            console.log(input.length);
          }, 1000);
        }
        break;
      }

      default:
        {
          console.log("test");
        }
        break;
    }
  }

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between p-24 bg-[#d0d0d0] font-mono">
      <div className="bg-[#222831] rounded-sm p-2 w-[300px]">
        <div className="bg-[#222831] rounded-sm mb-2 ">
          <div
            className="text-[#e29f3a] w-full h-fit min-h-[28px] break-words text-right"
            id="display"
          >
            <p>{result}</p>
          </div>
          <div
            className="text-white text-xl w-full h-fit min-h-[32px] break-words text-right"
            id="display"
          >
            {input}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[1px] grid-rows-[60px,60px,60px,60px,60px]">
          <button
            id="clear"
            className="bg-[#0070b5] text-white font-bold rounded-sm py-2 px-4 col-span-2"
            onClick={handleClick}
            data-value="clear"
          >
            AC
          </button>
          <button
            id="divide"
            className="bg-[#535962] text-white font-bold rounded-sm py-2 px-4"
            onClick={handleClick}
            data-value="/"
            disabled={isDisabled}
          >
            /
          </button>
          <button
            id="multiply"
            className="bg-[#535962] text-white font-bold rounded-sm py-2 px-4"
            onClick={handleClick}
            data-value="X"
            disabled={isDisabled}
          >
            x
          </button>
          <button
            id="seven"
            className="bg-[#393E46] text-white font-bold rounded-sm py-2 px-4"
            onClick={handleClick}
            data-value="7"
            disabled={isDisabled}
          >
            7
          </button>
          <button
            id="eight"
            className="bg-[#393E46] text-white font-bold rounded-sm py-2 px-4"
            onClick={handleClick}
            data-value="8"
            disabled={isDisabled}
          >
            8
          </button>
          <button
            id="nine"
            className="bg-[#393E46] text-white font-bold rounded-sm py-2 px-4"
            onClick={handleClick}
            data-value="9"
            disabled={isDisabled}
          >
            9
          </button>
          <button
            id="subtract"
            className="bg-[#535962] text-white font-bold rounded-sm py-2 px-4"
            onClick={handleClick}
            data-value="-"
            disabled={isDisabled}
          >
            -
          </button>
          <button
            id="four"
            className="bg-[#393E46] text-white font-bold rounded-sm py-2 px-4"
            onClick={handleClick}
            data-value="4"
            disabled={isDisabled}
          >
            4
          </button>
          <button
            id="five"
            className="bg-[#393E46] text-white font-bold rounded-sm py-2 px-4"
            onClick={handleClick}
            data-value="5"
            disabled={isDisabled}
          >
            5
          </button>
          <button
            id="six"
            className="bg-[#393E46] text-white font-bold rounded-sm py-2 px-4"
            onClick={handleClick}
            data-value="6"
            disabled={isDisabled}
          >
            6
          </button>
          <button
            id="add"
            className="bg-[#535962] text-white font-bold rounded-sm py-2 px-4"
            onClick={handleClick}
            data-value="+"
            disabled={isDisabled}
          >
            +
          </button>
          <button
            id="one"
            className="bg-[#393E46] text-white font-bold rounded-sm py-2 px-4"
            onClick={handleClick}
            data-value="1"
            disabled={isDisabled}
          >
            1
          </button>
          <button
            id="two"
            className="bg-[#393E46] text-white font-bold rounded-sm py-2 px-4"
            onClick={handleClick}
            data-value="2"
            disabled={isDisabled}
          >
            2
          </button>
          <button
            id="three"
            className="bg-[#393E46] text-white font-bold rounded-sm py-2 px-4"
            onClick={handleClick}
            data-value="3"
            disabled={isDisabled}
          >
            3
          </button>
          <button
            id="equals"
            className="bg-[#00ADB5] text-white font-bold rounded-sm py-2 px-4 row-span-2"
            onClick={handleClick}
            data-value="equal"
            disabled={isDisabled}
          >
            =
          </button>
          <button
            id="zero"
            className="bg-[#393E46] text-white font-bold rounded-sm py-2 px-4 col-span-2"
            onClick={handleClick}
            data-value="0"
            disabled={isDisabled}
          >
            0
          </button>
          <button
            id="decimal"
            className="bg-[#393E46] text-white font-bold rounded-sm py-2 px-4"
            onClick={handleClick}
            data-value="."
            disabled={isDisabled}
          >
            .
          </button>
        </div>
      </div>
      <p className="font-mono font-medium mt-7">
        Coded by{" "}
        <span className="font-mono font-medium text-[#00ADB5]">m1her</span>
      </p>
    </main>
  );
}
