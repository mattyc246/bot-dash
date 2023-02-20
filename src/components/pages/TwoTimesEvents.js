import React, { useEffect } from 'react';

import { Card, Center, Divider, Grid, Text, Title } from '@mantine/core';

import Layout from '../shared/Layout';
import AddTwoTimesForm from '../forms/AddTwoTimesForm';

import { setEvents } from '../../slices/twoTimesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from '../../services/supabase';
import { showNotification } from '@mantine/notifications';

const TwoTimesEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.twoTimes?.events);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from('two_times_events').select();

      if (error) {
        return showNotification({
          message: 'Unable to fetch 2x events',
          color: 'red'
        });
      }

      dispatch(setEvents(data));
    };

    fetchEvents();
  }, [dispatch]);

  return (
    <Layout>
      <Grid justify="center">
        <Grid.Col sm={12} md={6}>
          <Card>
            <Title order={5}>Add 2x Event</Title>
            <Divider my="md" />
            <AddTwoTimesForm />
          </Card>
        </Grid.Col>
        <Grid.Col sm={12} md={6}>
          <Card>
            <Title order={5}>All 2x Events</Title>
            <Divider my="md" />
            <Center h="100px">
              <Text>Total events {events?.length}</Text>
            </Center>
          </Card>
        </Grid.Col>
      </Grid>
    </Layout>
  );
};

export default TwoTimesEvents;
