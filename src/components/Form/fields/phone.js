import { columnField } from '../../../helpers/dom'
import { phoneValidator } from '../../../helpers/data'

export default value => columnField({ name: 'phone', label: 'Phone', value, validator: phoneValidator })
