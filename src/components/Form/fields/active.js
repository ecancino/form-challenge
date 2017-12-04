import { columnField } from '../../../helpers/dom'

export default checked => columnField({ name: 'active', label: 'Active', checked, type: 'checkbox' })
