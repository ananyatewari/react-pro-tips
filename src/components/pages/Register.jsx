import React, { useState } from 'react'
import "../../App.css"

export default function Register() {
    const [input, setInput] = useState({
      first: "",
      last: "",
      email: "",
      phone: ""
    })

    const [check, setCheck] = useState(false)
    const [submit, setSubmit] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault()
      setSubmit(true)
      if (input.first && input.last && input.email && input.phone && input.phone.length==10) {
        setCheck(true)
      }
    }

  return (
    <div>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <h2>{submit && check ? "Registration successful" : null}</h2>
          
            <h4>First name</h4>
            <input type="text" placeholder='Enter your first name' onChange={(e) => setInput({...input,first:e.target.value})} value={input.first}/>
            <h5>{submit && !input.first ? "Please enter first name" : null}</h5>
            <h4>Last name</h4>
            <input type="text" placeholder='Enter your last name' onChange={(e) => setInput({...input,last:e.target.value})} value={input.last}/>
            <h5>{submit && !input.last ? "Please enter last name" : null}</h5>

            <h4>Email address</h4>
            <input type="email" name="" id="" placeholder='Enter your email ID' onChange={(e) => setInput({...input,email:e.target.value})} value={input.email}/>
            <h5>{submit && !input.email ? "Please enter email ID" : null}</h5>

            <h4>Phone number</h4>
            <input type="tel" name="" id="" placeholder='Enter your phone number' onChange={(e) => setInput({...input,phone:e.target.value})}value={input.phone}/>
            <h5>{submit && !input.phone ? "Please enter phone number" : null}</h5>
            <h5>{submit && input.phone.length != 10 ? "Please enter valid phone number" : null}</h5>

            <button type="submit">Register</button>
        </form>
    </div>
  )
}
