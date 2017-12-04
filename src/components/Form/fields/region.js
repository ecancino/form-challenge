import { columnSelect } from '../../../helpers/dom'
import { regionValidator } from '../../../helpers/data'

export default (value, options) => columnSelect({ name: 'region', label: 'Region', options, value, validator: regionValidator })
