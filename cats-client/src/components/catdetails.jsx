import React, { Component } from "react";

//import { useParams } from "react-router-dom";


class Catdetails extends Component {
    state = {};
    render() {
        // let param = useParams()
        return (
            <React.Fragment>
                <h1>Cat Details </h1>
                <h2>Cat Id:   {this.props.match.params.catId} </h2>
            </React.Fragment>



        );
    }
}
export default Catdetails;