import { Badge, Button, Input } from "@chakra-ui/react";
import { Field } from "../../components/ui/field";
import { useState } from "react";

const InputBox = ({ addToList }) => {
  const [inputValue, setInputValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  const handleUpdateList = () => {
    setInvalidInput(false);

    if (inputValue !== "") {
      addToList({ status: "pending", activity: inputValue, time: timeValue });
      setInputValue("");
      setTimeValue("");
      return;
    }
    setInvalidInput(true);
    setInputValue("");
    setTimeValue("");
  };
  return (
    <div className="w-full md:max-w-xl text-black space-y-3">
      <Field
        label="Create Activity"
        required
        invalid={invalidInput}
        helperText={!invalidInput && "Write the activity"}
        errorText="Please add an activity"
      >
        <Input
          className="w-full md:w-[400px] px-3 border"
          placeholder="Enter your activity"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Field>
      <Field
        label="Add time"
        helperText={"Want to be more clear, add a time to do it"}
        optionalText={
          <Badge size="xs" variant="surface">
            Optional
          </Badge>
        }
      >
        <Input
          type="time"
          className="md:w-[400px] px-3 border"
          value={timeValue}
          onChange={(e) => setTimeValue(e.target.value)}
        />
      </Field>
      <div className="flex justify-end">
        <Button
          variant="solid"
          bgColor={"black"}
          color={"white"}
          paddingInline={5}
          fontSize={"14px"}
          onClick={handleUpdateList} // adds item to the todo list
        >
          Add to list
        </Button>
      </div>
    </div>
  );
};

export default InputBox;
