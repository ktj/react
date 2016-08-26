import BookList from './booklist';
import SimpleMenu from './simplemenu';
var Translations = {
	buttons:{},
	book:{},
	load:function(loc,cb){
		$.getJSON("translations/translations_"+loc+".json",function(data){
			for(var k in data){
				Translations[k]=data[k];
			}
			cb();	
		});
		
	}
};

export default class BookMain extends React.Component {
	constructor(props,context){
		super(props,context);
		this.state = {
		}
		this.gotTranslations=this.gotTranslations.bind(this);
	}
	componentDidMount(){
		Translations.load("fi",this.gotTranslations);
	}

	gotTranslations(){
		this.forceUpdate();
	}

	getChildContext(){
		return {tx:Translations};
	}

	componentWillReceiveProps(po){
    var loc=po.location.query.lang;
    if (!loc) return;
		Translations.load(loc,this.gotTranslations);
  }

	render(){
		var tx=Translations;
		return <div>
			<h2>{tx.title}</h2>
			<SimpleMenu />
			{this.props.children || <BookList/>}
		</div>
	}

}

BookMain.childContextTypes={
  tx: React.PropTypes.object.isRequired
};