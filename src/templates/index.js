import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'
import config from '../utils/siteConfig'

/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <div className="container">
                    <section className="post-feed">
                        {/* {posts.map(({ node }) => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <PostCard key={node.id} post={node} />
                        ))} */}
                <main class="c-main">
                    <div id="take-your-contracts" class="c-invitation-to-try">
                        <div class="c-invitation-to-try__inner h-container">
                        <div class="c-invitation-to-try__inner-2">
                            <div id="w-node-9452c8a7db6d-a351bd86" class="c-invitation-to-try__decor">
                            <img
                                src={`${config.siteUrl}images/laptop2x-opt.png`}
                                alt=""
                                class="c-invitation-to-try__image-simple"
                            />
                            <img src={`${config.siteUrl}/images/lamptop-on-the-stand-opt.svg`} alt="" class="c-invitation-to-try__image" />
                            </div>
                            <div id="w-node-943b8c18e388-a351bd86" class="c-invitation-to-try__header">
                            <h2 class="c-invitation-to-try__title">Take Your Contracts &amp; Documents To A New Level Of Intelligence, Security, And Speed</h2>
                            </div>
                            <div id="w-node-3ac3848dd615-a351bd86" class="c-invitation-to-try__body">
                            <ul role="list" class="c-invitation-to-try__list">
                                <li class="c-invitation-to-try__list-item m-intelligent-documents">Intelligent Documents</li>
                                <li class="c-invitation-to-try__list-item m-smart-contracts">Smart Contracts</li>
                                <li class="c-invitation-to-try__list-item m-virtual-negotiation-room">Virtual Negotiation Room</li>
                                <li class="c-invitation-to-try__list-item m-remote-operations">Remote Operations</li>
                                <li class="c-invitation-to-try__list-item m-custom-branding">Custom Branding</li>
                            </ul>
                            <div class="c-invitation-to-try__controls">
                                <div class="c-invitation-to-try__button-caption">Start a 30-Day Fully-Featured Trial Today<br /></div>
                                <a href="/pricing" class="c-button c-button--yellow c-button--thin-out w-button">Get started</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="c-get-started-home">
                        <div class="c-get-started-home__inner h-container">
                        <div class="c-get-started-home__inner-2 h-container">
                            <div class="c-get-started-home__content temp">
                            <div class="c-get-started-home__header temp">
                                <h2 class="c-get-started-home__title">
                                Get Started For Free Today! <br />
                                Simple, Secure and Safe
                                </h2>
                            </div>
                            <div class="c-get-started-home__desc">
                                <div></div>
                            </div>
                            </div>
                            <div class="c-get-started-home__form">
                            <div class="c-free-trial-form">
                                <section id="free-trial-form" class="c-free-trial-form__inner c-get-started-home__form-inner">
                                <h2 class="c-free-trial-form__header c-get-started-home__form-header">Free trial for 30 days</h2>
                                <div class="c-free-trial-form__form-block w-form">
                                    <form id="wf-form-freeTrial-1" name="wf-form-freeTrial" data-name="freeTrial" method="post" action="//identity.docuwalk.com/api/leads/new" redirect="/pricing" data-redirect="/pricing" class="c-free-trial-form__form">
                                    <div class="c-free-trial-form__row c-free-trial-form__two-cols">
                                        <input type="text" class="c-free-trial-form__field c-field w-input" maxlength="70" name="firstName" data-name="firstName" placeholder="First name" required="" />
                                        <input type="text" class="c-free-trial-form__field c-field w-input" maxlength="70" name="lastName" data-name="lastName" placeholder="Last name" required="" />
                                    </div>
                                    <div class="c-free-trial-form__row"><input type="email" class="c-free-trial-form__field c-field w-input" maxlength="70" name="email" data-name="email" placeholder="Email" required="" /></div>
                                    <div class="c-free-trial-form__row c-free-trial-form__row--complex"><input type="tel" class="c-free-trial-form__field c-field w-input" maxlength="17" name="phone" data-name="phone" placeholder="Phone" required="" /></div>
                                    <div class="c-free-trial-form__row h-temp">
                                        <label class="w-checkbox c-free-trial-form__checkbox">
                                        <input type="checkbox" maxlength="3" name="acceptTOC" data-name="acceptTOC" required="" class="w-checkbox-input c-free-trial-form__checkbox-input" /><span for="acceptTOC" class="w-form-label">I agree to the </span>
                                        <a href="/legal-terms-and-conditions" target="_blank" class="c-free-trial-form__terms-link w-inline-block"><div>Terms &amp; Conditions.</div></a>
                                        </label>
                                    </div>
                                    <div class="c-free-trial-form__row"><input type="submit" value="Get Started" data-wait="Please wait..." class="c-free-trial-form__button c-button c-button--dark-blue c-get-started-home__form-button w-button" /></div>
                                    <div class="c-free-trial-form__row h-hide">
                                        <div class="w-embed"><input type="text" value="freeTrial" maxlength="20" name="formName" hidden required readonly /></div>
                                    </div>
                                    </form>
                                    <div class="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div class="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                </div>
                                </section>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="c-get-started-home__ground"><img src={`${config.siteUrl}images/get-started-home-bg-ground.svg`} alt="" class="c-get-started-home__ground-image" /></div>
                    </div>
                    <div class="c-learn-about-platform">
                        <div class="c-learn-about-platform__inner h-container">
                            <div class="c-learn-about-platform__content">
                                <div class="c-learn-about-platform__header">
                                    <h2 class="c-learn-about-platform__title">Learn what makes our platform a must-have for business and personal use.</h2>
                                </div>
                                <div class="c-learn-about-platform__text">
                                    <div>Watch our one-minute introduction to DocuWalk.</div>
                                </div>
                                <div class="c-learn-about-platform__controls h-temp">
                                    <a href="#" class="c-learn-about-platform__button c-button c-button--dark-blue c-button--thin-out w-button">Watch now</a>
                                </div>
                            </div>
                            <div class="c-learn-about-platform__media">
                                <div class="c-learn-about-platform__movie-wrap">
                                    {/* <div style="padding-top: 56.17021276595745%;" id="w-node-573f8a56698d-a351bd86" class="w-embed-youtubevideo youtube">
                                        <iframe
                                        src="//www.youtube.com/embed/BHQi2U7xlco?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
                                        frameborder="0"
                                        style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; pointer-events: auto;"
                                        allow="autoplay; encrypted-media"
                                        allowfullscreen=""
                                        ></iframe>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="c-time-saving">
                        <div class="c-time-saving__inner h-container">
                        <div id="w-node-fc963afe36a3-a351bd86" class="c-time-saving__header">
                            <h2 class="c-time-saving__title">Save time and focus on what matters - You and Your Business</h2>
                        </div>
                        <div id="w-node-e18cf33b99f8-a351bd86" class="c-time-saving__ui-preview">
                            <img src={`${config.siteUrl}images/time-saving-phone2x.png`} width="245" alt="" class="c-time-saving__image c-time-saving__image-phone" />
                            <img
                            src={`${config.siteUrl}images/time-saving-phone-and-tablet2x.png`}
                            width="245"
                            alt=""
                            class="c-time-saving__image c-time-saving__image-phone-and-tablet"
                            />
                        </div>
                        <div id="w-node-b72b760d981b-a351bd86" class="c-time-saving__features">
                            <div class="c-docuwalk-features">
                            <div class="c-docuwalk-features__header">
                                <h3 class="c-docuwalk-features__title">Built for virtual and remote collaboration with your office &amp; clients to provide the most seamless digital transactions.</h3>
                            </div>
                            <div class="c-docuwalk-features__ui-preview">
                                <img
                                src={`${config.siteUrl}images/time-saving-phone-and-tablet2x.png`}
                                width="245"
                                alt=""
                                class="c-docuwalk-features__image"
                                />
                            </div>
                            <div class="c-docuwalk-features__set">
                                <div id="w-node-b21c515051f9-a351bd86" class="c-docuwalk-features__item">
                                <img src={`${config.siteUrl}images/icon-virtual-negotiation-room_1.svg`} alt="" class="c-docuwalk-features__item-icon" />
                                <div class="c-docuwalk-features__item-title">
                                    <div>Virtual Negotiation Room</div>
                                </div>
                                </div>
                                <div class="c-docuwalk-features__item">
                                <img src={`${config.siteUrl}images/icon-smart-contracts_1.svg`} alt="" class="c-docuwalk-features__item-icon" />
                                <div class="c-docuwalk-features__item-title">
                                    <div>Smart Contracts</div>
                                </div>
                                </div>
                                <div class="c-docuwalk-features__item">
                                <img src={`${config.siteUrl}images/icon-document-and-contract-management.svg`} alt="" class="c-docuwalk-features__item-icon" />
                                <div class="c-docuwalk-features__item-title">
                                    <div>Document &amp; Contract Management</div>
                                </div>
                                </div>
                                <div class="c-docuwalk-features__item">
                                <img src={`${config.siteUrl}images/icon-electronic-signature.svg`} alt="" class="c-docuwalk-features__item-icon" />
                                <div class="c-docuwalk-features__item-title">
                                    <div>Electronic signature</div>
                                </div>
                                </div>
                                <div class="c-docuwalk-features__item">
                                <img src={`${config.siteUrl}images/icon-version-tracking.svg`} alt="" class="c-docuwalk-features__item-icon" />
                                <div class="c-docuwalk-features__item-title">
                                    <div>Version Tracking</div>
                                </div>
                                </div>
                                <div class="c-docuwalk-features__item">
                                <img src={`${config.siteUrl}images/icon-privacy-and-security.svg`} alt="" class="c-docuwalk-features__item-icon" />
                                <div class="c-docuwalk-features__item-title">
                                    <div>Privacy &amp; Security</div>
                                </div>
                                </div>
                                <div class="c-docuwalk-features__item">
                                <img src={`${config.siteUrl}images/icon-custom-branding_1.svg`} alt="" class="c-docuwalk-features__item-icon" />
                                <div class="c-docuwalk-features__item-title">
                                    <div>Custom Branding</div>
                                </div>
                                </div>
                                <div class="c-docuwalk-features__item">
                                <img src={`${config.siteUrl}images/icon-remote-opperations.svg`} alt="" class="c-docuwalk-features__item-icon" />
                                <div class="c-docuwalk-features__item-title">
                                    <div>Remote Operations</div>
                                </div>
                                </div>
                                <div class="c-docuwalk-features__item">
                                <img src={`${config.siteUrl}images/icon-inline-editor.svg`} alt="" class="c-docuwalk-features__item-icon" />
                                <div class="c-docuwalk-features__item-title">
                                    <div>Inline Editor</div>
                                </div>
                                </div>
                                <div class="c-docuwalk-features__item">
                                <img src={`${config.siteUrl}images/icon-track-changes-or-side-by-side-review.svg`} alt="" class="c-docuwalk-features__item-icon" />
                                <div class="c-docuwalk-features__item-title">
                                    <div>Track Changes / Side by side review</div>
                                </div>
                                </div>
                                <div class="c-docuwalk-features__item">
                                <img src={`${config.siteUrl}images/icon-document-sharing.svg`} alt="" class="c-docuwalk-features__item-icon" />
                                <div class="c-docuwalk-features__item-title">
                                    <div>Document sharing</div>
                                </div>
                                </div>
                                <div class="c-docuwalk-features__item">
                                <img src={`${config.siteUrl}images/icon-enterprise-structure.svg`} alt="" class="c-docuwalk-features__item-icon" />
                                <div class="c-docuwalk-features__item-title">
                                    <div>Enterprise structure</div>
                                </div>
                                </div>
                            </div>
                            <div class="c-docuwalk-features__controls temp"><a href="/product" class="c-docuwalk-features__button c-button c-button--light-blue w-button">Learn more</a></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="advantages">
                        <div class="advantages__decor-rock"></div>
                        <div class="advantages__inner h-container">
                        <div class="advantages__inner-2">
                            <div class="advantages__header">
                            <div>Take Control Of Your Information With DocuWalk.</div>
                            </div>
                            <div class="advantages__items">
                            <div class="advantages__item">
                                <div class="advantages__row"><img src={`${config.siteUrl}images/icon-1-integrated-digital-home.svg`} alt="" class="advantages__icon" /></div>
                                <div class="advantages__row">
                                <h3 class="advantages__item-header">1-Integrated Digital Home</h3>
                                </div>
                                <div class="advantages__row">
                                <p class="advantages__item-text">DocuWalk is like no other product on the market. Nowhere else can you find this level of integrated services all in one place.</p>
                                </div>
                                <div class="advantages__row advantages__button-wrap"><a href="/pricing" class="advantages__get-started-button c-button c-button--light-blue c-button--thin-out w-button">Get started</a></div>
                            </div>
                            <div class="advantages__item">
                                <div class="advantages__row"><img src={`${config.siteUrl}images/icon-your-security-is-our-1-priority.svg`} alt="" class="advantages__icon" /></div>
                                <div class="advantages__row">
                                <h3 class="advantages__item-header">Your Security is Our #1 Priority</h3>
                                </div>
                                <div class="advantages__row">
                                <p class="advantages__item-text">Join the safest, most secure way to take control of your contracts, agreements, and documents for your work or personal life.</p>
                                </div>
                                <div class="advantages__row advantages__button-wrap"><a href="/pricing" class="advantages__get-started-button c-button c-button--thin-out c-button--transparent w-button">Get started</a></div>
                            </div>
                            <div class="advantages__item">
                                <div class="advantages__row"><img src={`${config.siteUrl}images/icon-contracts-beginning-to-end-for-the-first-time.svg`} alt="" class="advantages__icon" /></div>
                                <div class="advantages__row">
                                <h3 class="advantages__item-header">Contracts: Beginning-to-end for the first time</h3>
                                </div>
                                <div class="advantages__row">
                                <p class="advantages__item-text">DocuWalk makes it possible to bring complex transactions fully digital. Draft. Negotiate. Accept. All in one place.</p>
                                </div>
                                <div class="advantages__row advantages__button-wrap"><a href="/pricing" class="advantages__get-started-button c-button c-button--thin-out c-button--transparent w-button">Get started</a></div>
                            </div>
                            <div class="advantages__item">
                                <div class="advantages__row"><img src={`${config.siteUrl}images/icon-privacy.svg`} alt="" class="advantages__icon" /></div>
                                <div class="advantages__row">
                                <h3 class="advantages__item-header">Privacy</h3>
                                </div>
                                <div class="advantages__row">
                                <p class="advantages__item-text">You have control of your information. Unlike other platforms, we don’t scan your data so you can rest assured it isn’t being monitored by anyone else.</p>
                                </div>
                                <div class="advantages__row advantages__button-wrap"><a href="/pricing" class="advantages__get-started-button c-button c-button--thin-out c-button--transparent w-button">Get started</a></div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="advantages__decor-water"></div>
                    </div>
                    <div class="c-chose-a-plan-home">
                        <div class="c-chose-a-plan-home__inner h-container">
                        <div class="c-chose-a-plan-home__inner-2">
                            <div class="c-chose-a-plan-home__header">
                            <h2 class="c-chose-a-plan-home__title">Choose a plan that’s right for you and your organization</h2>
                            </div>
                            <div class="c-chose-a-plan-home__plans">
                            <div class="c-plan-home">
                                <div class="c-plan-home__header">
                                <img src={`${config.siteUrl}images/icon-plan-home-basic-ext.svg`} alt="" class="c-plan-home__icon" /><img src={`${config.siteUrl}images/icon-plan-home-basic-ext-mobile.svg`} alt="" class="c-plan-home__icon-mobile" />
                                <div class="c-plan-home__popularity"></div>
                                <h3 class="c-plan-home__title">Basic</h3>
                                <div class="c-plan-home__price">Free</div>
                                </div>
                                <div class="c-plan-home__desc">
                                Do you need to a way to have secure e-Signatures, with a blockchain option when you want one? Try our Basic plan which comes with free blockchain signatures for all users and a way to create, manage, and store your documents.
                                </div>
                                <div class="c-plan-home__controls"><a href="/pricing" class="c-plan-home__button c-button c-button--white c-button--thin-out w-button">Get Started</a></div>
                            </div>
                            <div class="c-plan-home">
                                <div class="c-plan-home__header">
                                <img src={`${config.siteUrl}images/icon-plan-home-premium-ext.svg`} alt="" class="c-plan-home__icon" /><img src={`${config.siteUrl}images/icon-plan-home-premium-ext-mobile.svg`} alt="" class="c-plan-home__icon-mobile" />
                                <div class="c-plan-home__popularity"></div>
                                <h3 class="c-plan-home__title">Premium</h3>
                                <div class="c-plan-home__price">$9/month</div>
                                </div>
                                <div class="c-plan-home__desc">Upgrade to our Individual plan to have everything in our Basic plan plus access to Template Creation and more collaboration tools including Side-By-Side Negotiation.</div>
                                <div class="c-plan-home__controls"><a href="/pricing" class="c-plan-home__button c-button c-button--light-blue c-button--thin-out w-button">Get Started</a></div>
                            </div>
                            <div class="c-plan-home">
                                <div class="c-plan-home__header">
                                <img src={`${config.siteUrl}images/document-movie-ext.svg`} alt="" class="c-plan-home__icon" /><img src={`${config.siteUrl}images/document-movie-ext-mobile.svg`} alt="" class="c-plan-home__icon-mobile" />
                                <div class="c-plan-home__popularity">
                                    <img src={`${config.siteUrl}images/icon-star-3.svg`} alt="" class="c-plan-home__popularity-icon" />
                                    <div>Most Popular</div>
                                </div>
                                <h3 class="c-plan-home__title">Teams</h3>
                                <div class="c-plan-home__price">$19/user/month</div>
                                </div>
                                <div class="c-plan-home__desc">
                                If you work with a group of people, then try out the Team tier with features such as Custom Branding, Multi-Party Negotiation, and the ability to assign different levels of permissions to a document.
                                </div>
                                <div class="c-plan-home__controls"><a href="/pricing" class="c-plan-home__button c-button c-button--white c-button--thin-out w-button">Get Started</a></div>
                            </div>
                            <div class="c-plan-home">
                                <div class="c-plan-home__header">
                                <img src={`${config.siteUrl}images/icon-plan-home-enterprise-ext.svg`} alt="" class="c-plan-home__icon" /><img src={`${config.siteUrl}images/icon-plan-home-enterprise-ext-mobile.svg`} alt="" class="c-plan-home__icon-mobile" />
                                <div class="c-plan-home__popularity"></div>
                                <h3 class="c-plan-home__title">Enterprise</h3>
                                <div class="c-plan-home__price">Call For Pricing</div>
                                </div>
                                <div class="c-plan-home__desc">For large scale organizations who need all of the features in the previous tiers plus enhanced analytics and priority support then our Enterprise option is built to fit your needs.</div>
                                <div class="c-plan-home__controls"><a href="/pricing" class="c-plan-home__button c-button c-button--white c-button--thin-out w-button">Get Started</a></div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="c-chose-a-plan-home__bottom">
                        <div class="c-chose-a-plan-home__bottom-inner h-container">
                            <div class="c-chose-a-plan-home__bottom-text">Don’t just take our word for it, we’re trusted by some of the most trusted brands</div>
                        </div>
                        </div>
                    </div>
                    <div class="partners-and-customers">
                        <div class="partners-and-customers__inner h-container">
                        <div class="partners-and-customers__item"><img src={`${config.siteUrl}images/seward-and-kissel-llp2x.png`} width="70" alt="" class="partners-and-customers__image" /></div>
                        <div class="partners-and-customers__item"><img src={`${config.siteUrl}images/berkshirehathaway2x.png`} width="70" alt="" class="partners-and-customers__image" /></div>
                        <div class="partners-and-customers__item"><img src={`${config.siteUrl}images/coldwellbanker2x.png`} width="70" alt="" class="partners-and-customers__image" /></div>
                        <div class="partners-and-customers__item"><img src={`${config.siteUrl}images/kw2x.png`} width="70" alt="" class="partners-and-customers__image" /></div>
                        <div class="partners-and-customers__item"><img src={`${config.siteUrl}images/remax2x.png`} width="70" alt="" class="partners-and-customers__image" /></div>
                        <div class="partners-and-customers__item"><img src={`${config.siteUrl}images/sothebys2x.png`} width="70" alt="" class="partners-and-customers__image" /></div>
                        <div class="partners-and-customers__item"><img src={`${config.siteUrl}images/century212x.png`} width="70" alt="" class="partners-and-customers__image" /></div>
                        <div class="partners-and-customers__item"><img src={`${config.siteUrl}images/rismedia2x.png`} width="70" alt="" class="partners-and-customers__image" /></div>
                        </div>
                    </div>
                    <div class="c-right-path">
                        <div class="c-right-path__inner h-container">
                        <div class="c-right-path__inner-2 h-container">
                            <div class="c-right-path__header">
                            <h2 class="c-right-path__title">Choosing the right path to walk may be the most important decision you make today.</h2>
                            </div>
                            <div class="c-right-path__form">
                            <div class="c-free-trial-form">
                                <section id="free-trial-form" class="c-free-trial-form__inner">
                                <h2 class="c-free-trial-form__header c-right-path__form-header">Free fully-featured trial for 30 days</h2>
                                <div class="c-free-trial-form__form-block w-form">
                                    <form id="wf-form-freeTrial-2" name="wf-form-freeTrial" data-name="freeTrial" method="post" action="//identity.docuwalk.com/api/leads/new" redirect="/pricing" data-redirect="/pricing" class="c-free-trial-form__form">
                                    <div class="c-free-trial-form__row c-free-trial-form__two-cols">
                                        <input type="text" class="c-free-trial-form__field c-field w-input" maxlength="70" name="firstName" data-name="firstName" placeholder="First name" required="" />
                                        <input type="text" class="c-free-trial-form__field c-field w-input" maxlength="70" name="lastName" data-name="lastName" placeholder="Last name" required="" />
                                    </div>
                                    <div class="c-free-trial-form__row"><input type="email" class="c-free-trial-form__field c-field w-input" maxlength="70" name="email" data-name="email" placeholder="Email" required="" /></div>
                                    <div class="c-free-trial-form__row c-free-trial-form__row--complex"><input type="tel" class="c-free-trial-form__field c-field w-input" maxlength="17" name="phone" data-name="phone" placeholder="Phone" required="" /></div>
                                    <div class="c-free-trial-form__row h-temp">
                                        <label class="w-checkbox c-free-trial-form__checkbox">
                                        <input type="checkbox" maxlength="3" name="acceptTOC" data-name="acceptTOC" required="" class="w-checkbox-input c-free-trial-form__checkbox-input" /><span for="acceptTOC" class="w-form-label">I agree to the </span>
                                        <a href="/legal-terms-and-conditions" target="_blank" class="c-free-trial-form__terms-link w-inline-block"><div>Terms &amp; Conditions.</div></a>
                                        </label>
                                    </div>
                                    <div class="c-free-trial-form__row"><input type="submit" value="Get Started" data-wait="Please wait..." class="c-free-trial-form__button c-button c-button--dark-blue c-get-started-home__form-button w-button" /></div>
                                    <div class="c-free-trial-form__row h-hide">
                                        <div class="w-embed"><input type="text" value="freeTrial" maxlength="20" name="formName" hidden required readonly /></div>
                                    </div>
                                    </form>
                                    <div class="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div class="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                </div>
                                </section>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </main>
                    </section>
                   {/*  <Pagination pageContext={pageContext} /> */}
                </div>
            </Layout>
        </>
    )



}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
