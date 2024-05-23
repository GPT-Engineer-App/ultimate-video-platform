import { useState } from "react";
import { Box, Container, VStack, HStack, Text, Input, IconButton, Image, Flex, Spacer, Avatar, Menu, MenuButton, MenuList, MenuItem, Button, Grid, GridItem } from "@chakra-ui/react";
import { FaSearch, FaBell, FaUserCircle, FaHome, FaFire, FaPlayCircle, FaHistory, FaThumbsUp, FaBars } from "react-icons/fa";

const videos = [
  { id: 1, title: "React Tutorial", thumbnail: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMHR1dG9yaWFsfGVufDB8fHx8MTcxNjQ0MDM5NHww&ixlib=rb-4.0.3&q=80&w=1080", views: "1M views", time: "1 week ago", channel: "Code Academy", channelAvatar: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2RlJTIwYWNhZGVteSUyMGxvZ298ZW58MHx8fHwxNzE2NDQwMzk0fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, title: "Chakra UI Basics", thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGFrcmElMjB1aSUyMGJhc2ljc3xlbnwwfHx8fDE3MTY0NDAzOTV8MA&ixlib=rb-4.0.3&q=80&w=1080", views: "500K views", time: "2 weeks ago", channel: "Design Hub", channelAvatar: "https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBodWIlMjBsb2dvfGVufDB8fHx8MTcxNjQ0MDM5NXww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, title: "JavaScript Tips", thumbnail: "https://images.unsplash.com/photo-1659079631665-eb95370fb173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqYXZhc2NyaXB0JTIwdGlwc3xlbnwwfHx8fDE3MTY0NDAzOTV8MA&ixlib=rb-4.0.3&q=80&w=1080", views: "750K views", time: "3 days ago", channel: "JS Mastery", channelAvatar: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqcyUyMG1hc3RlcnklMjBsb2dvfGVufDB8fHx8MTcxNjQ0MDM5Nnww&ixlib=rb-4.0.3&q=80&w=1080" },
  // Add more video objects as needed
];

const Sidebar = () => (
  <VStack align="start" spacing={4} p={4} bg="gray.100" height="100vh" width="250px">
    <HStack spacing={2}>
      <FaHome />
      <Text>Home</Text>
    </HStack>
    <HStack spacing={2}>
      <FaFire />
      <Text>Trending</Text>
    </HStack>
    <HStack spacing={2}>
      <FaPlayCircle />
      <Text>Subscriptions</Text>
    </HStack>
    <HStack spacing={2}>
      <FaHistory />
      <Text>History</Text>
    </HStack>
    <HStack spacing={2}>
      <FaThumbsUp />
      <Text>Liked Videos</Text>
    </HStack>
  </VStack>
);

const Navbar = () => (
  <HStack bg="gray.800" color="white" p={4} spacing={4}>
    <IconButton icon={<FaBars />} aria-label="Menu" />
    <Text fontSize="2xl" fontWeight="bold">
      YouTube Clone
    </Text>
    <Spacer />
    <HStack spacing={4}>
      <Input placeholder="Search" bg="white" color="black" />
      <IconButton icon={<FaSearch />} aria-label="Search" />
    </HStack>
    <Spacer />
    <HStack spacing={4}>
      <IconButton icon={<FaBell />} aria-label="Notifications" />
      <Menu>
        <MenuButton as={Button} rightIcon={<FaUserCircle />}>
          <Avatar size="sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNjQ0MDM5Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
        </MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  </HStack>
);

const VideoCard = ({ video }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image src={video.thumbnail} alt={video.title} />
    <Box p={4}>
      <HStack spacing={4}>
        <Avatar src={video.channelAvatar} />
        <VStack align="start" spacing={1}>
          <Text fontWeight="bold">{video.title}</Text>
          <Text fontSize="sm" color="gray.500">
            {video.channel}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {video.views} • {video.time}
          </Text>
        </VStack>
      </HStack>
    </Box>
  </Box>
);

const VideoGrid = () => (
  <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} p={4}>
    {videos.map((video) => (
      <GridItem key={video.id}>
        <VideoCard video={video} />
      </GridItem>
    ))}
  </Grid>
);

const Index = () => {
  return (
    <Flex direction="column" height="100vh">
      <Navbar />
      <Flex flex="1">
        <Sidebar />
        <Box flex="1" overflowY="auto">
          <VideoGrid />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Index;
