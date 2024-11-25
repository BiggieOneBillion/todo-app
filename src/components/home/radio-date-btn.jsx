import { HStack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "../ui/radio";

const RadioDateBtn = () => {
  return (
    <div className="text-black">
      <RadioGroup defaultValue="1">
        <HStack gap="6">
          <Radio value="1">Today</Radio>
          <HStack gap={'6'} display={'none'}>
            <Radio value="1">Option 1</Radio>
            <Radio value="2">Option 2</Radio>
            <Radio value="3">Option 3</Radio>
          </HStack>
        </HStack>
      </RadioGroup>
    </div>
  );
};

export default RadioDateBtn;
