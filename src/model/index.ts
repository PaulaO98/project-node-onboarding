import  {User, UserSchema}  from './user.model';

function setupModels(sequelize:any){
    User.init(UserSchema,User.config(sequelize)),
    User.init(UserSchema,User.config(sequelize))
}

export default setupModels;