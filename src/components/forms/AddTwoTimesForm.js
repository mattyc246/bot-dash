import React, { useState } from 'react';

import { Button, NativeSelect, Stack, Text } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { supabase } from '../../services/supabase';

const shardTypes = [
  { value: 'ancient', label: 'Ancient' },
  { value: 'void', label: 'Void' },
  { value: 'sacred', label: 'Sacred' }
];

const AddTwoTimesForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [shardType, setShardType] = useState('ancient');

  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from('two_times_events')
      .insert({
        start_date: new Date().toUTCString(),
        end_date: new Date().toUTCString(),
        type: shardType
      })
      .select();

    console.log(data);
    console.log(error);
  };

  return (
    <Stack spacing="md">
      <Text size="xs" color="dimmed">
        Set all event start times in UTC
      </Text>
      <DatePicker
        placeholder="Start date"
        value={startDate}
        onChange={setStartDate}
        label="Start date"
        withAsterisk
      />
      <TimeInput
        label="Start time"
        value={startTime}
        onChange={setStartTime}
        withAsterisk
      />
      <DatePicker
        placeholder="End date"
        value={endDate}
        onChange={setEndDate}
        label="End date"
        withAsterisk
      />
      <TimeInput
        label="End time"
        value={endTime}
        onChange={setEndTime}
        withAsterisk
      />
      <NativeSelect
        data={shardTypes}
        value={shardType}
        onChange={(e) => setShardType(e?.currentTarget?.value)}
        label="Shard type"
        withAsterisk
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Stack>
  );
};

export default AddTwoTimesForm;
