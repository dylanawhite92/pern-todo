const ListToDos = () => {
  return (
    <>
      <table class='table mt-5 text-center'>
        <thead>
          <tr>
            <th scope='col'>Description</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* Keeping for reference */}
          {/* <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default ListToDos;
