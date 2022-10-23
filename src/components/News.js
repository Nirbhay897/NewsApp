import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner, { spinner } from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// import RecentNews from './RecentNews'


// export class News extends Component {

//   static defaultProps = {
//     country: 'in',
//     pageSize: 8,
//     category: 'general',
//   }

//   static propsTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   }

//   CapitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults:0
//     }
//     Document.title = `${this.CapitalizeFirstLetter(this.props.category)} - NewsHiest`;
//   }

//   async updateNews() {
//     this.props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0260f59336eb485a9fa65975cf5c433e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     this.props.setProgress(30);
//     let parsedData = await data.json()
//     this.props.setProgress(70);
//     console.log(parsedData);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false
//     })
//     this.props.setProgress(100);
//   }

//   async componentDidMount() {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0260f59336eb485a9fa65975cf5c433e&page=1&pageSize=${this.props.pageSize}`;
//     // this.setState({ loading: true });
//     // let data = await fetch(url);
//     // let parsedData = await data.json()
//     // console.log(parsedData);
//     // this.setState({
//     //   articles: parsedData.articles,
//     //   totalResults: parsedData.totalResults,
//     //   loading: false
//     // })
//     this.updateNews();
//   }

//   // handlePvsClick = async () => {
//   //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0260f59336eb485a9fa65975cf5c433e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//   //   // this.setState({ loading: true });
//   //   // let data = await fetch(url);
//   //   // let parsedData = await data.json()
//   //   // console.log(parsedData);
//   //   // this.setState({
//   //   //   page: this.state.page - 1,
//   //   //   articles: parsedData.articles,
//   //   //   loading: false
//   //   // })
//   //   this.setState({ page: this.state.page - 1 })
//   //   this.updateNews();
//   // }

//   // handleNextClick = async () => {
//   //   // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
//   //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0260f59336eb485a9fa65975cf5c433e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//   //   //   this.setState({ loading: true });
//   //   //   let data = await fetch(url);
//   //   //   let parsedData = await data.json()
//   //   //   this.setState({
//   //   //     page: this.state.page + 1,
//   //   //     articles: parsedData.articles,
//   //   //     loading: false
//   //   //   })
//   //   // }
//   //   this.setState({ page: this.state.page + 1 })
//   //   this.updateNews();
//   // }

//   fetchMoreData = async () => {
//    this.setState({page:this.state.page + 1})
//    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0260f59336eb485a9fa65975cf5c433e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//   //  this.setState({ loading: true });
//    let data = await fetch(url);
//    let parsedData = await data.json()
//    console.log(parsedData);
//    this.setState({
//      articles: this.state.articles.concat(parsedData.articles),
//      totalResults: parsedData.totalResults,
//     //  loading: false
//    })
//   };

//   render() {
//     return (
//       <>
//       {/* // <div className="container"> */}
//         <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsHiest - Top {this.CapitalizeFirstLetter(this.props.category)} Headlines</h1>
//         {this.state.loading && <Spinner />}

//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner/>}
//           >
//           <div className="container">
//           <div className="row">
//             {this.state.articles.map((element) => {
//               return <div className="col-md-4" key={element.url}>
//                 <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//               </div>
//             })}
//           </div>
//             </div>
//         </InfiniteScroll>
//         </>
//         // {/* <div className="container d-flex justify-content-between">
//         //   <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePvsClick}>&larr; Previous</button>
//         //   <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//         // </div> */}
//       // {/* </div> */}
//     )
//   }
// }
// export default News



const News =(props) => {
   const [articles, setArticles] = useState([])
   const [loading, setLoading] = useState(true)
   const [page, setPage] = useState(1)
   const [totalResults, setTotalResults] = useState(0)


  const CapitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0260f59336eb485a9fa65975cf5c433e&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    console.log(parsedData);

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading( false)
    props.setProgress(100);
  }

  useEffect( () => {
    updateNews();
  }, [])

  
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0260f59336eb485a9fa65975cf5c433e&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
   let data = await fetch(url);
   let parsedData = await data.json()
   console.log(parsedData);
   setArticles( articles.concat(parsedData.articles))
   setTotalResults( parsedData.totalResults)
  };

 {
    return (
      <>
      {/* // <div className="container"> */}
        <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsHiest - Top {CapitalizeFirstLetter(props.category)} Headlines</h1>
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
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
            </div>
        </InfiniteScroll>
        </>
    )
  }
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
