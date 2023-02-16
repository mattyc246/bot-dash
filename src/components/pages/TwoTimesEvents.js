import React from 'react';

import { Card, Center, Divider, Grid, Text, Title } from '@mantine/core';

import Layout from '../shared/Layout';
import AddTwoTimesForm from '../forms/AddTwoTimesForm';

const TwoTimesEvents = () => {
  return (
    <Layout>
      <Grid justify="center">
        <Grid.Col sm={12} md={6}>
          <Card>
            <Title order={5}>Last 2x</Title>
            <Divider my="md" />
            <Center h="100px">
              <Text>No last 2x</Text>
            </Center>
          </Card>
        </Grid.Col>
        <Grid.Col sm={12} md={6}>
          <Card>
            <Title order={5}>Next 2x</Title>
            <Divider my="md" />
            <Center h="100px">
              <Text>No upcoming 2x</Text>
            </Center>
          </Card>
        </Grid.Col>
        <Grid.Col sm={12} md={6}>
          <Card>
            <Title order={5}>Add 2x Event</Title>
            <Divider my="md" />
            <AddTwoTimesForm />
          </Card>
        </Grid.Col>
        <Grid.Col sm={12} md={6}>
          <Card>
            <Title order={5}>Past 2x</Title>
            <Divider my="md" />
            <Center h="100px">
              <Text>No past 2x</Text>
            </Center>
          </Card>
        </Grid.Col>
      </Grid>
    </Layout>
  );
};

export default TwoTimesEvents;
