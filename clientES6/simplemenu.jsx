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
				<Link to="/books">Root</Link>
				<Link to="/books/authors">Authors</Link>
				<Link to="/calc">Calculator</Link>
			</div>
	}

}

