import React, {Component} from 'react';
import Banner from '../Banner/Banner';
import SimpleReactValidator from 'simple-react-validator';

class MemberArea extends Component {

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            alertType : "",
            message : '',
            alert : ''
        }
    }

    render = () => {
        return (
            <React.Fragment>
                <Banner bannerName="Member Area"/>
            </React.Fragment>
        );
    }
}

export default MemberArea;