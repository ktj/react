import Calculator from './calculator';
import BookMain from './bookmain';
$(document).ready(function() {
	var Router=ReactRouter.Router;
	var Route=ReactRouter.Route;
	var IndexRoute=ReactRouter.IndexRoute;

	ReactDOM.render(
		<Router history={ReactRouter.hashHistory}>
			<Route path="/" component={BookMain}>
				<Route path="/calc" component={Calculator} />
			</Route>
		</Router>
	  ,
	  document.getElementById('container')
	);
});