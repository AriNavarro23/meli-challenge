import React from "react";
import {AppProps} from "next/app";
import {ChakraProvider, Stack, Image, Input, IconButton, Box} from "@chakra-ui/react";


const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  function handleSubmit(event: React.FormEvent<HTMLDivElement>){
    event.preventDefault();

    console.log(event.target['query'].value);
    
  }

  return( 
  <ChakraProvider>
    <Stack>
      <Stack bgColor="yellow.400" direction="row" padding={4} spacing={6}>
        <Image src="/logo.png"/>
        <Box as="form" width="100%" onSubmit={handleSubmit} >
          <Stack direction="row" spacing={0} width="100%">
            <Input bgColor="white" roundedRight={0}/>
            <IconButton 
              aria-label='Search database' 
              icon={<img src="https://icongr.am/feather/search.svg?size=20&color=#666 " />} 
              roundedLeft={0}
            />
          </Stack>
        </Box>
      </Stack>
      <Component {...pageProps} />
    </Stack>
  </ChakraProvider>
  );
};

export default App
