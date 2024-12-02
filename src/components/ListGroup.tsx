function ListGroup() {
  const items = ["Harare", "Bulawayo", "Mutare", "Gweru", "Victoria Falls"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
