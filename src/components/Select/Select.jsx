function Select({ selectHendler }) {
  return (
    <select onChange={selectHendler}>
      <option value="По возрастанию">По возрастанию</option>
      <option value="По убыванию">По убыванию</option>
    </select>
  );
}

export default Select;
