import React, {Component} from "react";
import {Link} from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div>
                <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
                <Link to="/login" className="btn btn-lg btn-light">Login </Link>
            </div>
        )
    }
}

export default Landing;
