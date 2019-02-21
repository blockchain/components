import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Button from '../../Atoms/Buttons/Button'
import { BrandName } from '../../Atoms/Brand'
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

const Layout = styled.div`
  width: 100%;
  height: 768px;
`
const BlueSection = styled.div`
  background: ${(props) => props.theme.palette['blue900']};
`

const ButtonLogin = () => <Button>Login</Button>

const SmallContent = () => (
  <>
    {[1, 2, 3].map((value) => (
      <NavbarDropdownItem key={value}>
        <NavbarDropdownItemTitle>Link {value}</NavbarDropdownItemTitle>
        <NavbarDropdownItemDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </NavbarDropdownItemDescription>
      </NavbarDropdownItem>
    ))}
  </>
)

const BigContent = () => (
  <>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((value) => (
      <NavbarDropdownItem key={value}>
        <NavbarDropdownItemTitle>Link {value}</NavbarDropdownItemTitle>
        <NavbarDropdownItemDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </NavbarDropdownItemDescription>
      </NavbarDropdownItem>
    ))}
  </>
)

storiesOf('Organisms/Navbar', module)
  .add('Nav (Closed on mobile)', () => (
    <Layout>
      <BlueSection>
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
                  <SmallContent />
                </NavbarDropdownContent>
              </NavbarNavDropdown>
              <NavbarNavDropdown>
                <NavbarDropdownHeader>Header 2</NavbarDropdownHeader>
                <NavbarDropdownContent>
                  <SmallContent />
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
      </BlueSection>
    </Layout>
  ))
  .add('Navbar (Opened on mobile with few items)', () => (
    <Layout>
      <BlueSection>
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
                  <SmallContent />
                </NavbarDropdownContent>
              </NavbarNavDropdown>
              <NavbarNavDropdown>
                <NavbarDropdownHeader>Header 2</NavbarDropdownHeader>
                <NavbarDropdownContent>
                  <SmallContent />
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
      </BlueSection>
    </Layout>
  ))
  .add('Navbar (Opened on mobile with lot of items)', () => (
    <Layout>
      <BlueSection>
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
                  <BigContent />
                </NavbarDropdownContent>
              </NavbarNavDropdown>
              <NavbarNavDropdown>
                <NavbarDropdownHeader>Header 2</NavbarDropdownHeader>
                <NavbarDropdownContent>
                  <BigContent />
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
      </BlueSection>
    </Layout>
  ))
  .add('Navbar (Opened on mobile with reversed nav)', () => (
    <Layout>
      <BlueSection>
        <Navbar>
          <NavbarHeader>
            <NavbarBrand>
              <BrandName width="175px" />
            </NavbarBrand>
          </NavbarHeader>
          <NavbarMenu toggled>
            <NavbarNav order="2" width="auto">
              <NavbarNavDropdown>
                <NavbarDropdownHeader>Header 1</NavbarDropdownHeader>
                <NavbarDropdownContent>
                  <BigContent />
                </NavbarDropdownContent>
              </NavbarNavDropdown>
              <NavbarNavDropdown>
                <NavbarDropdownHeader>Header 2</NavbarDropdownHeader>
                <NavbarDropdownContent>
                  <BigContent />
                </NavbarDropdownContent>
              </NavbarNavDropdown>
            </NavbarNav>
            <NavbarNav order="1" width="auto">
              <NavbarNavItem>
                <ButtonLogin />
              </NavbarNavItem>
            </NavbarNav>
          </NavbarMenu>
          <NavbarToggler toggled />
        </Navbar>
      </BlueSection>
    </Layout>
  ))
