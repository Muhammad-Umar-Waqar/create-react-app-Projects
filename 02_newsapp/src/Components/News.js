// // import React, { useEffect, useState } from 'react'

// // import NewsItem from './NewsItem'
// // import Spinner from './spinner';
// // import PropTypes from 'prop-types'
// // import InfiniteScroll from "react-infinite-scroll-component";

// // const News = (props)=> {
// // const [articles, setArticles] = useState([])
// // const [loading, setLoading] = useState(true)
// // const [page, setPage] = useState(1)
// // const [totalResults, setTotalResults] = useState(0)
// // // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;



// // const  capitalizeFirstLetter=(string)=>{
// // return string.charAt(0).toUpperCase() + string.slice(1);
// //   }
  


// // const Updatenews = async ()=>{
// //   props.setProgress(10);
// //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2ef83903e6c04587a1f923641fbfc546&page=${page}&pageSize=${props.pageSize}`;
// //   setLoading(true)
// //   let data = await fetch(url);
// //   props.setProgress(30);
// //   let parsedData = await data.json()
// //   // console.log(parsedData);
// //   props.setProgress(100);
// //   setArticles(parsedData.articles)
// //   setTotalResults(parsedData.totalResults)
// //   setLoading(false)

// //   props.setProgress(100);
// // }
// // Updatenews();
// // useEffect(()=>{
// //   Updatenews();
// // }, [])





// //  const HandlePrevClick= async () => {
// //   // console.log("Previous")
// //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2ef83903e6c04587a1f923641fbfc546&page=${page - 1}&pageSize=${props.pageSize}`;
// //   // setState({loading: true})
// //   // let data = await fetch(url)
// //   // let parsedData = await data.json()
// //   // // console.log(parsedData);

// //   // setState({
// //   //   page: page - 1,
// //   //   articles: parsedData.articles,
// //   //   loading: false
// //   // })
// //   setPage(page-1);
// //   Updatenews()

// // }



// //  const  HandleNextClick= async () => {
// //   // console.log("Next")
// //   // if (!(page+1 > Math.ceil(totalResults/props.pageSize))){

// //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2ef83903e6c04587a1f923641fbfc546&page=${page + 1}&pageSize=${props.pageSize}`;
// //   // setState({loading: true})
// //   // let data = await fetch(url)
// //   // let parsedData = await data.json()
// //   // // console.log(parsedData);

// //   // setState({
// //   //   page: page+1,
// //   //   articles: parsedData.articles,
// //   //  loading: false
// //   // })}
// //   setPage(page+1);
// //   Updatenews()

 
// // }

// //  const fetchMoreData = async  () => {
// // setPage(page+1)
// // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2ef83903e6c04587a1f923641fbfc546&page=${page}&pageSize=${props.pageSize}`;

// //   let data = await fetch(url)
// //   let parsedData = await data.json()
// //   setArticles(articles.concat(parsedData.articles))
// //   setTotalResults(parsedData.totalResults)
// // };




// //  return (
// //   <>
// //         <h2 className='d-flex justify-content-center tochangeheight'>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
    
// //        {loading && <Spinner/>}
// //         <InfiniteScroll
// //           dataLength={articles.length}
// //           next={fetchMoreData}
// //           hasMore={articles.length !== totalResults}
// //           loader = {<Spinner/>}
// //         >
// //           <div className="container">
// //           <div className="row">
  
// //   {articles.map((element) => {
// //   if (element) {
// //     return (
// //       <div className="col-md-4 my-1" key={element.url}>
// //         <NewsItem
// //           title={element.title ? element.title : ""}
// //           description={element.description ? element.description : ""}
// //           imageurl={element.urlToImage}
// //           newsURL={element.url}
// //           date={element.publishedAt}
// //           author={element.author}
// //           source={element.source.name}
// //         />
// //       </div>
// //     );
// //   }
// // })}

// //   </div>
// //    </div>
// //   </InfiniteScroll>
// //   </>
   
          
      
// //     )
// //   }


// // News.defaultProps = {
// //   country: 'in',
// //   pageSize: 8,
// //   category : 'general'
  
// // };

// // News.propTypes = {
// //   country: PropTypes.string,
// //   pageSize: PropTypes.number,
// //   category : PropTypes.string
// // };

// // export default News



// // ChatpGPT Fixed Code

import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => { 
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const Updatenews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2ef83903e6c04587a1f923641fbfc546&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    Updatenews();
  }, []);

  // const HandlePrevClick = async () => {
  //   setPage(page - 1);
  // };

  // const HandleNextClick = async () => {
  //   setPage(page + 1);
  // };

  const fetchMoreData = async () => {
    setPage(page+1)
    // You don't need to increment page here; it's already being updated via the HandleNextClick function.
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2ef83903e6c04587a1f923641fbfc546&page=${page+1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h2 className='d-flex justify-content-center tochangeheight' style={{marginTop:'100px'}}>
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h2>

      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              if (element) {
                return (
                  <div className="col-md-4 my-1" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={element.description ? element.description : ""}
                      imageurl={element.urlToImage}
                      newsURL={element.url}
                      date={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
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



// Code With Harry Code

// import React, { useEffect, useState } from 'react'

// import NewsItem from './NewsItem'
// import Spinner from './spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";


// const News = (props)=>{
//     const [articles, setArticles] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [page, setPage] = useState(1)
//     const [totalResults, setTotalResults] = useState(0)
    
//     const capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     } 

//     const updateNews = async ()=> {
//         props.setProgress(10);
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`; 
//         setLoading(true)
//         let data = await fetch(url);
//         props.setProgress(30);
//         let parsedData = await data.json()
//         props.setProgress(70);
//         setArticles(parsedData.articles)
//         setTotalResults(parsedData.totalResults)
//         setLoading(false)
//         props.setProgress(100);
//     }

//     useEffect(() => {
//         document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
//         updateNews(); 
//         // eslint-disable-next-line
//     }, [])


//     const fetchMoreData = async () => {   
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
//         setPage(page+1) 
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         setArticles(articles.concat(parsedData.articles))
//         setTotalResults(parsedData.totalResults)
//       };
      
 
//         return (
//             <>
//                 <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
//                 {loading && <Spinner />}
                
//                 <InfiniteScroll
//                     dataLength={articles.length}
//                     next={fetchMoreData}
//                     hasMore={articles.length !== totalResults}
//                     loader={<Spinner/>}
//                 > 
//                     <div className="container">
                         
//                     <div className="row">
//                         {articles.map((element) => {
//                             return <div className="col-md-4" key={element.url}>
//                                 <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                             </div>
//                         })}
//                     </div>
//                     </div> 
//                 </InfiniteScroll>
//             </>
//         )
    
// }


// News.defaultProps = {
//     country: 'in',
//     pageSize: 8,
//     category: 'general',
// }

// News.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
// }

// export default News