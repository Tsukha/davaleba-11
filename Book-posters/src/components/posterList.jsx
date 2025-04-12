import React from "react";
import Poster from "../components/poster";

const data = [
  {
    id: 1,
    title: "Arch of Triumph",
    summary:
      "Arch of Triumph weaves a compelling narrative around Ravic, a German political refugee navigating life in Paris before World War II. He lives in precarious circumstances, always under the shadow of potential deportation, yet finds solace in his work and relationships.",
    characters: ["Ravic", "Joan Madou", "Boris Morosov", "Ivon Haake"],
    url: "https://files.structurae.net/files/photos/wikipedia/arc-de-triomphe-4-paris-december-2012.jpg",
  },
  {
    id: 2,
    title: "A Time to Love and a Time to Die",
    summary:
      "Retreating from the Russian front German soldier Ernst Graeber is shocked to learn that his parents are among the thousands left dead or missing by the Allied bombing raids. Then he falls for the beautiful Elizabeth Kruse and the two attempt to begin a romance amidst the devastation and despair of the war.",
    characters: ["Ernst Graeber", "Elizabeth Kruse"],
    url: "https://i.pinimg.com/736x/27/c7/b7/27c7b78fe298248884afc6711067256a.jpg",
  },
  {
    id: 3,
    title: "Three Comrades",
    summary:
      "On the outskirts of a large German city, three young men are earning a thin and precarious living. Fully armed young storm troopers swagger in the streets. Restlessness, poverty, and violence are everywhere. For these three, friendship is the only refuge from the chaos around them.",
    characters: [
      "Erich Lohkamp",
      "Patricia Hollmann",
      "Otto Koster",
      "Gottfried Lenz",
    ],
    url: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/8b858821-0a7b-4c8a-801f-82088d66d40d/b224ea30-87b9-4c0d-89ad-4adb79534db8.png",
  },
];

const posterList = () => {
  function print(title, characters) {
    console.log(title);
    console.log(characters);
  }
  return (
    <div className="poster-list">
      {data.map((poster) => (
        <Poster
          key={poster.id}
          title={poster.title}
          summary={poster.summary}
          characters={poster.characters}
          image={poster.url}
          print={print}
        />
      ))}
    </div>
  );
};

export default posterList;
