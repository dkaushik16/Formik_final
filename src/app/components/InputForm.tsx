'use client'
import React from 'react'

export default function InputForm({type,formik,id}:any) {
  return (
    <div>
      <form onSubmit={formik?.handleSubmit}>

      <input
        id={id}
        type={type}
        value={formik?.values?.id}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        className='w-[30%] border border-none rounded-md p-2 text-black '
      />   
      </form>
    </div>
  )
}
