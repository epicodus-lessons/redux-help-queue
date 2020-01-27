import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('help queue actions', () => {
  it('addTicket should create ADD_TICKET action', () => {
    expect(actions.addTicket({names: 'Jo and Jasmine', location: '3E', issue: 'Redux not working!', id: 1})).toEqual({
      type: c.ADD_TICKET,
      names: 'Jo and Jasmine',
      location: '3E',
      issue: 'Redux not working!',
      id: 1
    })
  })

  it('deleteTicket should create DELETE_TICKET action', () => {
    expect(actions.deleteTicket(1)).toEqual({
      type: c.DELETE_TICKET,
      id: 1
    })
  })

  it('toggleFrom should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    })
  })
})