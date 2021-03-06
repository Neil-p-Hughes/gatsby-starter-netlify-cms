import React from "react";
import { Link } from "gatsby";
import logo from "../img/PRHCLogo.min.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title={this.props.siteTitle}>
              <img src={logo} alt={this.props.siteTitle} style={{ width: "150px", "maxHeight": "150px"}} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">

            </div>
            <div className="navbar-end has-text-centered">
            <Link className="navbar-item" to="/about">
                About us
              </Link>
              <Link className="navbar-item" to="/home">
                Home
              </Link>              
              <Link className="navbar-item" to="/products">
                Neighbourhood
              </Link>
              <Link className="navbar-item" to="/blog">
                Photos
              </Link> 
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
