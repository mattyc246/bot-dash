import React from 'react';

import { Center, Stack, Text } from '@mantine/core';
import TwoTimesEventCard from './TwoTimesEventCard';

const TwoTimesList = ({ events }) => {
  if (!events || events.length === 0) {
    return (
      <Center h="100px">
        <Text>No events created</Text>
      </Center>
    );
  }

  const rows = events.map((event) => <TwoTimesEventCard event={event} />);

  return <Stack>{rows}</Stack>;
};

export default TwoTimesList;
