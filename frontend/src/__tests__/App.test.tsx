import {render, screen} from '@testing-library/react'
import {  userEvent } from '@testing-library/user-event'
import App from "../App.tsx";


describe('when the home screen loads',()=>{
  it('displays a save button', ()=>{
    render(<App/>)
    expect(screen.getByRole("button", {name:"save"})).toBeInTheDocument()


  })
})
