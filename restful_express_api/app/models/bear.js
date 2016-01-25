/*
 __  __                                            
|  \/  | ___  _ __   __ _  ___   ___  ___  ___   _ 
| |\/| |/ _ \| '_ \ / _` |/ _ \ / _ \/ __|/ _ \ (_)
| |  | | (_) | | | | (_| | (_) | (_) \__ \  __/  _ 
|_|  |_|\___/|_| |_|\__, |\___/ \___/|___/\___| (_)
                    |___/                          
 __  __           _      _     
|  \/  | ___   __| | ___| |___ 
| |\/| |/ _ \ / _` |/ _ \ / __|
| |  | | (_) | (_| |  __/ \__ \
|_|  |_|\___/ \__,_|\___|_|___/
   _   
 _| |_ 
|_   _|
  |_|  
 ____       _                              
/ ___|  ___| |__   ___ _ __ ___   __ _ ___ 
\___ \ / __| '_ \ / _ \ '_ ` _ \ / _` / __|
 ___) | (__| | | |  __/ | | | | | (_| \__ \
|____/ \___|_| |_|\___|_| |_| |_|\__,_|___/

Each Schema in Mongoose maps to a MongoDB Collection (equivalent of a table) and defines the shape of the documents (equivalent of a row) within that collection
Each key in a schema defines a single property (equivalent of a column/attribute) in our documents (rows) and is assigned an associated SchemaType (int, string, Date, etc)
Keys can be assigned nested objects consisting of further key-type pairs

*/                                         


// In this case, mongoose contains the module.exports object that the third-party module 'mongoose' exports
var mongoose = require('mongoose');

// here we are setting our variable Schema equal to the Schema constructor function that is contained inside the module.exports object that we "required" above
var Schema = mongoose.Schema;


// A schema is constructed by passing in an object representation of the schema as the first parameter
var BearSchema = new Schema({
  name: String
});

// To use our schema, we need to covert our BearSchema into a Model that we can work with
// We must first added everything that we want to our schema before we call .model()
// Models are essentially constructors that are created from our schema definitions. An instance of a model represents a single document in our database
// Document creation and retreival is always handled through these models
// Here, we are creating this model and then setting module.exports equal to it. 
// Therefore, whenver we import this file, we are importing our model through which we interact with the database
module.exports = mongoose.model('Bear', BearSchema);
