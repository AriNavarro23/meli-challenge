import React from "react";
import {AppProps} from "next/app";
import {ChakraProvider, Stack, Image, Input, IconButton} from "@chakra-ui/react";


const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return( 
  <ChakraProvider>
    <Stack>
      <Stack bgColor="yellow.400" direction="row" padding={4} spacing={6}>
        <Image src="/logo.png"/>
        <Stack direction="row" spacing={0} width="100%">
          <Input bgColor="white"/>
          <IconButton 
            aria-label='Search database' 
            icon={<img src="https://icongr.am/feather/search.svg?size=24&color=#333" />} />
        </Stack>
      </Stack>
      <Component {...pageProps} />
    </Stack>
  </ChakraProvider>
  );
};

export default App
