import React from 'react'
export default function Form(){
    const [formData, setFormData] = React.useState({firstName: "", lastName: "", email: ""})

    console.log(formData)

    function dataUpdate(event){
        setFormData(prevForm =>{
            return{
                ...formData,
             [event.target.name] : event.target.value
            }
        })
    }


    return (
        <form>
            <input 
            type="text"
            placeholder="first name"
            onChange={dataUpdate}
            name="firstName"
            value={formData.firstName}
            />
            type="text"
            placeholder="last name"
            onChange={dataUpdate}
            name="lastName"
            value={formData.lastName}

            />
            <input 
            type="text"
            placeholder="email "
            onChange={dataUpdate}
            name="email"
            value={formData.email}

            />
        </form>
        )
    }
    