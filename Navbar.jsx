import './Navbar.css'
const Navbar = () =>{
  return(
    <div className="nav">
        <div className='nav-logo'>Car-Rent</div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>Your Car</li>
            <li>About us</li>
            <li className='nav-contact'>Contact</li>
        </ul>
    </div>
  )
}
  
export default Navbar
  