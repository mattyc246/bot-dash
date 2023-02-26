import React, { useState } from 'react';

import {
  ActionIcon,
  Button,
  Divider,
  Group,
  NativeSelect,
  Stack,
  Text,
  TextInput
} from '@mantine/core';
import { supabase } from '../../services/supabase';
import { useDispatch } from 'react-redux';
import { showNotification } from '@mantine/notifications';
import { addEvent } from '../../slices/twoTimesSlice';
import { IconPlus, IconTrash } from '@tabler/icons-react';

const shardTypes = [
  { value: 'ancient', label: 'Ancient' },
  { value: 'void', label: 'Void' },
  { value: 'sacred', label: 'Sacred' }
];

const AddTwoTimesForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [newNote, setNewNote] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState([]);

  const [shardType, setShardType] = useState('ancient');

  const dispatch = useDispatch();

  const addNote = (note) => {
    if (note) {
      setAdditionalNotes([...additionalNotes, note]);
      setNewNote('');
    }
  };

  const deleteNote = (index) => {
    if (index !== null) {
      const newNotes = [...additionalNotes];
      newNotes.splice(index, 1);
      setAdditionalNotes(newNotes);
    }
  };

  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from('two_times_events')
      .insert({
        start_date: startDate,
        end_date: endDate,
        type: shardType,
        additional_notes: additionalNotes.length > 0 ? additionalNotes : null
      })
      .select();

    console.log(error);

    if (error) {
      return showNotification({
        message: 'Error creating new event',
        color: 'red'
      });
    }

    // Always take the first item since it is not bulk creation
    dispatch(addEvent(data[0]));
    setShardType('ancient');
    setStartDate('');
    setEndDate('');
    setAdditionalNotes([]);
    return showNotification({
      message: 'New event created!',
      color: 'green'
    });
  };

  return (
    <Stack spacing="md">
      <TextInput
        placeholder="YYYY-MM-DD"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        label="Start date"
        withAsterisk
      />
      <TextInput
        placeholder="YYYY-MM-DD"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        label="End date"
        withAsterisk
      />
      <NativeSelect
        data={shardTypes}
        value={shardType}
        onChange={(e) => setShardType(e?.currentTarget?.value)}
        label="Shard type"
        withAsterisk
      />
      <Group position="apart" align="center">
        <TextInput
          placeholder="Additional Note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          sx={{ flex: 1 }}
          withAsterisk
        />
        <ActionIcon variant="filled" onClick={() => addNote(newNote)}>
          <IconPlus size={16} />
        </ActionIcon>
      </Group>
      {additionalNotes.length > 0 && (
        <>
          <Divider />
          {additionalNotes.map((note, index) => {
            return (
              <Group key={index} position="apart" align="center">
                <Text size="sm" sx={{ flex: 1 }}>
                  {note}
                </Text>
                <ActionIcon onClick={() => deleteNote(index)}>
                  <IconTrash size={16} />
                </ActionIcon>
              </Group>
            );
          })}
        </>
      )}
      <Button onClick={handleSubmit}>Submit</Button>
    </Stack>
  );
};

export default AddTwoTimesForm;
