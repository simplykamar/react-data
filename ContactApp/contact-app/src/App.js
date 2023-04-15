import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import EditContact from './components/EditContact';

import {v4 as uuid} from 'uuid';
import {useState,useEffect} from 'react'
import api from './api/contact';

function App() {
    // const LOCAL_STORAGE_KEY = "contacts";
    // const [contacts,setContact] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);
      const [contacts,setContact] = useState([]);
      const [searchTerm,setSearchTerm] = useState("");
      const [searchResult,setSearchResult] = useState([]);

    async function addContactHandler(contact){
      // setContact([...contacts,{id:uuid(),...contact}]);
      const request = {
        id:uuid(),
        ...contact,
      };
      
      const response = await api.post("/contacts",request)
      setContact([...contacts,response.data])
    }
    async function removeContactHandler(id){
      await api.delete(`/contacts/${id}`)
      const updatedData = contacts.filter((contact)=>contact.id!==id)
      setContact(updatedData)
    }
    const retriveContacts = async () =>{
        const response = await api.get("/contacts");
        return response.data;
    }
    useEffect(()=>{
      // localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
      const getAllContacts = async ()=>{
        const allContacts = await  retriveContacts()
        if (allContacts) setContact(allContacts);
      }
      getAllContacts();
    },[])
    const editContactHandler = async (contact)=>{
      const response = await api.put(`/contacts/${contact.id}`,contact)
      setContact(contacts.map((contact)=>{
        return contact.id == response.data.id ? {...response.data} : contact
      }));
    }

    const searchHandler = (searchKey)=>{
        setSearchTerm(searchKey);
        console.log(searchTerm,searchKey);
        let data=null;
        if (searchTerm !== ""){
           data = contacts.filter(contact=>{
            return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
            // return (contact.name.includes(searchTerm)||
            // contact.contact.includes(searchTerm))

        });

        setSearchResult(data);
      }else setSearchResult(contacts);
    }

  return (
    <div className="App">
      <Header/>
    <BrowserRouter>
    <Routes>
      <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}/>
      <Route path="/" element={<ContactList contacts={searchTerm.length < 1 ? contacts : searchResult} deleteContact={removeContactHandler} searchTerm={searchTerm} searchHandler={searchHandler}/>}/>
      <Route path="/edit/:id" element={<EditContact contacts={contacts} editContact={editContactHandler}/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
