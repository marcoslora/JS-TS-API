export const queries = {
  insertProducts:
    "INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)",
  getAllProducts: "SELECT * FROM Products",
  getProductsById: "SELECT * FROM Products WHERE id = @id",
  updateProducts:
    "UPDATE Products SET name = @name, description = @description, quantity = @quantity WHERE id = @id",
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE id = @id",
};
