import React, { useState, useEffect } from "react";

import { Stack, Text, Box } from '@chakra-ui/react';

const DynamicText = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Box pt={10}>
      <Stack spacing={3}>
        <Text fontSize="xl" ref={ref}>Random Text</Text>
      </Stack>
    </Box>
  )
})


export default DynamicText;
