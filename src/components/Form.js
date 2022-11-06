import React,{useState} from 'react'

function Form() {
    const [form, setForm] = useState({name : "", surname : "", gender : "Erkek"})

    const handleChange = (event) => {
        setForm((prev) => ({...prev, [event.target.name] : event.target.value}));
    }

  return (
    <div>
        <div>
            <div>İsmi</div>
            <input placeholder='İsim' name = "name" value={form.name} onChange={handleChange} />
            <input placeholder='Soyisim' name='surname' value={form.surname} onChange={handleChange} />

            <div>
                İsim :<strong>{form.name} {form.surname}</strong>
            </div>
        </div>
        <br /><br />
        <div>
        <div>Cinsiyet</div>

            <select name="gender" id="" value={form.gender} onChange={handleChange}>
                <option value="Erkek" >Erkek</option>
                <option value="Kadın" >Kadın</option>
            </select>
        </div>
        <div>
                Cinsiyet :<strong> {form.gender} </strong>
            </div>
        <hr />
    </div>
  )
}

export default Form