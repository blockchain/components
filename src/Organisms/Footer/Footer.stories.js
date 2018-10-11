import React from 'react'
import { storiesOf } from '@storybook/react'

import Footer from './Footer'
import FooterCategory from './FooterCategory'
import FooterElement from './FooterElement'
import FooterGroup from './FooterGroup'
import FooterLink from './FooterLink'
import FooterRow from './FooterRow'

storiesOf('Organisms/Footer', module)
  .add('Example 1', () => (
    <Footer>
      <FooterRow>
        <FooterGroup>
          <FooterCategory>Category 1</FooterCategory>
          <FooterElement>
            <FooterLink>Link1</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link2</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link3</FooterLink>
          </FooterElement>
        </FooterGroup>
        <FooterGroup>
          <FooterCategory>Category 2</FooterCategory>
          <FooterElement>
            <FooterLink>Link1</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link2</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link3</FooterLink>
          </FooterElement>
        </FooterGroup>
        <FooterGroup>
          <FooterCategory>Category 3</FooterCategory>
          <FooterElement>
            <FooterLink>Link1</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link2</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link3</FooterLink>
          </FooterElement>
        </FooterGroup>
        <FooterGroup>
          <FooterCategory>Category 4</FooterCategory>
          <FooterElement>
            <FooterLink>Link1</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link2</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link3</FooterLink>
          </FooterElement>
        </FooterGroup>
      </FooterRow>
    </Footer>
  ))
  .add('Example 2', () => (
    <Footer>
      <FooterRow>
        <FooterGroup>
          <FooterCategory>Category 1</FooterCategory>
          <FooterElement>
            <FooterLink>Link1</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link2</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link3</FooterLink>
          </FooterElement>
        </FooterGroup>
        <FooterGroup>
          <FooterCategory>Category 2</FooterCategory>
          <FooterElement>
            <FooterLink>Link1</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link2</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link3</FooterLink>
          </FooterElement>
        </FooterGroup>
        <FooterGroup>
          <FooterCategory>Category 3</FooterCategory>
          <FooterElement>
            <FooterLink>Link1</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link2</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link3</FooterLink>
          </FooterElement>
        </FooterGroup>
        <FooterGroup>
          <FooterCategory>Category 4</FooterCategory>
          <FooterElement>
            <FooterLink>Link1</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link2</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link3</FooterLink>
          </FooterElement>
        </FooterGroup>
        <FooterGroup>
          <FooterCategory>Category 5</FooterCategory>
          <FooterElement>
            <FooterLink>Link1</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link2</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link3</FooterLink>
          </FooterElement>
        </FooterGroup>
        <FooterGroup>
          <FooterCategory>Category 6</FooterCategory>
          <FooterElement>
            <FooterLink>Link1</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link2</FooterLink>
          </FooterElement>
          <FooterElement>
            <FooterLink>Link3</FooterLink>
          </FooterElement>
        </FooterGroup>
      </FooterRow>
    </Footer>
  ))
