import React from 'react';

import { storiesOf } from '@storybook/react';
import { Text } from '.';

const text = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';

storiesOf('Typography/Text', module)
  .add('default', () => <Text>{text}</Text>)
  .add('with size', () => <Text size="size8">{text}</Text>)
  .add('with weight', () => <Text weight="weight9">{text}</Text>);
