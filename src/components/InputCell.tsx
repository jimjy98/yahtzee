interface Props {
  value?: string;
  setValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputCell({ value, setValue }: Props) {
  
  return (
    <td>
      <input value={value} onChange={setValue} />
    </td>
  );
}
