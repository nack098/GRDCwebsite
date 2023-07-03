"use client";

import Link from "next/link";
import Image from "next/image";
import { Box, Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";

export default function NewsCard({ data }: { data: any }) {
  return (
    <Card
      as={Link}
      href={`news/${data.slug}`}
      maxW="sm"
      marginX="6px"
      height={{
        md: "502.8px",
        base: "251.4px",
      }}
      width={{
        md: "384px",
        base: "192px",
      }}
      _light={{
        background: "skyblue",
      }}
      display={"inline-flex"}
      flexShrink="0"
    >
      <CardBody>
        <Image
          src={data.heroImage ? data.heroImage : "/next.svg"}
          alt="Thumbnail"
          className="md:h-[150px] md:w-[344px] h-[75px] w-[172px]"
          width={344}
          height={150}
        />
        <Heading
          fontSize={{ md: "2xl", base: "xl" }}
          display={{ md: "none", base: "flex" }}
          textOverflow={"ellipsis"}
          overflow="hidden"
          whiteSpace={"nowrap"}
          marginTop="12px"
        >
          {data.title}
        </Heading>
        <Box
          height={224}
          width={344}
          rounded={"lg"}
          display={{ md: "flex", base: "none" }}
          padding={"12px"}
          marginBottom={"12px"}
          backgroundColor="gray.800"
          _light={{
            backgroundColor: "white",
          }}
          flexDirection={"column"}
        >
          <Heading
            fontSize={{ md: "2xl", base: "xl" }}
            textOverflow={"ellipsis"}
            overflow="hidden"
            whiteSpace={"nowrap"}
            marginTop="12px"
          >
            {data.title}
          </Heading>
          <Text
            textOverflow={"ellipsis"}
            overflow="hidden"
            whiteSpace={"nowrap"}
          >
            {data.description ? data.description : "No Description"}
          </Text>
        </Box>
        <Stack direction={"row"} justify={"space-between"}>
          <div className="md:text-lg text-xs">
            <p className="font-bold">Created At</p>
            <p>{data.createdAt}</p>
          </div>
          <div className="md:text-lg text-xs text-right">
            <p className="font-bold">Updated At</p>
            <p>{data.updatedAt}</p>
          </div>
        </Stack>
      </CardBody>
    </Card>
  );
}
