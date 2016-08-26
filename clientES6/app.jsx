import Calculator from './calculator';
import BookMain from './bookmain';
import BookList from './booklist';
import Authors from './authors';
import BookDetail from './bookdetail';

$(document).ready(function() {
	var Router=ReactRouter.Router;
	var Route=ReactRouter.Route;
	var IndexRoute=ReactRouter.IndexRoute;

	ReactDOM.render(
		<Router history={ReactRouter.browserHistory}>
			<Route path="/" component={BookMain}>
				<Route path="books" >
					<IndexRoute component={BookList} />
					<Route path="authors" component={Authors} />
					<Route path=":id" component={BookDetail} />
				</Route>
				<Route path="/calc" component={Calculator} />
			</Route>
		</Router>
	  ,
	  document.getElementById('container')
	);
});