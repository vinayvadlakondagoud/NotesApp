const noteSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    userId: mongoose.Schema.Types.ObjectId,
  },
  { timestamps: true }
);