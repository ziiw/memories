import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.h1`
  color: grey;
`

const Index = () => {
  return (
    <>
      <Title>Memories</Title>
      <Link href="/about"><a>About</a></Link>
    </>
  )
}

export default Index
