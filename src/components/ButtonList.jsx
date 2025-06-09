import React from "react";

const ButtonList = () => {
  const lists = [
    "All",
    "Live",
    "Music",
    "Sitcoms",
    "B99",
    "Modern Family",
    "Anime",
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
    <div className="flex max-w-[93%] overflow-x-scroll [&::-webkit-scrollbar]:hidden py-2  space-x-2">
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
