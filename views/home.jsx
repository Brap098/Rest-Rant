const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
        <main>
    <h1>Todos</h1>
    <div>
      <img src="public\images\thomas-bormans-pcpsVsyFp_s-unsplash.jpg" alt="Todo list" />
      <div>
      Photo by <a href="https://unsplash.com/@thomasbormans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Thomas Bormans</a> on <a href="https://unsplash.com/s/photos/list?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
      </div>
      <div>
        Welcom to a new list site for all lists, reminders, and ETC.
      </div>
    </div>
    <a href="/todos">
        <button className="btn-primary">Todo Page</button>
    </a>
</main>


        </Def>
    )
}
module.exports = home

