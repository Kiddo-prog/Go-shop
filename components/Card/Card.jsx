import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "next/link";

// { name, price, permalink, id }
export default function Card({ name, price, permalink, id }) {
  return (
    <Box>
      <Link href={`product/${id}/${permalink}`}>
        <Heading as="h3">{name}</Heading>
        <Text>{price.formatted_with_symbol}</Text>
      </Link>
    </Box>
  );
}
