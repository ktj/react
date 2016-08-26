export default class Authors extends React.Component{
	constructor(props,context){
		super(props,context)
		this.goBack=this.goBack.bind(this);
	}
	render(){
		return <div>
		<p>Authors</p>
		<button onClick={this.goBack}>Back</button>
		</div>
	}
	goBack(event){
		event.preventDefault();
		this.context.router.goBack();
	}
}
Authors.contextTypes = {
	router: React.PropTypes.object,
	history: React.PropTypes.object
}