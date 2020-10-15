import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { withPrefix, Link, StaticQuery, graphql } from 'gatsby'
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
                <html lang={site.lang} className="cw-mod-js w-mod-touch hs-messages-mobile"/>
                {/* <style type="text/css">{`${site.codeinjection_styles}`}</style> */}
                {/* <script src="../bundle.js"></script> */}
                {/*  <script src={withPrefix('../bundle.js')} type="text/javascript" /> */}
                {/* <script src="https://netlify.docuwalk.com/bundle.js"></script> */}
                <body className="l-body"  />

            </Helmet>

            <div className="l-body__inner">
                    {/* The main header section on top of the screen */}
              <header className="c-header">
              <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className="cc-nav w-nav">
                <div className="ch-container c-nav__inner">
                  <div className="cc-nav__hamburger-button w-nav-button">
                    <img src={`${config.siteUrl}images/hamburger.svg`} alt="" className="ch-svg-icon c-nav__icon--hamburger" />
                    <img src={`${config.siteUrl}images/times.svg`} alt="" className="ch-svg-icon c-nav__icon--times" />
                  </div>

                  <a href="/" aria-current="page" className="cc-nav__logo w-nav-brand _w--current">
                    <img src={site.logo} alt={site.title} className="cimage" />
                  </a>

                  <nav role="navigation" className="cc-nav__menu w-nav-menu">
                    <a href="/product" className="cc-nav__menu-item w-nav-link">
                      Product
                    </a>
                    <div data-hover="1" data-delay="0" className="cc-nav__dropdown w-dropdown">
                      <div className="cc-nav__dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
                        <a href="/industries" className="cc-nav__menu-item w-nav-link">
                          Industries
                        </a>
                      <nav className="cc-nav__dropdown-list w-dropdown-list" id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0">
                        <a href="/industries-small-business" className="cc-nav__dropdown-item w-dropdown-link">
                          Small Business
                        </a>
                        <a href="/industries-real-estate" className="cc-nav__dropdown-item w-dropdown-link">
                          Real Estate
                        </a>
                        <a href="/industries-legal" className="cc-nav__dropdown-item w-dropdown-link">
                          Legal
                        </a>
                        <a href="/industries-government" className="cc-nav__dropdown-item w-dropdown-link">
                          Government
                        </a>
                      </nav>
                      </div>
                    </div>
                    <a href="/pricing" className="cc-nav__menu-item w-nav-link">
                      Pricing
                    </a>
                    <div data-hover="1" data-delay="0" className="cc-nav__dropdown w-dropdown">
                      <div className="cc-nav__dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-1" aria-controls="w-dropdown-list-1" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
                        <a href="/resources" className="cc-nav__menu-item w-nav-link">
                          Resources
                        </a>
                      <nav className="cc-nav__dropdown-list w-dropdown-list" id="w-dropdown-list-1" aria-labelledby="w-dropdown-toggle-1">
                        <a href="/faq" className="cc-nav__dropdown-item w-dropdown-link">
                          FAQ
                        </a>
                        <a href="/training-and-tutorials" className="cc-nav__dropdown-item w-dropdown-link h-stage-one--hide">
                          Training & Tutorials
                        </a>
                        <a href="/customer-service" className="cc-nav__dropdown-item w-dropdown-link">
                          Customer Service
                        </a>
                        <a href="/partner-program" className="cc-nav__dropdown-item w-dropdown-link">
                          Partner Program
                        </a>
                        <a href="/developer-program" className="cc-nav__dropdown-item w-dropdown-link h-stage-one--hide">
                          Developer Program
                        </a>
                        <a href="/legal-terms-and-conditions" className="cc-nav__dropdown-item w-dropdown-link">
                          Terms and Conditions
                        </a>
                      </nav>
                      </div>
                    </div>
                    <div data-hover="1" data-delay="0" className="cc-nav__dropdown w-dropdown">
                      <div className="cc-nav__dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-2" aria-controls="w-dropdown-list-2" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
                        <a href="/company" className="cc-nav__menu-item w-nav-link">
                          Company
                        </a>
                      <nav className="cc-nav__dropdown-list w-dropdown-list" id="w-dropdown-list-2" aria-labelledby="w-dropdown-toggle-2">
                        <a href="/about-us" className="cc-nav__dropdown-item w-dropdown-link">
                          About Us
                        </a>
                        <a href="/news" className="cc-nav__dropdown-item w-dropdown-link h-stage-one--hide">
                          News / Press / Blog
                        </a>
                        <a href="/media-relations" className="cc-nav__dropdown-item w-dropdown-link h-stage-one--hide">
                          Media Relations
                        </a>
                        <a href="/investor-relations" className="cc-nav__dropdown-item w-dropdown-link h-stage-one--hide">
                          Investor Relations
                        </a>
                        <a href="/careers" className="cc-nav__dropdown-item w-dropdown-link h-stage-one--hide">
                          Careers
                        </a>
                      </nav>
                      </div>
                    </div>
                  </nav>
                  <div className="cc-nav__buttons">
                    <a href="//app.docuwalk.com/login" className="cc-nav__button c-nav__sign-in-button w-button">
                      Sign In
                    </a>
                    <a href="/pricing#plans" className="cc-nav__button c-nav__sign-up-button w-button">
                    Get Started
                    </a>
                  </div>
                </div>
                <div className="cw-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
              </div>
              </header>
                  <main className="site-main c-main">
                      {/* All the main content gets inserted here, index.js, post.js */}
                      {children}
                  </main>

                <footer className="cc-footer">
                  <div className="cc-footer__body">
                    <div className="cc-footer__body-inner h-container">
                      <div className="cc-footer__contacts">
                        <div className="cc-footer-contacts">
                          <div className="cc-footer-contacts__row">
                            <div className="cc-footer-contacts__brand">
                              <a href={`${config.siteUrl}`} className="cc-footer-contacts__brand-link w-inline-block">
                                <img src={`${config.siteUrl}images/docuwalk-logo.svg`} alt="" className="cimage" />
                              </a>
                            </div>
                          </div>
                            <div className="cc-footer-contacts__row">
                              <p className="cc-footer-contacts__address">
                                14 Wall Street, 20th Floor, <br/>
                                NY, New York, 10005 <br/>
                              </p>
                            </div>
                        </div>
                      </div>

                      <nav className="cc-footer__nav">
                        <div className="cc-footer__nav-section">
                          <div className="cc-footer-nav">
                            <h3 className="cc-footer-nav__header">DocuWalk</h3>
                            <div className="cc-footer-nav__list">
                              <a href="/product" className="cc-footer-nav__item w-inline-block">
                                <div>What Is Docuwalk</div>
                              </a>
                              <a href="/product" className="cc-footer-nav__item w-inline-block">
                                <div>How it Works</div>
                              </a>
                              <a href="/product" className="cc-footer-nav__item w-inline-block">
                                <div>New Features</div>
                              </a>
                              <a href="//app.docuwalk.com/login" className="cc-footer-nav__item w-inline-block">
                                <div>Sign In</div>
                              </a>
                              <a href="/pricing#plans" className="cc-footer-nav__item w-inline-block">
                                <div>Sign Up</div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="cc-footer__nav-section">
                          <div className="cc-footer-nav">
                            <h3 className="cc-footer-nav__header">Industries</h3>
                            <div className="cc-footer-nav__list">
                              <a href="/industries-real-estate" className="cc-footer-nav__item w-inline-block">
                                <div>Real Estate</div>
                              </a>
                              <a href="/industries-small-business" className="cc-footer-nav__item w-inline-block">
                                <div>Small Business</div>
                              </a>
                              <a href="/industries-legal" className="cc-footer-nav__item w-inline-block">
                                <div>Legal</div>
                              </a>
                              <a href="/industries-government" className="cc-footer-nav__item w-inline-block">
                                <div>Government</div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="cc-footer__nav-section">
                          <div className="cc-footer-nav">
                            <h3 className="cc-footer-nav__header">Resources</h3>
                            <div className="cc-footer-nav__list">
                              <a href="/faq" className="cc-footer-nav__item w-inline-block">
                                <div>FAQ</div>
                              </a>
                              <a href="/customer-service" className="cc-footer-nav__item w-inline-block">
                                <div>Customer Service</div>
                              </a>
                              <a href="/partner-program" className="cc-footer-nav__item w-inline-block">
                                <div>Get Certified</div>
                              </a>
                              <a href="/partner-program" className="cc-footer-nav__item w-inline-block">
                                <div>Partners</div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="cc-footer__nav-section">
                          <div className="cc-footer-nav">
                            <h3 className="cc-footer-nav__header">Pricing</h3>
                            <div className="cc-footer-nav__list">
                              <a href="/pricing#basic" className="cc-footer-nav__item w-inline-block">
                                <div>Basic</div>
                              </a>
                              <a href="/pricing#premium" className="cc-footer-nav__item w-inline-block">
                                <div>Premium</div>
                              </a>
                              <a href="/pricing#teams" className="cc-footer-nav__item w-inline-block">
                                <div>Teams</div>
                              </a>
                              <a href="/pricing#enterprise" className="cc-footer-nav__item w-inline-block">
                                <div>Enterprise</div>
                              </a>
                              <a href="/pricing#try" className="cc-footer-nav__item w-inline-block">
                                <div>Try for Free</div>
                              </a>
                              <a href="/pricing#comparison-table" className="cc-footer-nav__item w-inline-block">
                                <div>Compare Features</div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="cc-footer__nav-section ">
                          <div className="cc-footer-nav">
                            <h3 className="cc-footer-nav__header">Company</h3>
                            <div className="cc-footer-nav__list">
                              <a href="/about-us" className="cc-footer-nav__item w-inline-block">
                                <div>About Us</div>
                              </a>
                              <a href="/news" className="cc-footer-nav__item w-inline-block h-stage-one--hide">
                                <div>News / Press</div>
                              </a>
                              <a href="/investor-relations" className="cc-footer-nav__item w-inline-block h-stage-one--hide">
                                <div>Investor Relations</div>
                              </a>
                              <a href="/media-relations" className="cc-footer-nav__item w-inline-block h-stage-one--hide">
                                <div>Media Kit</div>
                              </a>
                              <a href="/careers" className="cc-footer-nav__item w-inline-block h-stage-one--hide">
                                <div>Careers</div>
                              </a>
                              <a href="/legal-privacy-policy-and-prominent-disclosures" className="cc-footer-nav__item w-inline-block">
                                <div>Privacy</div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="cc-footer__nav-section">
                          <div className="cc-footer-nav">
                            <h3 className="cc-footer-nav__header">Legal</h3>
                            <div className="cc-footer-nav__list">
                              <a href="/legal-terms-and-conditions" className="cc-footer-nav__item w-inline-block">
                                <div>Terms and Conditions</div>
                              </a>
                              <a href="/legal-privacy-policy-and-prominent-disclosures" className="cc-footer-nav__item w-inline-block">
                                <div>Privacy Policy and Prominent Disclosures</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </nav>

                      <div className="cc-footer__subscription">
                        <section id="subscribe-form" className="cc-footer-subscribe-form">
                          <div className="cc-footer-subscribe-form__centered-container w-container">
                            <h2 className="cc-footer-subscribe-form__header">Sign up for our email</h2>
                            <p className="cc-footer-subscribe-form__text">From time to time we reach out to let you know of new features and exciting news.</p>
                            <div className="cc-footer-subscribe-form__form-block w-form">
                              <form id="email-form" name="subscribe" data-name="subscribe" method="post" action="//identity.docuwalk.com/api/leads/new" className="cc-footer-subscribe-form__flex">
                                <div className="cc-footer-subscribe-form__input-wrapper">
                                  <input type="email" className="cc-field c-footer-subscribe-form__input w-input" maxlength="70" name="email" data-name="email" placeholder="Email" required="" />
                                </div>
                                <input type="submit" value="Subscribe" data-wait="Please wait..." className="cc-button c-footer-subscribe-form__button c-button--light-blue w-button" />
                                <div className="ch-hide w-embed">
                                  <input type="text" value="subscribe" maxlength="20" name="formName" required readonly hidden/>
                                </div>
                              </form>
                              <div className="cw-form-done">
                                <div>Thank you! Your submission has been received!</div>
                              </div>
                              <div className="cw-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>

                    </div>
                  </div>

                  <div className="cc-footer__botton">
                    <div className="ch-container c-footer__bottom-inner">
                    <div className="cc-footer__copywrite">
                      <div className="ctext-block">© Copyright 2020. All Right Reserved</div>
                    </div>

                    <nav className="cc-footer__social">
                      <a href="//www.facebook.com/DocuWalk-103887751350709/" target="_blank" className="cc-footer__social-link w-inline-block">
                        <img src={`${config.siteUrl}images/social-facebook_color.svg`} alt="" className="ch-svg-icon" />
                      </a>
                      <a href="//twitter.com/docuwalk" target="_blank" className="cc-footer__social-link w-inline-block">
                        <img src={`${config.siteUrl}images/social-twitter_color.svg`} alt="" className="ch-svg-icon" />
                      </a>
                      <a href="//www.instagram.com/docuwalk" target="_blank" className="cc-footer__social-link w-inline-block">
                        <img src={`${config.siteUrl}images/social-instagram_color.svg`} alt="" className="ch-svg-icon" />
                      </a>
                      <a href="//www.linkedin.com/company/docuwalk" target="_blank" className="cc-footer__social-link w-inline-block">
                        <img src={`${config.siteUrl}images/social-linkedin_color.svg`} alt="" className="ch-svg-icon" />
                      </a>
                    </nav>
                    </div>
                  </div>
                </footer>
               {/*  <script src="https://netlify.docuwalk.com/bundle.js"></script> */}
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
