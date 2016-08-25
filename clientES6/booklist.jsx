import BookRow from './bookrow';

export default class BookList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			titleFilter:"",
			authorFilter:"",
			sort:"title",
			books:[{id:1,title:"Harry Potter",author:"Rowling",description:"Wizards 'n' stuff"},
			       {id:2,title:"Lord of the rings",author:"Tolkien",description:"Hobbits 'n' stuff"},
			       {id:3,title:"James Bond",author:"Fleming",description:"Guns 'n' stuff"}]
		}
		this.authorFilterChanged=this.authorFilterChanged.bind(this);
		this.titleFilterChanged=this.titleFilterChanged.bind(this);
		this.sortChanged=this.sortChanged.bind(this);
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
		var titleFilter=(book)=>{return book.title.toUpperCase().indexOf(this.state.titleFilter.toUpperCase())};
		var authorFilter=(book)=>{return book.author.toUpperCase().indexOf(this.state.authorFilter.toUpperCase())};
		return <table className="table">
			<thead>
				<tr>
					<th>
						<select onChange={this.sortChanged} value={this.state.sort}>
							<option value="title">Title</option>
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