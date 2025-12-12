import EntryList from "../Components/EntryList";



const Home=()=> {
  return (
    <div>
 
    <div >
        <h1 className="flex justify-center font-bold text-4xl">Diary For All</h1>
        <p className="flex justify-center"> keep all on the go</p>
    </div>
     
      <EntryList/>
  
       
    </div>
  )
};

export default Home;