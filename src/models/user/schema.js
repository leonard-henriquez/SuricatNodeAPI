import { Schema } from 'mongoose'

const schema = new Schema({
  firstName: {
    type: String,
    required: [true],
  },
  lastName: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true],
  },
  password: {
    type: String,
    required: [true],
  },
})

export default schema
