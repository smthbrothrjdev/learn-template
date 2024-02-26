import {render, screen} from '@testing-library/react'
import App from "../App";
import {it, describe} from 'vitest'


describe('when the home screen loads',()=>{
  it('displays a save button', ()=>{
    render(<App/>)
    expect(screen.getByRole("button", {name:"save"})).toBeInTheDocument()


  })
})
