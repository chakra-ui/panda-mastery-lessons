import { Box, Circle, HStack, VStack, styled } from '../styled-system/jsx';

function App() {
  return (
    <Box minH='100dvh' bg='#000' pt='180px' px='24px' color='#FFF'>
      <VStack maxW='640px' mx='auto' gap='56px'>
        <VStack gap='24px'>
          <styled.h1
            fontSize='60px'
            fontWeight='500px'
            lineHeight='1.1'
            letterSpacing='-1.2px'
            textAlign='center'
          >
            Own your audience.
            <br />
            <styled.span color='#F43F5E'>So you don't lose them.</styled.span>
          </styled.h1>
          <Box maxW='420px' mx='auto' textAlign='center'>
            <styled.p fontSize='24px'>
              Turn your audience into email and text message subscribers
            </styled.p>
          </Box>
        </VStack>
        <VStack gap='32px'>
          <HStack gap='24px' fontSize='18px' fontWeight='500'>
            <styled.a
              href='#'
              bg='#FFF'
              color='#000'
              px='40px'
              py='16px'
              borderRadius='8px'
            >
              Get started Now
            </styled.a>
            <styled.a
              href='#'
              bg='#1D1D1D'
              color='#FFF'
              px='40px'
              py='16px'
              borderRadius='8px'
            >
              View a demo
            </styled.a>
          </HStack>
          <HStack gap='12px'>
            <Circle size='12px' bg='#19BF57' />
            <styled.span color='#FFF'>
              1000+{' '}
              <styled.span color='#A0AEC0'>
                creators have already started
              </styled.span>
            </styled.span>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}

export default App;
