export default class BookRow extends React.Component {
	constructor(props){
		super(props);
	};
	

	render(){
		return <tr>
			<td>{this.props.book.id}</td>
			<td>{this.props.book.title}</td>
			<td>{this.props.book.author}</td>
			<td>{this.props.book.description}</td>
		</tr>
	}

}