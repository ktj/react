export default class BookRow extends React.Component {
	constructor(props){
		super(props);
	};
	

	render(){
		var Link=ReactRouter.Link;
		return <tr>

			<td><Link to={`/books/${this.props.book.id}`}>{this.props.book.id}</Link></td>
			<td>{this.props.book.title}</td>
			<td>{this.props.book.author}</td>
			<td>{this.props.book.description}</td>
		</tr>
	}

}
