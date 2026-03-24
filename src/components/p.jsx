import React from 'react'
import { useState } from 'react'
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from './api'


const p = () => {


    const [form, setForm] = useState({
        email:"",
        password:"",
    })

    const [loading,setLoading] = useState(false)

    const [error,setError] = useState("")

    const navigate = useNavigate()


    function handleChange(e){

        setForm({
            ...form,
            [e.target.name]:[e.target.value],
        })

    }

    function handleSubmit(e) {
        e.preventDefault();
        setError("")
        setLoading(true)
    }


  return (
    <div>p</div>
  )
}

export default p