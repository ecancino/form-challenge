import { columnField } from '../../../helpers/dom'
import { nameValidator } from '../../../helpers/data'

export default value => columnField({ name: 'lastname', label: 'Lastname', value, validator: nameValidator })
