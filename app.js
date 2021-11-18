//import
const mongoClient = require("mongodb").MongoClient;

//declaração da função, para assim funcionar uma função assincrona
async function listarBooks(){

//espera por conexão, promessa de conexão
//operação assincrona
const conn = await mongoClient.connect("mongodb://localhost");

//pede para a conexão nos oferecer a database hellomongo
const database = conn.db("hellomongo");

//pede para a database nos entregar a coleção books
const booksCol = database.collection("books");

//espera por conexão, promessa de conexão
//operação assincrona
const booksData = await booksCol.find();

//transforma em array
//operação assincrona
const booksArray = await booksData.toArray();

//mostrar ao usuário em formato tabela
console.table(booksArray);

}

//executar
listarBooks();