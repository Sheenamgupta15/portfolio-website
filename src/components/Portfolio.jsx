import React from "react";
import chatapp from "../assets/portfolio/chat-app.png";
import healthcare from "../assets/portfolio/healthcare.png";
import livechat from "../assets/portfolio/live-chat.png";
import maps from "../assets/portfolio/maps.png";
import portfolio from "../assets/portfolio/portfolio.png";
import youtube from "../assets/portfolio/youtube.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: healthcare,
      name: "HealthCare Chatbot",

    },
    {
      id: 2,
      src: chatapp,
      name: "Chat Application"
    },
    {
      id: 3,
      src: maps,
      name: "Travel Advisor ",
    },
    {
      id: 4,
      src: portfolio,
      name: "Portfolio Website",
    },
    {
      id: 5,
      src: youtube,
      name: "Youtube Clone",
    },
    {
      id: 6,
      src: livechat,
      name: "Live Chat Functionality",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {name}
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  👩🏽‍💻
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
