import { Heading, HStack } from "@chakra-ui/react";

const Logo = () => {
    return (
        <HStack  >
            <Heading fontWeight={400} color='#009cff'>
                Blog
            </Heading>
            <Heading fontWeight={400} color='black'>
                App
            </Heading>
        </HStack>
    )
}
export default Logo;