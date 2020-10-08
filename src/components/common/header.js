import React, {Component} from 'react';

class Header extends Component {
  constructor(){
    super()
  }
  render(){
    return(
      <header class="l-header">
  <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="c-nav w-nav">
    <div class="h-container c-nav__inner">
      <div class="c-nav__hamburger-button w-nav-button">
        <img src="images/hamburger.svg" alt="" class="h-svg-icon c-nav__icon--hamburger" />
        <img src="images/times.svg" alt="" class="h-svg-icon c-nav__icon--times" />
      </div>

      <a href="/" aria-current="page" class="c-nav__logo w-nav-brand _w--current">
        <img src={this.props.site.logo} alt={this.props.site.title} class="image" />
      </a>

      <nav role="navigation" class="c-nav__menu w-nav-menu">
        <a href="/product" class="c-nav__menu-item w-nav-link">
          Product
        </a>

        <div data-hover="1" data-delay="0" class="c-nav__dropdown w-dropdown">
          <div class="c-nav__dropdown-toggle w-dropdown-toggle">
            <a href="/industries" class="c-nav__menu-item w-nav-link">
              Industries
            </a>
          </div>
          <nav class="c-nav__dropdown-list w-dropdown-list">
            <a href="/industries-small-business" class="c-nav__dropdown-item w-dropdown-link">
              Small Business
            </a>
            <a href="/industries-real-estate" class="c-nav__dropdown-item w-dropdown-link">
              Real Estate
            </a>
            <a href="/industries-legal" class="c-nav__dropdown-item w-dropdown-link">
              Legal
            </a>
            <a href="/industries-government" class="c-nav__dropdown-item w-dropdown-link">
              Government
            </a>
          </nav>
        </div>

        <a href="/pricing" class="c-nav__menu-item w-nav-link">
          Pricing
        </a>

        <div data-hover="1" data-delay="0" class="c-nav__dropdown w-dropdown">
          <div class="c-nav__dropdown-toggle w-dropdown-toggle">
            <a href="/resources" class="c-nav__menu-item w-nav-link">
              Resources
            </a>
          </div>
          <nav class="c-nav__dropdown-list w-dropdown-list">
            <a href="/faq" class="c-nav__dropdown-item w-dropdown-link">
              FAQ
            </a>
            <a href="/training-and-tutorials" class="c-nav__dropdown-item w-dropdown-link h-stage-one--hide">
              Training & Tutorials
            </a>
            <a href="/customer-service" class="c-nav__dropdown-item w-dropdown-link">
              Customer Service
            </a>
            <a href="/partner-program" class="c-nav__dropdown-item w-dropdown-link">
              Partner Program
            </a>
            <a href="/developer-program" class="c-nav__dropdown-item w-dropdown-link h-stage-one--hide">
              Developer Program
            </a>
            <a href="/legal-terms-and-conditions" class="c-nav__dropdown-item w-dropdown-link">
              Terms and Conditions
            </a>
          </nav>
        </div>
        <div data-hover="1" data-delay="0" class="c-nav__dropdown w-dropdown">
          <div class="c-nav__dropdown-toggle w-dropdown-toggle">
            <a href="/company" class="c-nav__menu-item w-nav-link">
              Company
            </a>
          </div>
          <nav class="c-nav__dropdown-list w-dropdown-list">
            <a href="/about-us" class="c-nav__dropdown-item w-dropdown-link">
              About Us
            </a>
            <a href="/news" class="c-nav__dropdown-item w-dropdown-link h-stage-one--hide">
              News / Press / Blog
            </a>
            <a href="/media-relations" class="c-nav__dropdown-item w-dropdown-link h-stage-one--hide">
              Media Relations
            </a>
            <a href="/investor-relations" class="c-nav__dropdown-item w-dropdown-link h-stage-one--hide">
              Investor Relations
            </a>
            <a href="/careers" class="c-nav__dropdown-item w-dropdown-link h-stage-one--hide">
              Careers
            </a>
          </nav>
        </div>
      </nav>

      <div class="c-nav__buttons">
        <a href="//app.docuwalk.com/login" class="c-nav__button c-nav__sign-in-button w-button">
          Sign In
        </a>
        <a href="/pricing#plans" class="c-nav__button c-nav__sign-up-button w-button">
        Get Started
        </a>
      </div>
    </div>
  </div>
</header>
    )
  }
}

export default Header;