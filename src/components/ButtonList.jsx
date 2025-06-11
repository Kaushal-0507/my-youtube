import React from "react";

const ButtonList = () => {
  const lists = [
    "All",
    "Live",
    "Music",
    "Anime",
    "Sitcoms",
    "Modern Family",
    "B99",
    "One Piece",
    "Movies",
    "James Bond",
    "The Mentalist",
    "White Collar",
    "Breaking Bad",
    "Jake Peralta",
    "Better Call Saul",
  ];
  return (
    <div className="flex max-w-[93%] ml-2 md:ml-0 overflow-x-scroll [&::-webkit-scrollbar]:hidden py-2 space-x-2 align-middle">
      {lists.map((list, index) => (
        <button
          key={index}
          className="flex-shrink-0 cursor-pointer px-4 mx-1.5 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium text-sm whitespace-nowrap"
        >
          {list}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
