export var BookModel = {
	books:[],

	load(cb){
		$.getJSON("/api/books",function(data){
			BookModel.books = data;
			cb();
		});
	}
}