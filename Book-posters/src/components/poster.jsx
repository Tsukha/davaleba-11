const poster = ({ image, title, summary, characters, print }) => {
  return (
    <div className="book-card">
      <img src={image} alt={title} className="image" />
      <h2 className="title">{title}</h2>
      <p className="summary">{summary}</p>
      <div className="characters-list">
        Charachters:
        {characters.map((character, i) => (
          <h3 className="character" key={i}>
            {character}
          </h3>
        ))}
      </div>
      <button onClick={() => print(title, characters)} className="print-btn">
        Print
      </button>
    </div>
  );
};

export default poster;
