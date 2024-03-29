import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-background">
      <div className='home-container'>
        <div className='home-heading-container'>
          <h1 className='home-heading'>SQLbuddy - Mastering Queries{<br />}</h1>
          <h2 className='blue'>
            Crunch Your SQL Queries Faster Than You Have Before. Writing Queries
            Has Never Felt Better.
          </h2>
          <Link to='/editor'>
            <button className="rounded-button">
              Start Queries !!
            </button>
          </Link>
        </div>
      </div>
      <footer className='footer'>
        <p>
          Developed by Nandan Kumar
        </p>
      </footer>
    </div>
  );
};

export default Home;
