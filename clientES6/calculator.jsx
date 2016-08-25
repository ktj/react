class Calculator extends React.Component {
	constructor(props){
		super(props);
		this.state={field1:0,field2:0, result:0};
		this.fieldChanged=this.fieldChanged.bind(this);
	};
	

	render(){
		return <div>
			<p>Num1: 
				<input name="field1" onChange={this.fieldChanged} value={this.state.field1}/> </p>
			<p>Num2: 
				<input name="field2" onChange={this.fieldChanged} value={this.state.field2} /></p>
			<p>Result: {this.state.result}</p>
		</div>
	}
	fieldChanged(event){
		this.state[event.target.name] = event.target.value
		this.state.result = parseInt(this.state.field1) + parseInt(this.state.field2);
		this.setState(this.state);
		if(this.props.onResultChange) {
			this.props.onResultChange(this.state.result);
		}
	}
}