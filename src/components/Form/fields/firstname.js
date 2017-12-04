import { columnField } from '../../../helpers/dom'
import { nameValidator } from '../../../helpers/data'

export default value => columnField({ name: 'firstname', label: 'Firstname', value, validator: nameValidator })
