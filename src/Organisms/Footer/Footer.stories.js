import React from 'react'
import { storiesOf } from '@storybook/react'

import Footer from './Footer'
import FooterCategory from './FooterCategory'
import FooterElement from './FooterElement'
import FooterGroup from './FooterGroup'
import FooterRow from './FooterRow'

storiesOf('Organisms/Footer', module)
  .add('example 1', () => (
    <Footer>
      <FooterRow>
        <FooterGroup>
          <FooterCategory>Category 1</FooterCategory>
          <FooterElement>
            <a>Link1</a>
          </FooterElement>
          <FooterElement>
            <a>Link2</a>
          </FooterElement>
          <FooterElement>
            <a>Link3</a>
          </FooterElement>
        </FooterGroup>
        <FooterGroup>
          <FooterCategory>Category 2</FooterCategory>
          <FooterElement>
            <a>Link1</a>
          </FooterElement>
          <FooterElement>
            <a>Link2</a>
          </FooterElement>
          <FooterElement>
            <a>Link3</a>
          </FooterElement>
        </FooterGroup>
        <FooterGroup>
          <FooterCategory>Category 3</FooterCategory>
          <FooterElement>
            <a>Link1</a>
          </FooterElement>
          <FooterElement>
            <a>Link2</a>
          </FooterElement>
          <FooterElement>
            <a>Link3</a>
          </FooterElement>
        </FooterGroup>
        <FooterGroup>
          <FooterCategory>Category 4</FooterCategory>
          <FooterElement>
            <a>Link1</a>
          </FooterElement>
          <FooterElement>
            <a>Link2</a>
          </FooterElement>
          <FooterElement>
            <a>Link3</a>
          </FooterElement>
        </FooterGroup>
      </FooterRow>
    </Footer>
  ))
  .add('example 2', () => (
    <Footer>
      <FooterRow>
        <FooterGroup>
          <FooterCategory>Category 1</FooterCategory>
          <FooterElement>
            <a>Link1</a>
          </FooterElement>
          <FooterElement>
            <a>Link2</a>
          </FooterElement>
          <FooterElement>
            <a>Link3</a>
          </FooterElement>
        </FooterGroup>
        <FooterGroup>
          <FooterCategory>Category 2</FooterCategory>
          <FooterElement>
            <a>Link1</a>
          </FooterElement>
          <FooterElement>
            <a>Link2</a>
          </FooterElement>
          <FooterElement>
            <a>Link3</a>
          </FooterElement>
        </FooterGroup>
        <FooterGroup>
          <FooterCategory>Category 3</FooterCategory>
          <FooterElement>
            <a>Link1</a>
          </FooterElement>
          <FooterElement>
            <a>Link2</a>
          </FooterElement>
          <FooterElement>
            <a>Link3</a>
          </FooterElement>
        </FooterGroup>
        <FooterGroup>
          <FooterCategory>Category 4</FooterCategory>
          <FooterElement>
            <a>Link1</a>
          </FooterElement>
          <FooterElement>
            <a>Link2</a>
          </FooterElement>
          <FooterElement>
            <a>Link3</a>
          </FooterElement>
        </FooterGroup>
        <FooterGroup>
          <FooterCategory>Category 5</FooterCategory>
          <FooterElement>
            <a>Link1</a>
          </FooterElement>
          <FooterElement>
            <a>Link2</a>
          </FooterElement>
          <FooterElement>
            <a>Link3</a>
          </FooterElement>
        </FooterGroup>
        <FooterGroup>
          <FooterCategory>Category 6</FooterCategory>
          <FooterElement>
            <a>Link1</a>
          </FooterElement>
          <FooterElement>
            <a>Link2</a>
          </FooterElement>
          <FooterElement>
            <a>Link3</a>
          </FooterElement>
        </FooterGroup>
      </FooterRow>
    </Footer>
  ))
