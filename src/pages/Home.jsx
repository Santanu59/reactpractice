import "./Home.css";

function Home(props){
    return(
      <>
        <div className="h">
            <h1>Welcome to home page , {props.name}</h1>
        </div>
      </>
    );
}
export default Home;