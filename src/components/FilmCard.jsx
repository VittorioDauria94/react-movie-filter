export default function FilmCard({ title, src, genre }) {
  return (
    <div className="container col-25">
      <img className="cover-img" src={src} alt={`Cover image of ${title}`} />
      <h4>{title}</h4>
      <span>{`Genre: ${genre}`}</span>
    </div>
  );
}
