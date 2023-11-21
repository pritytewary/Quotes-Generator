import React, { useState, useEffect } from "react";
import sound_icon from "../assets/sound-png-3.png";
import save_icon from "../assets/save.png";
import twitter_icon from "../assets/twitter.png";

const Randomquote = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "Never give up because you never know if the next try is going to be the one that works.",
    author: "-Mary Kay Ash",
  });

  useEffect(() => {
    async function loadQuotes() {
      const response = await fetch(`https://type.fit/api/quotes`);
      const data = await response.json();
      setQuotes(data);
    }

    loadQuotes();
  }, []);

  const random = () => {
    const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(selectedQuote);
  };

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text}-${
        quote.author.split(",")[0]
      }`
    );
  };

  return (
    <div className="bg-blue-400 h-screen justify-center flex items-center">
      <div className="bg-white rounded-3xl mx-80 pb-20 px-10 w-full max-w-3xl">
        <div className="flex flex-col rounded-3xl items-center justify-between gap-10 py-10">
          <div className="text-black text-7xl font-bold">Quote of the Day</div>
          <div className="text-black text-justify text-3xl font-medium items-center">
            {quote.text}
          </div>
          <div className="flex justify-end w-full">
            <div className="text-black text-2xl">
              {quote.author.split(",")[0]}
            </div>
          </div>
        </div>
        <hr className="mx-20 text-black" />

        <div className="flex mt-10 justify-between">
          <div className="flex gap-3">
            <img className="w-8 h-8" src={sound_icon} alt="" />
            <img className="w-8 h-8" src={save_icon} alt="" />
            <img
              className="w-8 h-8"
              src={twitter_icon}
              onClick={() => {
                twitter();
              }}
              alt=""
            />
          </div>

          <button
            className="ml-96 bg-blue-700 text-white rounded-full px-4 py-2 font-bold"
            onClick={() => {
              random();
            }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Randomquote;
