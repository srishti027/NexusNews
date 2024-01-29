import React from 'react';

const NewsItem = (props) => {
  // Destructure the props within the render method
  const { title, description, imageUrl, newsUrl, author, date, source } = props;

  // Provide an alternative image URL
  const alternativeImage =
    'https://staticimg.amarujala.com/assets/images/2022/03/17/big-news_1647470651.jpeg?w=674&dpr=1.0';

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card my-3" style={{ width: '300px', position: 'relative' }}>
            <span className="badge rounded-pill text-bg-danger" style={{ position: 'absolute', top: '5px', right: '5px', zIndex: '1' }}>
              {source}
            </span>
            {imageUrl ? (
              <img src={imageUrl} className="card-img-top" alt="News" />
            ) : (
              <img src={alternativeImage} className="card-img-top" alt="Default" />
            )}
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}
                </small>
              </p>
              <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
