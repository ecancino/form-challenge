import { columnRadio } from '../../../helpers/dom'

export default gender => columnRadio({ name: 'gender', label: 'Gender', options: [
  { id: 'female', name: 'gender', label: 'Female', value: 'female', checked: gender === 'female'  },
  { id: 'male', name: 'gender', label: 'Male', value: 'male', checked: gender === 'male' }
]})
