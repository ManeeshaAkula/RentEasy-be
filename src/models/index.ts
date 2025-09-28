import { sequelize } from '../config/database'
import { User, UserModel } from './user.model'

// init all models
const UserInstance = UserModel(sequelize)

export {
    sequelize,
    UserInstance as User
}
