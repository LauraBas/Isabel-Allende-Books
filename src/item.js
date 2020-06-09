import React from "react";
import './item.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: []
        };
    }

    componentDidMount() {
        this.setState({
            starts: Array(parseInt(this.props.rating)).fill(1)
        });
    }

    render() {
        return (
            <div className="item">
                <div className="image"><img src={'img/' + this.props.image} width="100%"/></div>
                <div className="title">{this.props.title}</div>
                <div className="rating">
                   <p>
                    {this.state.stars.map(x =>
                        <img src='img/star.jpg' width='32'/>
                    )}
                    </p>
                    Calification:
                    <select value={this.props.rating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="actions">
                    <button>Delete</button>
                </div>
            </div>

        );
    }

}

export default Item;