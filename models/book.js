var mongoose=require('mongoose');

var bookSchema=mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true

        },
        description:{
            type:String

        },
        genre:{
            type:String,
            required:true

        },
        pages:{
            type:String,
            required:true

        },
        create_date:{
            type:Date,
            default:Date.now
        }
    }
);


var Book=module.exports=mongoose.model('Book',bookSchema);
module.exports.getBooks=function(callback,limit){
    Book.find(callback).limit(limit);
};


module.exports.getBookById=function(id,callback){
    Book.findById(id,callback);
};

module.exports.addBooks=function(book,callback){
    Book.create(book,callback);
};

module.exports.updateBook=function(id,book,options,callback){
    var query={_id:id};
    var update={
  title:book.title,
  author:book.author,
  description:book.description,
  genre:book.genre,
  pages:book.pages


    };
  
      Book.findByIdAndUpdate(query,update,options,callback);
  };


  module.exports.removeBook=function(id,callback){
    var query={_id:id};
    
        Book.remove(query,callback);
    };