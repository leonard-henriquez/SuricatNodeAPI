import User from '../../models/user'

const list = async (req, res, next) => {
  try {
    const users = await User.find({})
    res.status(200).json({ users })
  } catch (error) {
    next(error)
  }
}

export default list
