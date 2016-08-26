export var BookModel = {
	books:[],

	load(cb){
		$.getJSON("/api/books",function(data){
			BookModel.books = data;
			cb();
		});
	},
	get(id, cb){
		$.getJSON("/api/books/"+id,function(data){
			cb(data);
		});
	},
	save(book){
		this.doAjax("api/books/"+book.id,"PUT",function(data){
			console.log(data);
		},function(err){
			console.log(err);
		},book);
	},
	doAjax(url,method,scb,ecb,data) {
		var descr={
		type: method,
		contentType: "application/json; charset=utf-8",
		url: url,
		dataType: "json",
		success: scb,
		error: ecb
		}
		if (data) descr.data=JSON.stringify(data);
		$.ajax(descr);
		}
}