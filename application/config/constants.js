import { createActionType } from '@application/utils'

export default {
  ...createActionType('GET_UNITS'),
  ...createActionType('GET_UNIT_TYPES')
}