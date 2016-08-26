import BookList from './booklist';
import SimpleMenu from './simplemenu';
export default class BookMain extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render(){
		return <div>
			<h2> Main Books</h2>
			<SimpleMenu />
			{this.props.children || <BookList/>}
		</div>
	}

}

