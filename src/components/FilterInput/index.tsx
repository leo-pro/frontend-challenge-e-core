import { Flex, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface FilterInputProps {
  value: string;
  onChange: (values: string) => void;
}

export function FilterInput({ value, onChange }: FilterInputProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return (
    <Flex w="100%" gap={2}>
      <Input
        placeholder="Type a team name for search..."
        size="lg"
        width="100%"
        value={value}
        onChange={handleChange}
      />
    </Flex>
  );
}
