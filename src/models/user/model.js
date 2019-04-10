import mongoose from 'mongoose'
import schema from './schema'

const User = mongoose.model('User', schema)
export default User
