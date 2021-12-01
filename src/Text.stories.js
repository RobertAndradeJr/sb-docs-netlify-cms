import React, { Fragment } from 'react';
import styled from 'styled-components';
import { title, subtitle, body } from './home.text.json'


const Title = styled.h1`
  color: #666;
  font-size: 48px;
`;

const Subtitle = styled.h2`
  color: red;
  font-size: 24px;
  text-decoration: underline;
`

const Body = styled.p`
  color: gray;
  font-size: 12px;
  border: 2px solid gray;
`

export default {
  title: 'Components/Text',
};

export const POC = (args) => (
  <Fragment>
    <Title>
      {title}
    </Title>
    <Subtitle>
      {subtitle}
    </Subtitle>
    <Body>
      {body}
    </Body>
  </Fragment>
);
POC.storyName = "Change text on this page by going to /admin"
