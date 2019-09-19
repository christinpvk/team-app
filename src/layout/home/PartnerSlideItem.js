import React from 'react';

export default class PartnerSlideItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (

            <div className="partner-block">
                <img src={"../images/partners/" + this.props.item.logo}></img>
            </div>

        );
    }
}