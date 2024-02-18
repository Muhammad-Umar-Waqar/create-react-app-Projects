import React from 'react'


const NewsItem =(props)=>{

   let {title, description, imageurl, newsURL, date, author, source} = props;
  
    return (
      <div className='my-3'>
        <div className="card" >
        <span className="notify position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
       {!source?"Undefined source":source}
        </span>
    <img className="card-img-top" src={!imageurl ?
       'https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg' : imageurl} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title">{!title?"Undefined Title":title}</h5>
        <p className="card-text">{!description?"Undefined description":description}</p>
        <h6 className="card-title">Author:</h6><p>{ !author?"Undefined Author":author}</p>
        <h6 className="card-title">Published At:</h6><p>{!date?"Undefind Date":new Date (date).toUTCString()}</p>   
        <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
    </div>
    </div>
      </div>
    )

}
export default NewsItem;
