function AddCardForm({ handleOnSubmit }) {
    return (
        <form onSubmit={handleOnSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="text" name="description" placeholder="Description" required />
          <input type="text" name="logo" placeholder="Logo URL" required />
          <input type="checkbox" name="active" /> Active
          <button type="submit">Add Card</button>
        </form>
    );
}

export default AddCardForm;