// TODO
var GroceryList = (props) => (
    <ul>
       {props.list.map(item =>
            <GroceryListItem item={item}/>
        )}
    </ul>
);

class GroceryListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            done: false
          };

    }

    onListItemClick() {
        this.setState({
          done: !this.state.done
        });
    }

    render() {

        var style = {
            textDecoration: this.state.done ? 'line-through' : 'none'
        };

        return (
            <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
        )
    }
};


var list = ['Tomatoes', 'Eggs', 'Milk', 'Chips'];
ReactDOM.render(<GroceryList list={list}/>, document.getElementById("app"));


// var Tomatoes = () => (
//     <li>Tomatoes</li>
// );

// var Eggs = () => (
//     <li>Eggs</li>
// );
