import { columnField } from '../../../helpers/dom'
import { emailValidator } from '../../../helpers/data'

export default value => columnField({ name: 'email', label: 'Email', value, validator: emailValidator })
