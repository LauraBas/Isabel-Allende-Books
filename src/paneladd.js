import React from "react";

class PanelAdd extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            image:'',
            rating: 1
        };
    }
    onChangeTitle = (e) => {
        this.setState({title: e.target.value});
    }
    onChangeImage = (e) => {
        this.setState({title: e.target.value});
    }
    onChangeRating = (e) => {
        const rating = parseInt(e.target.value);
        this.setState({title: rating});
    }
    onSubmit = (e) => {
        e.preventDefault();
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;

        this.props.onadd({title: title, image: image, rating: rating});
        this.props.oncancel(e);
    }

    render() {
        return (
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label>Book Title</label><br/>
                            <input onChange={this.onChangeTitle.title}type="text" name="title" className="input"/>
                        </p>

                        <p>
                            <label>Image Name</label><br/>
                            <input onChange={this.onChangeImage.title}type="text" name="image" className="input"/>
                        </p>

                        <p>
                            <label>Calification</label><br/>
                            <select onChange={this.onChangeRating}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Registrar libro"/>
                        <button onClick={this.props.oncancel} className="button btn-normal">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }

}


export default PanelAdd