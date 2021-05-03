import React from 'react'

import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from 'react-testing-library'

import Container from './Container'
import QuizSelection from './QuizSelection'

afterEach(cleanup)

describe('Check that redirection works', () => {
  it('has to redirect', () => {

    const redirectUrl = '/'
    const data = { permissions: null }

    const { container } = render(
      <Container
        ComponentWithRedirection={() => <QuizSelection data={data} />}
        RedirectUrl={redirectUrl}
      />
    )

    expect(container.innerHTML).toEqual(
      expect.stringContaining(redirectUrl)
    )
  })
})