import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation } from '.'
import config from '../../utils/siteConfig'

// Styles
//import '../../styles/app.css'
import '../../styles/styles-wf.css'
import '../../styles/styles.css'


/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null

    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">

                <div className="viewport-top">
                    {/* The main header section on top of the screen */}

                    <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="c-nav w-nav">
  <div class="h-container c-nav__inner">
    <div class="c-nav__hamburger-button w-nav-button">
      <img src="imageshamburger.svg" alt="" class="h-svg-icon c-nav__icon--hamburger" />
      <img src="imagestimes.svg" alt="" class="h-svg-icon c-nav__icon--times" />
    </div>

    <a href="/" aria-current="page" class="c-nav__logo w-nav-brand _w--current">
      <img src={site.logo} alt={site.title} class="image" />
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



                   {/* <header className="site-head" style={{ ...site.cover_image && { backgroundImage: `url(${site.cover_image})` } }}>
                        <div className="container">
                            <div className="site-mast">
                                <div className="site-mast-left">
                                    <Link to="/">
                                        {site.logo ?
                                            <img className="site-logo" src={site.logo} alt={site.title} />
                                            : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                        }
                                    </Link>
                                </div>
                                <div className="site-mast-right">
                                    { site.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                                    { site.facebook && <a href={ facebookUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/facebook.svg" alt="Facebook" /></a>}
                                    <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" /></a>
                                </div>
                            </div>
                            { isHome ?
                                <div className="site-banner">
                                    <h1 className="site-banner-title">{site.title}</h1>
                                    <p className="site-banner-desc">{site.description}</p>
                                </div> :
                                null}
                            <nav className="site-nav">
                                <div className="site-nav-left">

                                    <Navigation data={site.navigation} navClass="site-nav-item" />
                                </div>
                                <div className="site-nav-right">
                                    <Link className="site-nav-button" to="/about">About</Link>
                                </div>
                            </nav>
                        </div>
                            </header>  */}

                    <main className="site-main">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>

                </div>

                <div className="viewport-bottom">
                    {/* The footer at the very bottom of the screen */}
                    <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <Link to="/">{site.title}</Link> © 2019 &mdash; Published with <a className="site-foot-nav-item" href="https://ghost.org" target="_blank" rel="noopener noreferrer">Ghost</a>
                            </div>
                            <div className="site-foot-nav-right">
                                <Navigation data={site.navigation} navClass="site-foot-nav-item" />
                            </div>
                        </div>
                    </footer>

                </div>
            </div>

        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
