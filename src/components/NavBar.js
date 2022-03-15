import { Link , NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/tipo/1">Sol</NavLink>
      <NavLink to="/tipo/2">Receta</NavLink>
      <NavLink to="/tipo/3">Lentes de Contacto</NavLink>
      <NavLink to="/CartWidget">carrito</NavLink>
    </nav>
  );
};
  
  export default NavBar;


