"use client";

import NextLink from "next/link";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Link,
  List,
  ListItem,
  Stack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import React from "react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <nav className="flex flex-row justify-between px-11 py-3 h-[72px]">
      <NavDrawer />
      <LinkArr />
      <IconButton
        aria-label="ChangeTheme"
        background="transparent"
        onClick={toggleColorMode}
        size="lg"
        icon={
          colorMode === "light" ? <Icon as={FaSun} /> : <Icon as={FaMoon} />
        }
      />
    </nav>
  );
}

function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="OpenMenu"
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
        size="lg"
        icon={<Icon as={FaBars} />}
      />
      <Drawer
        placement="left"
        variant="solid"
        onClose={onClose}
        isOpen={isOpen}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex justify="space-between">
              <Link as={NextLink} href="/">
                <p>ICON_PLACE_HOLDER</p>
              </Link>
              <IconButton
                aria-label="CloseDrawer"
                onClick={onClose}
                size="lg"
                icon={<Icon as={IoClose} />}
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Stack fontSize="xl">
              <Box
                as={NextLink}
                _hover={{ backgroundColor: "teal", paddingLeft: "5px" }}
                transition="ease-in-out"
                paddingY="5px"
                width="full"
                roundedRight="xl"
                transitionDuration="200ms"
                href="/news"
              >
                News
              </Box>
              <Box
                as={NextLink}
                _hover={{ backgroundColor: "teal", paddingLeft: "5px" }}
                transition="ease-in-out"
                paddingY="5px"
                width="full"
                roundedRight="xl"
                transitionDuration="200ms"
                href="/about"
              >
                About
              </Box>
              <Box
                as={NextLink}
                _hover={{ backgroundColor: "teal", paddingLeft: "5px" }}
                transition="ease-in-out"
                paddingY="5px"
                width="full"
                roundedRight="xl"
                transitionDuration="200ms"
                href="/contact"
              >
                Contact
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function LinkArr() {
  return (
    <List
      display={{ base: "none", md: "flex" }}
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      textAlign="center"
      justifyItems="center"
      height="100%"
      width="20rem"
    >
      <ListItem>
        <Box
          as={NextLink}
          transition="ease-in-out"
          height="full"
          width="full"
          paddingX="15px"
          paddingY="15px"
          rounded="xl"
          transitionDuration="200ms"
          href="/news"
        >
          News
        </Box>
      </ListItem>
      <ListItem>
        <Box
          as={NextLink}
          transition="ease-in-out"
          height="full"
          width="full"
          paddingX="15px"
          paddingY="15px"
          rounded="xl"
          transitionDuration="200ms"
          href="/about"
        >
          About
        </Box>
      </ListItem>
      <ListItem>
        <Box
          as={NextLink}
          transition="ease-in-out"
          height="full"
          width="full"
          paddingX="15px"
          paddingY="15px"
          rounded="xl"
          transitionDuration="200ms"
          href="/contact"
        >
          Contact
        </Box>
      </ListItem>
    </List>
  );
}
