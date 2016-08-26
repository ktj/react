import {BookModel} from './bookmodel';
export default class BookDetail extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			book: {}
		};
		this.receivedBook=this.receivedBook.bind(this);
		this.valueChanged=this.valueChanged.bind(this);
		this.saveBook=this.saveBook.bind(this);
	}

	componentDidMount(){
		BookModel.get(this.props.params.id,this.receivedBook);
	}
	receivedBook(book){
		this.setState({book:book});
	}
	valueChanged(event){
		event.preventDefault();
		this.state.book[event.target.name] = event.target.value;
		this.setState(this.state);
	}
	saveBook(event){
		event.preventDefault();
		BookModel.save(this.state.book);
		this.context.router.goBack();
	}

	render(){
		return <div>
			<p>Bookdetail</p>
				<p>Title <input name="title" onChange={this.valueChanged} value={this.state.book.title || " "}/></p>
				<p>Author <input name="value" onChange={this.valueChanged} value={this.state.book.author || " "}/></p>
				<button onClick={this.saveBook}>Save</button>
		</div>
	}
}
BookDetail.contextTypes = {
	router: React.PropTypes.object,
	history: React.PropTypes.object
}