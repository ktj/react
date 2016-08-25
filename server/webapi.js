module.exports={
	init:function(app){
		var apiroot="/api/books";
		var bodyParser = require('body-parser');
		app.use(bodyParser.json());	
		var books=[
			{id:1,title:"Odysseia",author:"Homeros",description:"Long way back",price:12.30,published:new Date(40,1,3)},
			{id:2,title:"Hobbit",author:"Tolkien",description:"There and back",price:12.30,published:new Date(40,1,3)},
			{id:3,title:"Two towers",author:"Tolkien",description:"Some balls?",price:12.30,published:new Date(40,1,3)},
			{id:4,title:"Electric piano",author:"Vonnegut",description:"Engineers for-ever",price:12.30,published:new Date(40,1,3)},
			];

		app.get(apiroot, function(req, res) {
			res.json(books);
		});

		app.get(apiroot+'/:id', function(req, res) {
			var id = Number(req.params.id);
			var book;
			for (var i = 0; i < books.length; i++) {
				if (books[i].id === id) {
					book = books[i];
					break;
				}
			}
			if (!book) {
				console.log("not found");
				res.statusCode = 404;	// Not found
				res.send("Item with id " + id + " not found");
			} else {
				console.log("found");
				res.json(book);	// Ok, send it as JSON
			}

		});

		app.delete(apiroot+'/:id', function(req, res) {
			var id = Number(req.params.id);
			for(var i=0;i<books.length;i++){
				if (books[i].id==id){
					books.splice(i,1);
					res.send("Deleted");
					return;
				}
			}
			res.status(404).send("Not found");
		});

		app.put(apiroot+"/:id",function(req,res){
			var id = Number(req.params.id);
			for(var i=0;i<books.length;i++){
				if (books[i].id==id){
					books[i]=req.body;
					res.json(req.body);
					return;
				}
			}
			res.status(404).send("Not found");
		});

		app.post(apiroot,function(req,res){
			console.log(req.body);
			var maxId=1;
			books.forEach(function(bk){if (bk.id>=maxId) maxId=bk.id+1;});
			req.body.id=maxId;
			books.push(req.body);
			res.json(req.body);
		});
		
	}
	
	
}
