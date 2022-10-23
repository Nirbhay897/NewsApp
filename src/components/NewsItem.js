import React from 'react'

const NewsItem =(props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{ display: ' flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
            <span className="badge rounded-pill bg-danger"> {source}
            </span>
          </div>
          <img src={!imageUrl ? "https://cdn.vox-cdn.com/thumbor/ViVQuBhEU09OnEsL4tpNLy5D4zc=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21696755/acastro_200804_1777_dish_0001.0.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>

            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">{!author ? "unknown" : author} updated at {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
