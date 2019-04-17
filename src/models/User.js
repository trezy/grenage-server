// Module imports
import uuid from 'uuid/v4'





// Local imports
import { BaseModel } from './Base'
import {
  CharactersPresenter,
  UsersPresenter,
} from '../presenters'





class UserModel extends BaseModel {
  /***************************************************************************\
    Class Properties
  \***************************************************************************/

  presenter = UsersPresenter

  requiredAttributes = [
    'email',
    'password',
  ]

  type = 'users'





  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  render = () => {
    const safeAttributes = this.attributes

    delete safeAttributes.password

    return this.presenter.render({ ...safeAttributes })
  }
}





export { UserModel }
