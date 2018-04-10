// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  Slide,
  Text,
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        controls={false}
        theme={theme}
      >
        <Slide bgColor="primary" notes="
          <p>Hi, I'm Don. I teach at EDA, a bootcamp-style web development course, but I've been a developer for over 25 years. About half of my career was at Microsoft and the other time was at start-ups, consultancys, and freelancing.</p>
          <p>I think the ability to learn new technologies is one of the most important skills for any developer</p>
          <p>And it's important to establish good practices early in a dev's career</p>
          ">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            On the practice of learning
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            Don Smith, Enspiral Dev Academy
          </Text>
        </Slide>
        <Slide bgColor="tertiary" notes="
          <p>I'd like to talk about 4 things that relate to our practice of learning</p>
          <ul><li>Why I think it's important</li>
            <li>What are the phases we experience while we learn</li>
            <li>What characteristics of our mindset serves us best while we're learning</li>
            <li>And what are some strategies we should consider and not consider to optomise our learning</li></ul>
        ">
          <Heading size={2} textColor="primary" caps>
            Learning
          </Heading>
          <Heading size={3} textColor="secondary">
            Why
          </Heading>
          <Heading size={3} textColor="secondary">
            Phases
          </Heading>
          <Heading size={3} textColor="secondary">
            Mindset
          </Heading>
          <Heading size={3} textColor="secondary">
            Strategies
          </Heading>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary" caps>
            The Internet is less than 30 years old
          </Heading>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={2} fit textColor="primary" caps>
            Learning Phase #1
          </Heading>
          <Heading size={3} textColor="secondary" caps>
            Concept Aquisition
          </Heading>
          <Appear>
            <Text size={3}>models, relationships and metaphors</Text>
          </Appear>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={2} fit textColor="primary" caps>
            Learning Phase #2
          </Heading>
          <Heading size={3} textColor="secondary" caps>
            Comfort &amp; productivity
          </Heading>
          <Appear>
            <Text size={3}>be wary of what feels like effective learning</Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="tertiary" caps>
            The Learning (Growth) Mindset
          </Heading>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="tertiary" caps>
            Awareness
          </Heading>
          <Heading size={3} textColor="secondary" caps>
            Emotions
          </Heading>
          <Heading size={3} textColor="secondary" caps>
            Inner Dialogue
          </Heading>
          <Heading size={3} textColor="secondary" caps>
            Object of Attention
          </Heading>
          <Appear>
            <Text size={3}>check out mindfulness meditation</Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="tertiary" caps>
            Grit and tenacity
          </Heading>
          <Text size={3}>it's what will set you apart</Text>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="tertiary" caps>
            Curiosity
          </Heading>
          <Text size={3}>it's what keeps you going</Text>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="tertiary" caps>
            Feedback
          </Heading>
          <Text size={3}>it's what makes you better</Text>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={2} fit textColor="primary" caps>
            Learning Strategies
          </Heading>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={3} textColor="primary" caps>
            Videos
          </Heading>
          <Text size={3}>for overviews and context</Text>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={3} textColor="primary" caps>
            Tutorials
          </Heading>
          <Text size={3}>for a model of what is common</Text>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={3} textColor="primary" caps>
            Rewrite an existing project
          </Heading>
          <Text size={3}>domain is already solved</Text>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={3} textColor="primary" caps>
            Build something you need
          </Heading>
          <Text size={3}>or really care about</Text>
        </Slide>
        <Slide bgColor="primary" textColor="secondary">
          <Heading size={2} textColor="tertiary" caps>
            How do you look after your learning?
          </Heading>
          <Text size={3}>other thoughts or questions?</Text>
        </Slide>
      </Deck>
    )
  }
}
