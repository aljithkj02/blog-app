import { Heading, HStack } from "@chakra-ui/react";

const Logo = () => {
    return (
        <HStack >
            <Heading as='b' color='#009cff'>
                Blog
            </Heading>
            <Heading as='b' color='black'>
                App
            </Heading>
        </HStack>
    )
}
export default Logo;