import { Editable, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { LuCheck, LuPencilLine, LuX } from "react-icons/lu";

const EditableText = ({ defaultValue, handleEdit, index, date }) => {
  return (
    <Editable.Root
      defaultValue={defaultValue}
      onValueCommit={(value) => handleEdit(index, value.value, date)}
    >
      <Editable.Preview className="hover:bg-transparent">
        <Text className="text-sm font-medium text-gray-700y max-w-sm w-[200px] md:w-[300px] capitalize">
          {defaultValue}
        </Text>
      </Editable.Preview>
      <Editable.Input />
      <Editable.Control>
        <Editable.EditTrigger asChild>
          <IconButton variant="ghost" size="xs">
            <LuPencilLine />
          </IconButton>
        </Editable.EditTrigger>
        <Editable.CancelTrigger asChild>
          <IconButton variant="outline" size="xs">
            <LuX />
          </IconButton>
        </Editable.CancelTrigger>
        <Editable.SubmitTrigger asChild>
          <IconButton variant="outline" size="xs">
            <LuCheck />
          </IconButton>
        </Editable.SubmitTrigger>
      </Editable.Control>
    </Editable.Root>
  );
};

export default EditableText;
