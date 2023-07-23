"use client";

import { useAppDispatch, useCounter } from "@/redux/hooks";
import { counterActions } from "@/redux/slices/counter";
import {
  Box,
  Button,
  Center,
  Code,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";

export default function Home() {
  const dispatch = useAppDispatch();
  const { count } = useCounter();
  return (
    <main>
      <Box h="100vh">
        <Center w="full" h="full">
          <Stack>
            <Text fontSize="3xl" fontWeight="bold" mb={20}>
              NextJS + Chakra UI + Redux + TypeScript
            </Text>
            <Center>
              <Text>{count}</Text>
            </Center>
            <Stack>
              <Tooltip label="Increament count">
                <Button onClick={() => dispatch(counterActions.increment())}>
                  Increment
                </Button>
              </Tooltip>
              <Tooltip label="Decreament count">
                <Button onClick={() => dispatch(counterActions.decrement())}>
                  Decrement
                </Button>
              </Tooltip>
            </Stack>
            <Text textAlign="center" mt={10}>
              Try To Change <Code>./src/app/page.tsx</Code>
            </Text>
          </Stack>
        </Center>
      </Box>
    </main>
  );
}
