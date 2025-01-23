import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Testimonial = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial-max-width thq-section-max-width">
          <div className="testimonial-container10">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <span className="testimonial-text11 thq-body-small">
              {props.content1}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card1"
                >
                  <div className="testimonial-container12">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial-image1"
                    />
                    <div className="testimonial-container13">
                      <strong className="thq-body-large">
                        {props.author1Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author1Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text14 thq-body-small">
                    {props.review1}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card2"
                >
                  <div className="testimonial-container14">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial-image2"
                    />
                    <div className="testimonial-container15">
                      <strong className="thq-body-large">
                        {props.author2Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author2Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text17 thq-body-small">
                    {props.review2}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card3"
                >
                  <div className="testimonial-container16">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial-image3"
                    />
                    <div className="testimonial-container17">
                      <strong className="thq-body-large">
                        {props.author3Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author3Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text20 thq-body-small">
                    {props.review3}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card4"
                >
                  <div className="testimonial-container18">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial-image4"
                    />
                    <div className="testimonial-container19">
                      <strong className="thq-body-large">
                        {props.author4Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author4Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text23 thq-body-small">
                    {props.review4}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial-container10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .testimonial-text11 {
            text-align: center;
          }
          .testimonial-container12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text14 {
            text-align: left;
          }
          .testimonial-container14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-container15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text17 {
            text-align: left;
          }
          .testimonial-container16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image3 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text20 {
            text-align: left;
          }
          .testimonial-container18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image4 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-container19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text23 {
            text-align: left;
          }
          @media (max-width: 991px) {
            .testimonial-container10 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial-container10 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .testimonial-card1 {
              width: 100%;
            }
            .testimonial-card2 {
              width: 100%;
            }
            .testimonial-card3 {
              width: 100%;
            }
            .testimonial-card4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial.defaultProps = {
  author4Position: 'Local Food Blogger',
  author3Name: 'Alicia Nguyen',
  author1Name: 'Samantha Green',
  review1: "I can't get enough of their quinoa salad!",
  author4Alt: 'Image of David Thompson',
  author4Name: 'David Thompson',
  author1Src:
    'https://images.unsplash.com/photo-1526569206739-cfee0c92f414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzQzODI0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  review3: 'Their smoothie bowls are a refreshing post-workout treat!',
  author2Name: 'Michael Patel',
  review2: 'The vegan burger is a must-try!',
  author2Position: 'Environmental Activist',
  review4: "I can't wait to try everything on their menu!",
  author1Alt: 'Image of Samantha Green',
  content1:
    'EcoEats is my go-to spot for delicious and healthy meals. The flavors are amazing, and I love knowing that the ingredients are sourced locally.',
  heading1: 'Customer Testimonials',
  author3Src:
    'https://images.unsplash.com/photo-1722270606350-e7be9fb9eb1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzQzODI0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1526510747491-58f928ec870f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzQzODI0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/photo-1504834636679-cd3acd047c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzQzODI0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: 'Yoga Instructor',
  author3Alt: 'Image of Alicia Nguyen',
  author3Position: 'Fitness Trainer',
  author2Alt: 'Image of Michael Patel',
}

Testimonial.propTypes = {
  author4Position: PropTypes.string,
  author3Name: PropTypes.string,
  author1Name: PropTypes.string,
  review1: PropTypes.string,
  author4Alt: PropTypes.string,
  author4Name: PropTypes.string,
  author1Src: PropTypes.string,
  review3: PropTypes.string,
  author2Name: PropTypes.string,
  review2: PropTypes.string,
  author2Position: PropTypes.string,
  review4: PropTypes.string,
  author1Alt: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  author3Src: PropTypes.string,
  author4Src: PropTypes.string,
  author2Src: PropTypes.string,
  author1Position: PropTypes.string,
  author3Alt: PropTypes.string,
  author3Position: PropTypes.string,
  author2Alt: PropTypes.string,
}

export default Testimonial
