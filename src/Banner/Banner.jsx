import React, {Component} from 'react';

class Banner extends Component {
    render () {
        return (
            <div className="inner-banner full-wdth">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-center">
                        <h1>{this.props.bannerName}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;