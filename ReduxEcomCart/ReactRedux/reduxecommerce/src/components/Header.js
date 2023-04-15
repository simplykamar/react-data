import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

function Header() {
  const result = useSelector((state)=>state.cartData)
  console.log(result)
  return (
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">E-comm</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart(<span>{result.length}</span>)</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Header;
