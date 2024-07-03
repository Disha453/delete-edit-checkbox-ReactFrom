
import './App.css';
import { useState } from 'react';

const Hello = () => {
  const [student, setStudent] = useState({ uname: "", password: "", color: "", dob: "", checkbox: "" });



  const [isEdit, setIsEdit] = useState(-1);

  const [data, setData] = useState(JSON.parse(localStorage.getItem("disha")) || [])

  const fontChange = (e) => {
    console.log(e.target.name)
    setStudent({ ...student, [e.target.name]: e.target.value })
  }


  const fontSubmit = () => {


    if (isEdit !== -1) {
      const update = data.map((item, index) => {
        if (isEdit === index) {
          return student

        }
        else { return item };
      })
      setData(update);

    }

    else { setData([...data, student]) }
    localStorage.setItem("disha", JSON.stringify([...data, student]));

  }


  console.log(student)
  console.log(data)


  //delete recode code
  const deleteRecord = (indexx) => {
    const Data = data.filter((item, index) => { return index !== indexx });
    setData(Data)
    console.log("student", Data)
    localStorage.setItem("disha", JSON.stringify(Data));
  }



  //edit button code
  const handleEdit = (idx) => {

    setIsEdit(idx);
    const record = data.find((item, index) => { return (index === idx) });
    setStudent(record);
    console.log(record);

  }




  //checkbox
  const [langg, setLangg] = useState([]);

  const checkSubmit = (e) => {

    if (langg.includes(e.target.value)) {
      setLangg([...langg.filter((item) => item !== e.target.value)]);
    }
    else {

      setLangg([...langg, e.target.value]);
    }

  }

  console.log(langg);


  const checkChange = (e) => {

    if (langg.length === data?.length) {

      setLangg([]);
    } else {
      setLangg(data.map((item) => item.uname));
    }
  }




  return (


    <div style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/abstract-background-images-wallpaper-ai-generated_643360-60993.jpg)', padding: "20%", backgroundSize: "cover" }}>
      <div style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>

        <div>
          <label htmlFor="uname" ><b>Uname:</b></label>
          <input type="text" id="uname" name="uname" value={student.uname} onChange={(e) => fontChange(e)} style={{ borderRadius: "8PX", marginLeft: "9px", height: "30px", width: "300px", backgroundColor: "transparent" }} />
        </div>


        <div style={{ marginTop: "5%" }}>
          <label htmlFor="password"><b>Password:</b></label>
          <input type="password" id="password" name="password" value={student.password} onChange={(e) => fontChange(e)} style={{ borderRadius: "8PX", marginLeft: "9px", height: "30px", width: "300px", backgroundColor: "transparent" }} />
        </div>


        <div style={{ marginTop: "5%" }}>
          <lable htmlFor="color"><b>Color:</b></lable>
          <input type="color" id="color" name="color" value={student.color} onChange={(e) => fontChange(e)} style={{ borderRadius: "8PX", marginLeft: "9px", height: "30px", width: "300px", backgroundColor: "transparent" }} />
        </div>


        <div style={{ marginTop: "5%", }}>
          <lable htmlFor="dob"><b>Dob:</b></lable>
          <input type="date" id="dob" name="dob" value={student.dob} onChange={(e) => fontChange(e)} style={{ borderRadius: "8PX", marginLeft: "9px", height: "30px", width: "300px", backgroundColor: "transparent" }} />
        </div>


        <button type='submit' onClick={fontSubmit} style={{ marginTop: "5%", backgroundColor: "transparent", height: "40px", width: "90px", borderRadius: "8PX", color: "#1b47cf", boxShadow: "-5px -5px 5px #7a8ec4 inset" }}><b>Submit</b></button>
      </div>





      <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>

        <table  >
          <thead>

            <th>User Name:</th>
            <th>Password:</th>
            <th>Color:</th>
            <th>Dob:</th>
            <th>Checkbox:<input type='checkbox' value="all" checked={langg.length === data?.length} onChange={(e) => checkChange(e)} /></th>

          </thead>

          <tbody>
            {data.map((item, index) => {
              return (

                <tr>

                  <td>{item.uname}</td>
                  <td>{item.password}</td>
                  <td>{item.color}</td>
                  <td>{item.dob}</td>
                  <td>{item.checkbox}<input type='checkbox' value={item.uname} checked={langg.includes(item.uname)} onChange={(e) => checkSubmit(e)} /></td>
                  <td><button type='delet' onClick={() => deleteRecord(index)}>Delete</button></td>
                  <td><button type='edit' onClick={() => handleEdit(index)}>Edit</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>



    </div>



  )
}
export default Hello;