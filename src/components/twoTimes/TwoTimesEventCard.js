import React from 'react';
import moment from 'moment';

import {
  Card,
  Group,
  Stack,
  ActionIcon,
  Text,
  Divider,
  List
} from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { supabase } from '../../services/supabase';
import { showNotification } from '@mantine/notifications';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../../slices/twoTimesSlice';

const getCardColor = (type) => {
  switch (type) {
    case 'ancient':
      return 'blue';
    case 'void':
      return 'purple';
    default:
      return 'orange';
  }
};

const TwoTimesEventCard = ({ event }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const { error } = await supabase
      .from('two_times_events')
      .delete()
      .eq('id', event.id);

    if (error) {
      return showNotification({
        message: 'Unable to delete event',
        color: 'red'
      });
    }

    dispatch(deleteEvent(event.id));
  };

  return (
    <Card bg={getCardColor(event.type)}>
      <Group position="apart">
        <Stack>
          <Text size="sm">
            <b>Starts:</b> {moment(event.start_date).format('Do MMMM YYYY')}
          </Text>
          <Text size="sm">
            <b>Ends:</b> {moment(event.end_date).format('Do MMMM YYYY')}
          </Text>
        </Stack>
        <ActionIcon onClick={handleDelete} variant="subtle">
          <IconTrash size={16} />
        </ActionIcon>
      </Group>
      {event.additional_notes && (
        <>
          <Divider my="md" />
          <List>
            {event.additional_notes.map((note) => (
              <List.Item key={note}>
                <Text size="sm">{note}</Text>
              </List.Item>
            ))}
          </List>
        </>
      )}
    </Card>
  );
};

export default TwoTimesEventCard;
