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

In order to use our schema defintion, we need to convert our schema 


*/                                         
// app/models/bear.js


var mongoose = require('mongoose');
var Schema = mongoose.Scehma;

var BearSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Bear', BearSchema);
