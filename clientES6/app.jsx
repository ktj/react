import Calculator from './calculator';
import BookList from './booklist';
$(document).ready(function() {
	ReactDOM.render(
	    <BookList/>,
	  document.getElementById('container')
	);
});