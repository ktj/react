import BookRow from './bookrow';
import {BookModel} from './bookmodel';

export default class BookList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			titleFilter:"",
			authorFilter:"",
			sort:"title",
			books: BookModel.books
		}
		this.authorFilterChanged=this.authorFilterChanged.bind(this);
		this.titleFilterChanged=this.titleFilterChanged.bind(this);
		this.sortChanged=this.sortChanged.bind(this);
		this.receivedBooks=this.receivedBooks.bind(this);
	}

	componentDidMount(){
		BookModel.load(this.receivedBooks);
	}

	receivedBooks(){
		this.setState({books:BookModel.books});
	}

	authorFilterChanged(event){
		this.setState({authorFilter:event.target.value});
	}

	titleFilterChanged(event){
		this.setState({titleFilter:event.target.value});
	}

	sortChanged(event){
		this.setState({sort:event.target.value});	
	}

	render(){
		var tx=this.context.tx;
		var titleFilter=(book)=>{return book.title.toUpperCase().indexOf(this.state.titleFilter.toUpperCase())};
		var authorFilter=(book)=>{return book.author.toUpperCase().indexOf(this.state.authorFilter.toUpperCase())};
		return <table className="table">
			<thead>
				<tr>
					<th>
						<select onChange={this.sortChanged} value={this.state.sort}>
							<option value="title">{tx.book.title}</option>
							<option value="author">Author</option>
						</select>
					</th>
					<th><input onChange={this.titleFilterChanged} value={this.state.titleFilter}/></th>
					<th><input onChange={this.authorFilterChanged} value={this.state.authorFilter}/></th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{
					this.state.books
					.sort((a,b)=>{
						return a[this.state.sort] < b[this.state.sort] ? -1
						: a[this.state.sort] > b[this.state.sort] ? 1
						: 0;
					})
					.map(
						(book)=>{
							if(titleFilter(book)>=0 && authorFilter(book)>=0){
								return <BookRow key={book.id} book={book} />
							}
						}
					)
				}
			</tbody>
		</table>
	}

}

BookList.contextTypes={
	tx:React.PropTypes.object
}