import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
  Table,
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

let x=true;
export default function  Home() {
  // let tableData = axios.get("http://localhost:8000/");
  let [tableData, setTableData] = useState([]);
  let loadTableData = async () => {

        let response = await axios.get("http://localhost:8000/");
        let temp = [];
        for(let i=0;i<response.data.length;i++){
          let inz= response.data[i];
          let fData = {
            Uname: inz.name,
            Uage: inz.age,
            Unumber: inz.Pnumber,
          }
          temp.push(fData);
        }
        setTableData([...tableData,...temp]);

  }
  if(x){
    loadTableData();
    x=false;
  }

  let data = async (e) => {
    e.preventDefault();

    let formData = {
      Uname: e.target.elements.UnameX.value,
      Uage: e.target.elements.UageX.value,
      Unumber: e.target.elements.UnumberX.value,
    };

    
    toast("Post request sent", {
      position: "top-center",
      autoClose: 3000,
      theme: "dark",
    });
    
    setTableData([...tableData, formData]);
    
    e.target.reset();
    
    await axios.post("http://localhost:8000/insurt", formData);
  };

  return (
    <>
    
      <form className="flex max-w-md flex-col gap-4" onSubmit={data}>
        <div className="border-gray-300">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput name="UnameX" id="name" type="text" placeholder="Enter Your Name." required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="age" value="Your Age" />
            </div>
            <TextInput name="UageX" id="age" type="text" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="number" value="Your Number" />
            </div>
            <TextInput name="UnumberX" id="number" type="text" required />
          </div>
          <Button type="submit">Submit</Button>
        </div>
      </form>

      <div className="overflow-x-auto" >
        <Table striped >
          <Table.Head >
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Age</Table.HeadCell>
            <Table.HeadCell>Number</Table.HeadCell>
            <Table.HeadCell>Edit</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {tableData.map((item, index) => (
              <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.Uname}
                </Table.Cell>
                <Table.Cell>{item.Uage}</Table.Cell>
                <Table.Cell>{item.Unumber}</Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </a>
                </Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Delete
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      <ToastContainer />
    </>
  );
}