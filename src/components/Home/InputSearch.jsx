import React from 'react'
import { useForm } from 'react-hook-form'

const InputSearch = () => {

  const {handleSubmit, register, } = useForm()

  const submit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='form-home'>

    </form>
  )
}

export default InputSearch