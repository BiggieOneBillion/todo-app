import { Button } from "../ui/button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogRoot,
  DialogTrigger,
} from "../ui/dialog";
import { LuDelete } from "react-icons/lu";
import { useState } from "react";

export const DeleteTodo = ({ handleDelete, date }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    handleDelete(date);
    setOpen(false);
  };
  return (
    <DialogRoot size={"sm"} open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DialogTrigger asChild>
        <span>
          <LuDelete />
        </span>
      </DialogTrigger>
      <DialogContent className=" m-2">
        <DialogBody>
          <p>
            Continuing with this action would delete any activity associated
            with this date.
            <br />
            <br /> Do you want to proceed?
          </p>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button
              border={"1px solid black"}
              padding={"10px 20px"}
              variant="outline"
            >
              Cancel
            </Button>
          </DialogActionTrigger>
          <Button
            // border={"1px solid black"}
            padding={"10px 20px"}
            variant={"solid"}
            colorPalette="red"
            backgroundColor={"red"}
            color={"white"}
            onClick={handleClick}
          >
            Delete
          </Button>
        </DialogFooter>
        {/* <DialogCloseTrigger /> */}
      </DialogContent>
    </DialogRoot>
  );
};
