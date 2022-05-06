import React, { Component } from "react"

class Cat extends Component {
    state = {};

    render() {
        return (
            <React.Fragment>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={this.props.cat.imageUrl} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.cat.catName}</h5>
                        <p className="card-text">{this.props.cat.birthName}
                            
                            {this.props.description}
                            {" "}
                            {this.props.gender}
                          </p>  
                        <button className="btn btn-primary" onClick={this.props.onLike} >
                            Like - {this.props.cat.likeCount}
                        </button>{" "}
                       <button className="btn btn-danger" onClick={this.props.onDelete} >
                           Delete
                       </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Cat;