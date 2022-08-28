import React, { useRef, useState } from 'react';

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  fn?: (bob: string) => void;
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) =>void
}

interface TextNode {
  text: string
}

export const TextField: React.FC<Props> = ({handleChange}) => {
  const [count, setCount] = useState<number | null>(5);
  const [redident, setResident] = useState<{ name: string }>({ name: 'Bob' });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  setResident({ name: 'Baby' });
  setCount(12);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange}/>
    </div>
  );
};
