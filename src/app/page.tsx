"use client";

import { useAppDispatch } from "@/redux/hooks";
import { appModeActions } from "@/redux/slices/appMode";
import { AspectRatio, Box, Center, Stack } from "@chakra-ui/react";
import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const contentsRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    contentsRef;
    dispatch(appModeActions.changeIsInit(true));
  }, []);

  return (
    <main>
      <Box>
        <Box>Header</Box>
        <Stack px="64px">
          <Center ref={contentsRef}>
            <AspectRatio ratio={32 / 9} w="full" bg="gray.400">
              <Box></Box>
            </AspectRatio>
          </Center>
          <AspectRatio ratio={16 / 9} w="50%" bg="gray.400">
            <Box></Box>
          </AspectRatio>
        </Stack>
        <Box>Footer</Box>
      </Box>
    </main>
  );
}
