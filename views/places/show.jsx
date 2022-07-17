const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 classname="inactive">
      No comment yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 🤬' : 'Rave! 😎'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
      <Def>
      <main>
        <h1>{data.place.name}</h1>
        <img src={data.place.pic} alt = {data.place.name}/>
        <h2>Rating</h2>
        <p>Not Rated</p>
        <h2>Comments</h2>
        {comments}
        <p>No comments yet!</p>
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
        <h3> 
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
          <button>Edit</button>
        </a>
        {` `}
        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>

    )
}

module.exports = show
