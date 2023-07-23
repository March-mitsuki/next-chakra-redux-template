"use client";

import { getTrans, mapLangToName, supportedLanguages } from "@/i18n";
import { useAppDispatch, useCounter, useI18n } from "@/redux/hooks";
import { counterActions } from "@/redux/slices/counter";
import { i18nActions } from "@/redux/slices/i18n";
import { setLocalStorageItem } from "@/utils/typedLocalStorage";
import {
  Box,
  Button,
  Center,
  Code,
  HStack,
  IconButton,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Text,
  Tooltip,
  createIcon,
} from "@chakra-ui/react";

export default function Home() {
  const dispatch = useAppDispatch();
  const { count } = useCounter();
  const { lang } = useI18n();

  return (
    <main>
      <Box h="100vh">
        <HStack borderWidth={1} borderX={0} borderTop={0} px={4} py={2}>
          <ChakraLink
            href="https://github.com/March-mitsuki/next-chakra-redux-template"
            isExternal
          >
            <Button variant="link" color="black">
              {`${getTrans("maintain_by", lang)} Mitsuki_Yang`}
            </Button>
          </ChakraLink>

          <Spacer />
          <LanguageMenu />
        </HStack>
        <Center mt={20}>
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
                  {getTrans("increment", lang)}
                </Button>
              </Tooltip>
              <Tooltip label="Decreament count">
                <Button onClick={() => dispatch(counterActions.decrement())}>
                  {getTrans("decrement", lang)}
                </Button>
              </Tooltip>
            </Stack>
            <Text textAlign="center" mt={10}>
              {getTrans("try_to_change", lang)} <Code>./src/app/page.tsx</Code>
            </Text>
          </Stack>
        </Center>
      </Box>
    </main>
  );
}

const LanguageIcon = createIcon({
  displayName: "LanguageIcon",
  viewBox: "0 96 960 960",
  path: (
    <path
      fill="currentColor"
      d="m475 976 181-480h82l186 480h-87l-41-126H604l-47 126h-82Zm151-196h142l-70-194h-2l-70 194Zm-466 76-55-55 204-204q-38-44-67.5-88.5T190 416h87q17 33 37.5 62.5T361 539q45-47 75-97.5T487 336H40v-80h280v-80h80v80h280v80H567q-22 69-58.5 135.5T419 598l98 99-30 81-127-122-200 200Z"
    />
  ),
});

const LanguageMenu: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Menu>
      <MenuButton as={IconButton} icon={<LanguageIcon />} />
      <MenuList>
        {supportedLanguages.map((lang) => (
          <MenuItem
            key={lang}
            onClick={() => {
              dispatch(i18nActions.changeLang(lang));
              setLocalStorageItem("lang", lang);
            }}
          >
            {mapLangToName(lang)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
