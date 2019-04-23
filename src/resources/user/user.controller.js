import User from './user.model'

export const list = async (req, res, next) => {
  try {
    const users = await User.find({})
    res.status(200).json({ users })
  } catch (error) {
    next(error)
  }
}

export const create = async (req, res, next) => {
  try {
    const params = strongParams(req.body)

    const user = new User(req)
    await user.save()
    res.status(200).json({ user })
  } catch (error) {
    next(error)
  }
}

export default {
  list,
  create,
}
