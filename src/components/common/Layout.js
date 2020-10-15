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
                <html lang={site.lang} class="w-mod-js w-mod-touch hs-messages-mobile"/>
                {/* <style type="text/css">{`${site.codeinjection_styles}`}</style> */}
                {/* <script src="../bundle.js"></script> */}
                {/*  <script src={withPrefix('../bundle.js')} type="text/javascript" /> */}
                {/* <script src="https://netlify.docuwalk.com/bundle.js"></script> */}
                <body class="l-body"  />

            </Helmet>

            <div class="l-body__inner">
                    {/* The main header section on top of the screen */}
              <header class="c-header">
              <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="c-nav w-nav">
                <div class="h-container c-nav__inner">
                  <div class="c-nav__hamburger-button w-nav-button">
                    <img src={`${config.siteUrl}images/hamburger.svg`} alt="" class="h-svg-icon c-nav__icon--hamburger" />
                    <img src={`${config.siteUrl}images/times.svg`} alt="" class="h-svg-icon c-nav__icon--times" />
                  </div>

                  <a href="/" aria-current="page" class="c-nav__logo w-nav-brand _w--current">
                    <img src={site.logo} alt={site.title} class="image" />
                  </a>

                  <nav role="navigation" class="c-nav__menu w-nav-menu">
                    <a href="/product" class="c-nav__menu-item w-nav-link">
                      Product
                    </a>
                    <div data-hover="1" data-delay="0" class="c-nav__dropdown w-dropdown">
                      <div class="c-nav__dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
                        <a href="/industries" class="c-nav__menu-item w-nav-link">
                          Industries
                        </a>
                      <nav class="c-nav__dropdown-list w-dropdown-list" id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0">
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
                    </div>
                    <a href="/pricing" class="c-nav__menu-item w-nav-link">
                      Pricing
                    </a>
                    <div data-hover="1" data-delay="0" class="c-nav__dropdown w-dropdown">
                      <div class="c-nav__dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-1" aria-controls="w-dropdown-list-1" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
                        <a href="/resources" class="c-nav__menu-item w-nav-link">
                          Resources
                        </a>
                      <nav class="c-nav__dropdown-list w-dropdown-list" id="w-dropdown-list-1" aria-labelledby="w-dropdown-toggle-1">
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
                    </div>
                    <div data-hover="1" data-delay="0" class="c-nav__dropdown w-dropdown">
                      <div class="c-nav__dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-2" aria-controls="w-dropdown-list-2" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
                        <a href="/company" class="c-nav__menu-item w-nav-link">
                          Company
                        </a>
                      <nav class="c-nav__dropdown-list w-dropdown-list" id="w-dropdown-list-2" aria-labelledby="w-dropdown-toggle-2">
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
                <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
              </div>
              </header>
                  <main class="site-main c-main">
                      {/* All the main content gets inserted here, index.js, post.js */}
                      {children}
                  </main>

                <footer class="c-footer">
                  <div class="c-footer__body">
                    <div class="c-footer__body-inner h-container">
                      <div class="c-footer__contacts">
                        <div class="c-footer-contacts">
                          <div class="c-footer-contacts__row">
                            <div class="c-footer-contacts__brand">
                              <a href={`${config.siteUrl}`} class="c-footer-contacts__brand-link w-inline-block">
                                <img src={`${config.siteUrl}images/docuwalk-logo.svg`} alt="" class="image" />
                              </a>
                            </div>
                          </div>
                            <div class="c-footer-contacts__row">
                              <p class="c-footer-contacts__address">
                                14 Wall Street, 20th Floor, <br/>
                                NY, New York, 10005 <br/>
                              </p>
                            </div>
                        </div>
                      </div>

                      <nav class="c-footer__nav">
                        <div class="c-footer__nav-section">
                          <div class="c-footer-nav">
                            <h3 class="c-footer-nav__header">DocuWalk</h3>
                            <div class="c-footer-nav__list">
                              <a href="/product" class="c-footer-nav__item w-inline-block">
                                <div>What Is Docuwalk</div>
                              </a>
                              <a href="/product" class="c-footer-nav__item w-inline-block">
                                <div>How it Works</div>
                              </a>
                              <a href="/product" class="c-footer-nav__item w-inline-block">
                                <div>New Features</div>
                              </a>
                              <a href="//app.docuwalk.com/login" class="c-footer-nav__item w-inline-block">
                                <div>Sign In</div>
                              </a>
                              <a href="/pricing#plans" class="c-footer-nav__item w-inline-block">
                                <div>Sign Up</div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="c-footer__nav-section">
                          <div class="c-footer-nav">
                            <h3 class="c-footer-nav__header">Industries</h3>
                            <div class="c-footer-nav__list">
                              <a href="/industries-real-estate" class="c-footer-nav__item w-inline-block">
                                <div>Real Estate</div>
                              </a>
                              <a href="/industries-small-business" class="c-footer-nav__item w-inline-block">
                                <div>Small Business</div>
                              </a>
                              <a href="/industries-legal" class="c-footer-nav__item w-inline-block">
                                <div>Legal</div>
                              </a>
                              <a href="/industries-government" class="c-footer-nav__item w-inline-block">
                                <div>Government</div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="c-footer__nav-section">
                          <div class="c-footer-nav">
                            <h3 class="c-footer-nav__header">Resources</h3>
                            <div class="c-footer-nav__list">
                              <a href="/faq" class="c-footer-nav__item w-inline-block">
                                <div>FAQ</div>
                              </a>
                              <a href="/customer-service" class="c-footer-nav__item w-inline-block">
                                <div>Customer Service</div>
                              </a>
                              <a href="/partner-program" class="c-footer-nav__item w-inline-block">
                                <div>Get Certified</div>
                              </a>
                              <a href="/partner-program" class="c-footer-nav__item w-inline-block">
                                <div>Partners</div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="c-footer__nav-section">
                          <div class="c-footer-nav">
                            <h3 class="c-footer-nav__header">Pricing</h3>
                            <div class="c-footer-nav__list">
                              <a href="/pricing#basic" class="c-footer-nav__item w-inline-block">
                                <div>Basic</div>
                              </a>
                              <a href="/pricing#premium" class="c-footer-nav__item w-inline-block">
                                <div>Premium</div>
                              </a>
                              <a href="/pricing#teams" class="c-footer-nav__item w-inline-block">
                                <div>Teams</div>
                              </a>
                              <a href="/pricing#enterprise" class="c-footer-nav__item w-inline-block">
                                <div>Enterprise</div>
                              </a>
                              <a href="/pricing#try" class="c-footer-nav__item w-inline-block">
                                <div>Try for Free</div>
                              </a>
                              <a href="/pricing#comparison-table" class="c-footer-nav__item w-inline-block">
                                <div>Compare Features</div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="c-footer__nav-section ">
                          <div class="c-footer-nav">
                            <h3 class="c-footer-nav__header">Company</h3>
                            <div class="c-footer-nav__list">
                              <a href="/about-us" class="c-footer-nav__item w-inline-block">
                                <div>About Us</div>
                              </a>
                              <a href="/news" class="c-footer-nav__item w-inline-block h-stage-one--hide">
                                <div>News / Press</div>
                              </a>
                              <a href="/investor-relations" class="c-footer-nav__item w-inline-block h-stage-one--hide">
                                <div>Investor Relations</div>
                              </a>
                              <a href="/media-relations" class="c-footer-nav__item w-inline-block h-stage-one--hide">
                                <div>Media Kit</div>
                              </a>
                              <a href="/careers" class="c-footer-nav__item w-inline-block h-stage-one--hide">
                                <div>Careers</div>
                              </a>
                              <a href="/legal-privacy-policy-and-prominent-disclosures" class="c-footer-nav__item w-inline-block">
                                <div>Privacy</div>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="c-footer__nav-section">
                          <div class="c-footer-nav">
                            <h3 class="c-footer-nav__header">Legal</h3>
                            <div class="c-footer-nav__list">
                              <a href="/legal-terms-and-conditions" class="c-footer-nav__item w-inline-block">
                                <div>Terms and Conditions</div>
                              </a>
                              <a href="/legal-privacy-policy-and-prominent-disclosures" class="c-footer-nav__item w-inline-block">
                                <div>Privacy Policy and Prominent Disclosures</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </nav>

                      <div class="c-footer__subscription">
                        <section id="subscribe-form" class="c-footer-subscribe-form">
                          <div class="c-footer-subscribe-form__centered-container w-container">
                            <h2 class="c-footer-subscribe-form__header">Sign up for our email</h2>
                            <p class="c-footer-subscribe-form__text">From time to time we reach out to let you know of new features and exciting news.</p>
                            <div class="c-footer-subscribe-form__form-block w-form">
                              <form id="email-form" name="subscribe" data-name="subscribe" method="post" action="//identity.docuwalk.com/api/leads/new" class="c-footer-subscribe-form__flex">
                                <div class="c-footer-subscribe-form__input-wrapper">
                                  <input type="email" class="c-field c-footer-subscribe-form__input w-input" maxlength="70" name="email" data-name="email" placeholder="Email" required="" />
                                </div>
                                <input type="submit" value="Subscribe" data-wait="Please wait..." class="c-button c-footer-subscribe-form__button c-button--light-blue w-button" />
                                <div class="h-hide w-embed">
                                  <input type="text" value="subscribe" maxlength="20" name="formName" required readonly hidden/>
                                </div>
                              </form>
                              <div class="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                              </div>
                              <div class="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>

                    </div>
                  </div>

                  <div class="c-footer__botton">
                    <div class="h-container c-footer__bottom-inner">
                    <div class="c-footer__copywrite">
                      <div class="text-block">© Copyright 2020. All Right Reserved</div>
                    </div>

                    <nav class="c-footer__social">
                      <a href="//www.facebook.com/DocuWalk-103887751350709/" target="_blank" class="c-footer__social-link w-inline-block">
                        <img src={`${config.siteUrl}images/social-facebook_color.svg`} alt="" class="h-svg-icon" />
                      </a>
                      <a href="//twitter.com/docuwalk" target="_blank" class="c-footer__social-link w-inline-block">
                        <img src={`${config.siteUrl}images/social-twitter_color.svg`} alt="" class="h-svg-icon" />
                      </a>
                      <a href="//www.instagram.com/docuwalk" target="_blank" class="c-footer__social-link w-inline-block">
                        <img src={`${config.siteUrl}images/social-instagram_color.svg`} alt="" class="h-svg-icon" />
                      </a>
                      <a href="//www.linkedin.com/company/docuwalk" target="_blank" class="c-footer__social-link w-inline-block">
                        <img src={`${config.siteUrl}images/social-linkedin_color.svg`} alt="" class="h-svg-icon" />
                      </a>
                    </nav>
                    </div>
                  </div>
                </footer>
                {/* <script src="https://netlify.docuwalk.com/bundle.js"></script> */}
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <script src={`${site.codeinjection_foot}`}></script>

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
