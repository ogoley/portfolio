import React, { Component } from "react";
import styled from "styled-components";
import { GradientTop } from "./Gradient";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <GradientTop></GradientTop>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse order-2 order-lg-0 justify-content-end w-100" id="navbarSupportedContent">
            <ul class="navbar-nav nav-fill w-50">
              <li class="nav-item nav-fill w-100">
                <a class="nav-link nav-fill w-100" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item nav-fill w-100">
                <a class="nav-link " href="/portfolio">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          <a class="navbar-brand mx-auto order-1 order-lg-1 p-0" href="/#">
            <img src="/img/jo.png" height="80" alt="" />
          </a>

          <div class="collapse navbar-collapse order-3 order-lg-2 w-100" id="navbarSupportedContent">
            <ul class="navbar-nav nav-fill w-50">
              <li class="nav-item dropdown nav-fill w-100">
                <a
                  class="nav-link dropdown-toggle"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/">
                    Action
                  </a>
                  <a class="dropdown-item" href="/">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="/">
                    Something else here
                  </a>
                </div>
              </li>
              <li class="nav-item nav-fill w-100">
                <a class="nav-link" href="/Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

// eslint-disable-next-line no-unused-vars
const NavWrapper = styled.nav`
  .nav-link {
    color: var(--mainBlue) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
