import React, {useState,useEffect} from "react";
import './style.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import axios from "axios";
function App() {
  const [item,setItem]=useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  async function fetchData(){
    const res=await axios.get("/api");
    console.log(res.data)
    setItem(res.data);
  }
  useEffect(() => {
   fetchData();
  }, []);
  console.log(item);
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
        <div className="container">
        <div className="row m-2">
          {
            item 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(      
                 < div key={item.id} className="col-sm-6 col-md-4 v my-2">
              <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                <img className="img" src={val.image} alt="" />
                <h4>{val.title}</h4>
                  <p className="price">${val.price}</p>
                </div>
              </div>
            </div>

                )
              })
          }
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App;
