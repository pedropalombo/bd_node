module.exports = mongoose => {
  const Produto = mongoose.model(
    "produto",
    mongoose.Schema(
      {
        title: String,
        price: Number,
        description: String
      },
      { timestamps: true }
    )
  );
  return Produto;
};