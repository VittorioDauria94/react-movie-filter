export default function Main({ card, options, value, onChange }) {
  return (
    <main>
      <div className="container flex justify-between py-20 ">
        <h2 className="featured-films">Featured films</h2>
        <div className="flex gap-10 align-items-center">
          <label htmlFor="select-genre">Search by genre:</label>
          <select className="select-box" name="genre" id="select-genre" value={value} onChange={onChange}>
            <option value="">All genre</option>
            {options}
          </select>
        </div>
      </div>
      <div className="container flex justify-around py-50">{card}</div>
    </main>
  );
}
