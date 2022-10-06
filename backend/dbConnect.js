const {MongoClient}=require('mongodb');
// const url="mongodb+srv://arvindalawa:19wOySVegsckhG7L@cluster0.utrulca.mongodb.net/SearchBar?retryWrites=true&w=majority";
const url='mongodb://localhost:27017';
const dataBase="Search";
const client=new MongoClient(url);
async function getData(){
    let result =await client.connect();
    db=result.db(dataBase);
    return db.collection('data')
}
module.exports=getData;