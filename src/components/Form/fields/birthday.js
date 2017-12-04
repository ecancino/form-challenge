import { columnField } from '../../../helpers/dom'
import { birthdayValidator } from '../../../helpers/data'

export default value => columnField({ name: 'birthday', label: 'Birthday', value, validator: birthdayValidator })
