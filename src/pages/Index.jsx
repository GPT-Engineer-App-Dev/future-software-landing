import { Box, Flex, Heading, Text, Button, Image, Link } from '@chakra-ui/react';
import { FaRegCalendarAlt } from 'react-icons/fa';

const Index = () => {
  return (
    <Box bg="gray.50" minH="100vh" p={5}>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Image src="/images/future-software-event.jpg" alt="Future of Software" boxSize="200px" objectFit="cover" borderRadius="full" mb={4} />
        <Heading mb={4}>The Future of Software</Heading>
        <Text fontSize="xl" mb={6}>Join us to explore groundbreaking innovations by leading LLM builders.</Text>
        <Button colorScheme="blue" leftIcon={<FaRegCalendarAlt />} as={Link} href="https://typeform.com" isExternal>
          Sign Up for the Event
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;