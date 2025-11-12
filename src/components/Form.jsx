export default function Form({title, setTitle, genre, setGenre, url, setUrl, submit}) {
    return <form action="" className="container" onSubmit={submit}>
        <h2 className="labels my-20">Add a new film</h2>
        <div>
            <label htmlFor="set-title">Title of the film</label>
            <input type="text" id="set-title" value={title} onChange={setTitle}/>
        </div>
        <div>
            <label htmlFor="set-genre">Genre of the film</label>
            <input type="text" id="set-genre" value={genre} onChange={setGenre} />
        </div>
        <div>
            <label htmlFor="set-url">Cover image url</label>
            <input type="text" id="set-url" value={url} onChange={setUrl}/>
        </div>
        <button type="submit">Add the new movie</button>
    </form>
}