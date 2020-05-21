export const ACTIONS = {
  get_data: 'get_data'
}

export const get = () => {
  return {type: ACTIONS.get_data, payload: 'DATA'}
}