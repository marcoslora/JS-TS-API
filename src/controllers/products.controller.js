import e from "express";
import { getConnection, sql, queries } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProducts);
    res.json(result.recordset);
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};
export const createNewProduct = async (req, res) => {
  const { name, description } = req.body;
  let { quantity } = req.body;

  if (name == null || description == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }
  if (quantity == null) quantity = 0;
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("quantity", sql.Int, quantity)
      .query(queries.addNewProduct);
    res.json({ name, description, quantity });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  if (id == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", id)
      .query(queries.getProductsById);
    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};
export const updateProductById = async (req, res) => {
  const { name, description, quantity } = req.body;
  const { id } = req.params;
  if (name == null || description == null || id == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("quantity", sql.Int, quantity)
      .input("id", id)
      .query(queries.updateProducts);
    res.json({ name, description, quantity });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};
export const deleteProductById = async (req, res) => {
  const { id } = req.params;
  if (id == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }
  try {
    const pool = await getConnection();
    await pool.request().input("id", id).query(queries.deleteProduct);
    res.json({ msg: "Product deleted successfully", id });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};
