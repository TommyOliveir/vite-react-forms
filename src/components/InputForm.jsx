import React from "react";


export default function InputForm() {
  const [formData, setFormData] = React.useState(() =>JSON.parse(localStorage.getItem("notes"))
    || {
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isAccepted: true,
    status: "",
    favColor: ""
  });

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(formData))
  }, [formData])

  function handleChange(event) {
    console.log(formData)
    const { name, value, checked, type } = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Welcome</h2>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />
        <div className="radio-list">
          <div className="radio-item">
            <input
              type="radio"
              id="single"
              name="status"
              value="single"
              checked={formData.status === "single"}
              onChange={handleChange}
            />
            <label htmlFor="single">single</label>
          </div>

          <div className="radio-item">
            <input
              type="radio"
              id="married"
              name="status"
              value="married"
              checked={formData.status === "married"}
              onChange={handleChange}
            />
            <label htmlFor="married">married</label>
          </div>

        </div>




        <label htmlFor="favColor" className="favColor-text">What is your favorite color?</label>
        <br />
        <select
          id="favColor"
          value={formData.favColor}
          onChange={handleChange}
          name="favColor"

        >
          <option value="">select</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <div className="terms">
          <input
            className="checkbox"
            type="checkbox"
            onChange={handleChange}
            name="isAccepted"
            id="isAccepted"
            checked={formData.isAccepted}

          />
          <label htmlFor="isAccepted">Accept Terms and Condition</label>
        </div>
        <button>Submit</button>
      </form>
      name: {formData.firstName}
    </>
  );
}
