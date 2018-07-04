import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from './Card'
import CardGrid from './CardGrid'

storiesOf('Cards/CardGrid', module)
  .add('default', () => <CardGrid>
    <Card width='200px' height='200px'>Card 1</Card>
    <Card width='200px' height='200px'>Card 2</Card>
    <Card width='200px' height='200px'>Card 3</Card>
    <Card width='200px' height='200px'>Card 4</Card>
    <Card width='200px' height='200px'>Card 5</Card>
    <Card width='200px' height='200px'>Card 6</Card>
  </CardGrid>)
