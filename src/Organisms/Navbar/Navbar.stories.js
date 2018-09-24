import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Button from '../../Atoms/Buttons/Button'
import { BrandName } from '../../Atoms/Brand'
import Section from '../../Atoms/Containers/Section'
import Navbar from './Navbar'
import NavbarBrand from './NavbarBrand'
import NavbarDropdownContent from './NavbarDropdownContent'
import NavbarDropdownHeader from './NavbarDropdownHeader'
import NavbarDropdownItem from './NavbarDropdownItem'
import NavbarDropdownItemDescription from './NavbarDropdownItemDescription'
import NavbarDropdownItemTitle from './NavbarDropdownItemTitle'
import NavbarHeader from './NavbarHeader'
import NavbarMenu from './NavbarMenu'
import NavbarNav from './NavbarNav'
import NavbarNavDropdown from './NavbarNavDropdown'
import NavbarNavItem from './NavbarNavItem'
import NavbarToggler from './NavbarToggler'

const OrientSection = styled(Section)`
  background-color: ${(props) => props.theme.palette['orient']};
`
const Wrapper = (props) => <OrientSection {...props} />

const ButtonLogin = () => <Button>Login</Button>

const Content = () => (
  <React.Fragment>
    <NavbarDropdownItem>
      <NavbarDropdownItemTitle>Link 1</NavbarDropdownItemTitle>
      <NavbarDropdownItemDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </NavbarDropdownItemDescription>
    </NavbarDropdownItem>
    <NavbarDropdownItem>
      <NavbarDropdownItemTitle>Link 2</NavbarDropdownItemTitle>
      <NavbarDropdownItemDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </NavbarDropdownItemDescription>
    </NavbarDropdownItem>
    <NavbarDropdownItem>
      <NavbarDropdownItemTitle>Link 3</NavbarDropdownItemTitle>
      <NavbarDropdownItemDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </NavbarDropdownItemDescription>
    </NavbarDropdownItem>
  </React.Fragment>
)

storiesOf('Organisms/Navbar', module)
  .add('Example 1', () => (
    <Wrapper>
      <Navbar>
        <NavbarHeader>
          <NavbarBrand>
            <BrandName width="175px" />
          </NavbarBrand>
        </NavbarHeader>
        <NavbarMenu>
          <NavbarNav width="auto">
            <NavbarNavDropdown>
              <NavbarDropdownHeader>Header 1</NavbarDropdownHeader>
              <NavbarDropdownContent>
                <Content />
              </NavbarDropdownContent>
            </NavbarNavDropdown>
            <NavbarNavDropdown>
              <NavbarDropdownHeader>Header 2</NavbarDropdownHeader>
              <NavbarDropdownContent>
                <Content />
              </NavbarDropdownContent>
            </NavbarNavDropdown>
          </NavbarNav>
          <NavbarNav width="auto">
            <NavbarNavItem>
              <ButtonLogin />
            </NavbarNavItem>
          </NavbarNav>
        </NavbarMenu>
        <NavbarToggler />
      </Navbar>
    </Wrapper>
  ))
  .add('Example 2', () => (
    <Wrapper>
      <Navbar>
        <NavbarHeader>
          <NavbarBrand>
            <BrandName width="175px" />
          </NavbarBrand>
        </NavbarHeader>
        <NavbarMenu toggled>
          <NavbarNav width="auto">
            <NavbarNavDropdown>
              <NavbarDropdownHeader>Header 1</NavbarDropdownHeader>
              <NavbarDropdownContent>
                <Content />
              </NavbarDropdownContent>
            </NavbarNavDropdown>
            <NavbarNavDropdown>
              <NavbarDropdownHeader>Header 2</NavbarDropdownHeader>
              <NavbarDropdownContent>
                <Content />
              </NavbarDropdownContent>
            </NavbarNavDropdown>
          </NavbarNav>
          <NavbarNav width="auto">
            <NavbarNavItem>
              <ButtonLogin />
            </NavbarNavItem>
          </NavbarNav>
        </NavbarMenu>
        <NavbarToggler toggled />
      </Navbar>
    </Wrapper>
  ))
