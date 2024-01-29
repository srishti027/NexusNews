import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    document.title = `${props.category} - NexusNews`;
    async function fetchData() {
      props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=899604254f9c484d9eee9e0b16d4704d&pageSize=${props.pageSize}&page=${page}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      
      // Check if parsedData.articles is an array before updating state
      if (Array.isArray(parsedData.articles)) {
        setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
        setTotalResults(parsedData.totalResults);
      } else {
        console.error("parsedData.articles is not an array:", parsedData.articles);
      }
      
      setLoading(false);
      props.setProgress(100);
    }

    fetchData();
  }, [props.country, props.category, props.pageSize, page, props.setProgress]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  return (
    <div className='container my-3'>
      <h1 className='text-center' style={{marginTop: '75px'}}>News Updates on {props.category}</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length} // Use articles.length here
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className='container'>
          <div className='row my-3'>
            {articles.map((element, index) => {
              return (
                <div className='col-md-3 mx-3' key={index}>
                  <NewsItem
                    title={element.title.slice(0, 45)}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
