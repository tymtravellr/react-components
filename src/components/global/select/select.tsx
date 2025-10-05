interface SelectProps {
  option: {
    title: string,
    value: string
  }[]
}

const Select = ({ option }: SelectProps) => {
  const defaultValue = option?.length > 0 && option[0]?.value;
  return (
    <select
      defaultValue={defaultValue || undefined}
      className="border border-border rounded-lg p-1"
    >
      {
        option?.map((opt, index) => <option key={index} value={opt.value}> {opt.title} </option>)
      }
    </select>
  )
}

export default Select