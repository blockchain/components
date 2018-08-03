import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Navbar from '../Navbar'
import Button from '../../Atoms/Buttons/Button'
import Image from '../../Atoms/Images/Image'
import Text from '../../Atoms/Typography/Text'
import Section from '../../Atoms/Containers/Section'

const OrientSection = styled(Section)`
  background-color: ${(props) => props.theme.palette['bigStone']};
`
const Wrapper = (props) => <OrientSection {...props} />

const ButtonLogin = () => <Button>Login</Button>

const Content = () => (
  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
)

storiesOf('Organisms/Navbar', module)
  .add('Example 1', () => (
    <Wrapper>
      <Navbar.Navbar>
        <Navbar.NavbarHeader>
          <Navbar.NavbarBrand>
            <Image name="brand" width="175px" />
          </Navbar.NavbarBrand>
        </Navbar.NavbarHeader>
        <Navbar.NavbarMenu>
          <Navbar.NavbarNav width="auto">
            <Navbar.NavbarNavDropdown>
              <Navbar.NavbarDropdownHeader>
                Header 1
              </Navbar.NavbarDropdownHeader>
              <Navbar.NavbarDropdownContent>
                <Content />
              </Navbar.NavbarDropdownContent>
            </Navbar.NavbarNavDropdown>
            <Navbar.NavbarNavDropdown>
              <Navbar.NavbarDropdownHeader>
                Header 2
              </Navbar.NavbarDropdownHeader>
              <Navbar.NavbarDropdownContent>
                <Content />
              </Navbar.NavbarDropdownContent>
            </Navbar.NavbarNavDropdown>
          </Navbar.NavbarNav>
          <Navbar.NavbarNav width="auto">
            <Navbar.NavbarNavItem>
              <ButtonLogin />
            </Navbar.NavbarNavItem>
          </Navbar.NavbarNav>
        </Navbar.NavbarMenu>
        <Navbar.NavbarToggler />
      </Navbar.Navbar>
    </Wrapper>
  ))
  .add('Example 2', () => (
    <Wrapper>
      <Navbar.Navbar>
        <Navbar.NavbarHeader>
          <Navbar.NavbarBrand>
            <Image name="brand" width="175px" />
          </Navbar.NavbarBrand>
        </Navbar.NavbarHeader>
        <Navbar.NavbarMenu toggled>
          <Navbar.NavbarNav width="auto">
            <Navbar.NavbarNavDropdown>
              <Navbar.NavbarDropdownHeader>
                Header 1
              </Navbar.NavbarDropdownHeader>
              <Navbar.NavbarDropdownContent>
                <Content />
              </Navbar.NavbarDropdownContent>
            </Navbar.NavbarNavDropdown>
            <Navbar.NavbarNavDropdown>
              <Navbar.NavbarDropdownHeader>
                Header 2
              </Navbar.NavbarDropdownHeader>
              <Navbar.NavbarDropdownContent>
                <Content />
              </Navbar.NavbarDropdownContent>
            </Navbar.NavbarNavDropdown>
          </Navbar.NavbarNav>
          <Navbar.NavbarNav width="auto">
            <Navbar.NavbarNavItem>
              <ButtonLogin />
            </Navbar.NavbarNavItem>
          </Navbar.NavbarNav>
        </Navbar.NavbarMenu>
        <Navbar.NavbarToggler />
      </Navbar.Navbar>
    </Wrapper>
  ))
