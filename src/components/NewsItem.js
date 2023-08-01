import React, { Component } from 'react'
// import './NewsItem.css'
import NoImage from './NoImage.png'

export class NewsItem extends Component {
    render() {
        let {title,description,imgurl,newsurl,author,date,source}= this.props;
        return (
            <div>
                <a href={newsurl} rel="noreferrer" target='_blank' style={{textDecoration:'none'}}>
                 <div className="zoom">
                <div className="card">
                    <img src={imgurl?imgurl:NoImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%' , zIndex:'1'}}>{source}</span>
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-body-secondary">By {!author?"unkown":author} on {new Date(date).toGMTString( )}</small></p>
                            <a href={newsurl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
                  </div>
                </a>
            </div>
        )
    }
}

export default NewsItem
