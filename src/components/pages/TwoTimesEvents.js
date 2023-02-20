import React, { useEffect, useState } from 'react';

import { Card, Divider, Grid, Group, Switch, Title, Text } from '@mantine/core';

import Layout from '../shared/Layout';
import AddTwoTimesForm from '../forms/AddTwoTimesForm';

import { setEvents } from '../../slices/twoTimesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from '../../services/supabase';
import { showNotification } from '@mantine/notifications';
import TwoTimesList from '../twoTimes/TwoTimesList';
import moment from 'moment';

const TwoTimesEvents = () => {
  const [isShowingPast, setIsShowingPast] = useState(false);
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

  const filteredEvents = !isShowingPast
    ? events
    : events.filter((e) => moment().isBefore(moment(e.end_date)));

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
            <Group position="apart">
              <Title order={5}>All 2x Events</Title>
              <Switch
                label={<Text size="xs">Hide Past</Text>}
                labelPosition="left"
                onLabel="ON"
                offLabel="OFF"
                size="md"
                checked={isShowingPast}
                onChange={(e) => setIsShowingPast(e.currentTarget.checked)}
              />
            </Group>
            <Divider my="md" />
            <TwoTimesList events={filteredEvents} />
          </Card>
        </Grid.Col>
      </Grid>
    </Layout>
  );
};

export default TwoTimesEvents;
