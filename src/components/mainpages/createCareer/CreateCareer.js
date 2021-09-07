import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { GlobalState } from "../../../GlobalState";
import { useHistory, useParams } from "react-router-dom";

const initialState = {
  career_id: "",
  title: "",
  qualification: "",
  role: "",
  _id: "",
};

function CreateCareer() {
  const state = useContext(GlobalState);
  const [product, setProduct] = useState(initialState);

  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;

  const history = useHistory();
  const param = useParams();

  const [products] = state.careersAPI.products;
  const [onEdit, setOnEdit] = useState(false);
  const [callback, setCallback] = state.careersAPI.callback;

  useEffect(() => {
    if (param.id) {
      setOnEdit(true);
      products.forEach((product) => {
        if (product._id === param.id) {
          setProduct(product);
        }
      });
    } else {
      setOnEdit(false);
      setProduct(initialState);
    }
  }, [param.id, products]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isAdmin) return alert("You're not an admin");

      if (onEdit) {
        await axios.put(
          `https://achieverscircle.herokuapp.com/api/careers/${product._id}`,
          { ...product },
          {
            headers: { Authorization: token },
          }
        );
      } else {
        await axios.post(
          "https://achieverscircle.herokuapp.com/api/careers",
          { ...product },
          {
            headers: { Authorization: token },
          }
        );
      }
      setCallback(!callback);
      history.push("/");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <div className="create_product">

      <form onSubmit={handleSubmit}>
        <h1>Create Career</h1>

        <div className="row">
          <label htmlFor="product_id">Position ID</label>
          <input
            type="text"
            name="career_id"
            id="career_id"
            required
            value={product.career_id}
            onChange={handleChangeInput}
            disabled={onEdit}
          />
        </div>

        <div className="row">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={product.title}
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="price">Qualifications</label>
          <input
            type="text"
            name="qualification"
            id="qualification"
            required
            value={product.qualification}
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="description">Roles</label>
          <textarea
            type="text"
            name="roles"
            id="roles"
            placeholder="separate each role using a ';'(semicolon) "
            required
            value={product.roles}
            rows="5"
            onChange={handleChangeInput}
          />
        </div>

        <button type="submit">{onEdit ? "Update" : "Create"}</button>
      </form>
    </div>
  );
}

export default CreateCareer;
