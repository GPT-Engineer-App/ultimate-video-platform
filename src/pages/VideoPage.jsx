import React from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";

const VideoPage = () => {
  const { id } = useParams();

  return (
    <Box p={5}>
      <Heading>Video Page</Heading>
      <Text>Displaying video with ID: {id}</Text>
    </Box>
  );
};

export default VideoPage;
