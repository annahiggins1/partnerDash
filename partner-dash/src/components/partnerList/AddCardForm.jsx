function AddCardForm({ handleOnSubmit }) {
    return (
      <div className="form-wrapper">
        <form onSubmit={handleOnSubmit}>
          <br />
          <input type="text" name="name" placeholder="Name" required />
          <br />
          <textarea type="text" name="description" placeholder="Description" required />
          <br />
          <input type="text" name="logo" placeholder="Logo URL" required />
          <input type="checkbox" name="active" /> Active
          <br />
          <button type="submit">Add Card</button>
        </form>
      </div>
    );
}

export default AddCardForm;