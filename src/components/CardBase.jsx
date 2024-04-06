import { Card, Metric, Text, Flex, ProgressBar } from "@tremor/react";
import React from "react";

const CardBase = ({ title, metric, percent }) => {
  return (
    <Card className="max-w-xs mx-auto" decoration="left" decorationColor="blue">
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
   {/*   <Flex marginTop="mt-4">
        <Text>{percent} %</Text>
  </Flex> */}
    </Card>
  );
};

export default CardBase;
