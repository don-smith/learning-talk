// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
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
        theme={theme}
      >
        <Slide bgColor="primary" notes="
          <p>Hi, I'm Don. I teach at EDA, a bootcamp-style web development course, but I've been a developer for over 25 years. About half of my career was at Microsoft and the other time was at start-ups, consultancys, and freelancing.</p>
          <p>I think the ability to learn new technologies is one of the most important skills for any developer</p>
          <p>And it's important to establish good practices early in a dev's career</p>
          ">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
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
            <li>What mindset serves us best while we're learning</li>
            <li>And what are some strategies we should consider and not consider to optomise our learning</li></ul>
        ">
          <Heading size={1} textColor="primary" caps>
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
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    )
  }
}
