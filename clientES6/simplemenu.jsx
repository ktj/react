export default class SimpleMenu extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render(){
		var Link=ReactRouter.Link;
		return <div>
				<h1>Menu</h1>
				<span><Link to="/books">Root</Link> </span>
				<span><Link to="/books/authors">Authors</Link> </span>
				<span><Link to="/calc">Calculator</Link> </span>
				<span><Link to="/?lang=fi">Fi</Link> </span>
				<span><Link to="/?lang=en">En</Link> </span>
			</div>
	}

}

