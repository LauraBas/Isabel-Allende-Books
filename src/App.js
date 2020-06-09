import React from 'react';
import Menu from './Menu';
import List from "./List";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {id: 0, rating: 5, title: "La Isla bajo el mar", image: "libro01.jpg"},
                {id: 1, rating: 3, title: "La Hija de la Fortuna", image: "libro02.jpg"},
                {id: 2, rating: 5, title: "De Amor y De Sombra", image: "libro03.jpg"},
                {id: 3, rating: 4, title: "El Bosque de los Pigmeos", image: "libro04.jpg"},
                {id: 4, rating: 4, title: "Cuentos de Eva Luna", image: "libro05.jpg"},
                {id: 5, rating: 4, title: "La Casa de los Espíritus", image: "libro06.jpg"},
                {id: 6, rating: 3, title: "Paula", image: "libro07.jpg"},
                {id: 7, rating: 3, title: "Largo Pétalo de Mar", image: "libro08.jpg"},
                {id: 8, rating: 5, title: "El Amante Japonés", image: "libro09.jpg"},
                {id: 9, rating: 4, title: "El Juego de Ripper", image: "libro10.jpg"},
                {id: 10, rating: 3, title: "Inés del Alma Mia", image: "libro11.jpg"},
                {id: 11, rating: 5, title: "Más allá del Invierno", image: "libro12.jpg"},
                {id: 12, rating: 3, title: "El Reino del Dragòn de Oro", image: "libro13.jpg"},
                {id: 13, rating: 5, title: "Mi país inventado", image: "libro14.jpg"},
            ],
            copyBooks: []
        };
    }
    componentDidMount() {
        this.initBooks();
    }
    onSearch = (query) => {
        if(query === ''){
            this.initBooks();
        } else {
            const temp = [...this.state.books];
            let res = [];
            temp.forEach(item => {
                if(item.title.toLocaleLowerCase().indexOf(query) > -1){
                    res.push(item);
                }
            });
            this.setState({copyBooks: [...res]});
        }
    }
    initBooks = () => {
        this.setState((state,props) => ({
            copyBooks: [...state.books]
        }));
    }
    onAdd = (item) => {
        let temp = [...this.state.books];
        const id = temp[temp.length-1].id ++;
        item['id'] = id;
        temp.push(item);

        this.setState({books:[...temp]});
        this.initBooks();
}

    render() {
        return (
            <div className="app">
                <Menu title="Isabel Allende" onadd={this.onAdd} onsearch={this.onSearch}/>
                <List items={this.state.copyBooks}/>
            </div>
        );
    }

}

export default App;
