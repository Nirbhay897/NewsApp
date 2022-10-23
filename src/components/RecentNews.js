import React, { Component } from 'react'

export class RecentNews extends Component {
    render() {
        let { title1, description1, imageUrl1, newsUrl1 } = this.props
        return (
            <div className='box'>
                <div className="dabba">
                    {/* <img src={!imageUrl1 ? "https://cdn.vox-cdn.com/thumbor/ViVQuBhEU09OnEsL4tpNLy5D4zc=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21696755/acastro_200804_1777_dish_0001.0.jpg" : imageUrl1} alt="" /> */}

                    <div className="dabba-body">
                        <h5 className="dabba-title">{title1}</h5>s
                        <p className="dabba-description">{description1}</p>
                        <a href={newsUrl1}></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecentNews
