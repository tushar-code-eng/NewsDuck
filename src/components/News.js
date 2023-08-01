import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"



export class News extends Component {
  static defaultProps = {
    category: "",
    language: "en"
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    language: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      pageSize: 10,
      totalResults:0
    }
    document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}-NewsBytes`
  }
  async updateNews(fxnpagesize) {
    this.props.setProgress(10);
    //let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&language=${this.props.language}&category=${this.props.category}&apiKey=49c1df5615224f30ae11578adba12936&page=1&pageSize=${fxnpagesize}`;
    //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&language=${this.props.language}&category=${this.props.category}&apiKey=4e350590dd3f4a289127253f3f75cabe&page=1&pageSize=${fxnpagesize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&language=${this.props.language}&category=${this.props.category}&apiKey=3440c91308e24e68a38d2c3b20bcbdf7&page=1&pageSize=${fxnpagesize}`;
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      pageSize: fxnpagesize,
      totalResults: parsedData.totalResults,
      loading:false
    })
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews(this.state.pageSize);
  }


  fetchMoreData = () => {
    this.updateNews(this.state.pageSize + 10);
  };




  render() {
    return (
     <>
        <h1 className='text-center ' style={{marginTop:'90px'}}>Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row my-3">
            {this.state.articles.map((element => {
              return <div className="col-md-3 my-3" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            }))}
            </div>
            </div>
        </InfiniteScroll>
     
        </>
    )
  }
}

export default News
