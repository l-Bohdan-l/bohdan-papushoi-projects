import './App.css';
import { useState, useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from 'nanoid';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// movies
// import Home from './pages/Home';
// import Movies from './pages/Movies';
// import MovieDetailPage from './pages/MovieDetailPage';
// import Cast from './components/Movies/Cast/Cast';
// import Reviews from './components/Movies/Reviews/Reviews';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
// import {
  //   // addContact,
  //   deleteContact
  // } from './redux/contacts/contactsSlice';
  import { changeFilterValue } from './redux/contacts/filterSlice';
import { fetchContacts, addContact, deleteContact } from './redux/contacts/operations';
import { useAddContactMutation, useGetContactsQuery } from './redux/contacts/contactsApi';
/////////////////////////////////////////////////////////////////////////
//images
// import { SearchBar } from './components/FindImage/SearchBar/SearchBar';
// import { ImageGallery } from './components/FindImage/ImageGallery/ImageGallery';
// import { fetchImg } from './services/fetchImg';
// import {Button} from './components/FindImage/Button/Button.jsx'
// import { ToastContainer, toast } from 'react-toastify';
// import { ColorRing } from 'react-loader-spinner';

// Contacts
import { lazy } from 'react';

import { ContactForm } from './components/Contacts/ContactForm/ContactForm';
import { ContactList } from './components/Contacts/ContactList/ContactList';
import { Filter } from './components/Contacts/Filter/Filter';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { contactsSelector, filterSelector } from './redux/contacts/selectors/selectors';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import { clearToken, setCredentials, setRefetchedCredentials, useGetCurrentUserQuery } from './redux/authSlice';
import { useAuth } from './redux/hooks/useAuth';
import { PublicRoute, RestrictedRoute } from './components/Contacts/PublicRoute';
import { PrivateRoute } from './components/Contacts/PrivateRoute';
import { Error } from './components/Contacts/Error';
// import ContactPage from './pages/ContactPage';
// import LoginPage from './pages/LoginPage';
// import Registration from './pages/Registration';
const Home = lazy(() => import('./pages/Home'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const Registration = lazy(() => import('./pages/Registration'))
// movies

// let router = createBrowserRouter([
//   {
//     path: "/",
//     // loader: () => ({ message: "Hello Data Router!" }),
//     element: <SharedLayout />,
//     children: [
//       {
//         // loader: () => import("./pages/Home"),
//         element: <Home />,
//         index: true,
//     },
//     {
//       path: "movies",
//       // loader: () => import("./pages/Movies"),
//       element: <Movies />,
//     },
//     {
//       path: "movies/:movieId",
//       // loader: () => import("./pages/MovieDetailPage"),
//       element: <MovieDetailPage />,
//       children: [
//         {
//           path: "cast",
//           // loader: () => import("./pages/Cast"),
//           element: <Cast/>,
//         },
//         {
//           path: "reviews",
//           // loader: () => import("./pages/Reviews"),
//           element: <Reviews />,
//         },
//       ],
//     },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <>
//       <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
//       <ToastContainer
//           position="top-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light" />
//     </>
//   );
// }

//Images

// function App() {
//   const [images, setImages] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [page, setPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);


  
//   useEffect(() => {
//     if (searchQuery === '') {
//       return;
//     }
//     setIsLoading(true);
//     setTimeout(() => {
//       fetchImg(searchQuery, page).then(res => {

//         setImages(prevState => {
//           return[...prevState, ...res.data.hits]
//         });
//       })
        
      
//       .catch(error => console.log(error))
//       .finally(() => setIsLoading(false));
      
//     }, 1000);
//   }, [searchQuery, page]);

  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//       if (e.currentTarget.elements.searchQuery.value.trim() === '') {
//         toast.error('Enter search query');
//       }
//       setSearchQuery(e.currentTarget.elements.searchQuery.value);
//       setPage(1);
//       setImages([]);
//     };
  
//     const handleLoadMore = () => {
//       setPage(prevState => prevState + 1);
//     };
    
//     return (
//       <>
//         <SearchBar onSubmit={handleSubmit} />
//         {images.length === 0 && searchQuery !== '' && isLoading=== false && <h2 className='emptySearchQueryMsg'>No images found</h2>}
//         <ImageGallery images={images} />
//         {isLoading === true && <ColorRing
//           visible={true}
//           height="80"
//           width="80"
//           ariaLabel="blocks-loading"
//           wrapperStyle={{
//             display: 'block',
//             margin: '0 auto',
//           }}
//           wrapperClass="blocks-wrapper"
//           colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />}
//         {images.length > 0 && <Button loadMore={handleLoadMore} />}
//         <ToastContainer
//           position="top-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light" />
//       </>
//     )
//   }

// Contacts async redux

let router = createBrowserRouter([
  {
    path: "/",
    // loader: () => ({ message: "Hello Data Router!" }),
    element: <SharedLayout />,
    errorElement: <Error />,
    children: [
      {
        // loader: () => import("./pages/Home"),
        element: <PublicRoute component={Home}/>,
        index: true,
    },
    {
      path: "contacts",
      // loader: () => import("./pages/Movies"),
      element: <PrivateRoute component={ContactPage} redirectTo='/login'/>,
    },
    {
      path: "login",
      element: <PublicRoute restricted component={ LoginPage } redirectTo='/contacts'/>,
      },
    {
      path: "register",
      element: <PublicRoute restricted component={ Registration } redirectTo='/contacts'/>,
      }, 
    ],   
  },
]);

function App() {
  const {token} = useAuth();
  const { data } = useGetCurrentUserQuery(undefined, { skip: !token });
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setRefetchedCredentials(data));
      return
    }
    return
   }, [data, dispatch]);

  return (  
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />      
    </PersistGate>
  );
}

//Contacts rtk query
// function App() {
//   const dispatch = useDispatch();
//   // const contacts = useSelector(contactsSelector);
//   const filterValue = useSelector(filterSelector);

//   const { data: contacts, isSuccess } = useGetContactsQuery();
//   const [addContact, {data, error: contactError, isSuccess: addContactSuccess}] = useAddContactMutation();

//   // useEffect(() => { 
//   //   dispatch(fetchContacts());
//   // }, [dispatch]);

//   console.log('contacts', contacts, 'data', data)
//   // console.log('filter', filterValue)
 

//   const createContact = async (name, phone) => {    
//     const dublicateContact = contacts.some(checkedContact => {
//       return checkedContact.name.toLowerCase() === name.toLowerCase();
//     });

//     if (dublicateContact) {
//       toast.error(`${name} is already in contacts`);
//       return;
//     }
//     const contact = {
//       name,
//       phone,
//     };
//     console.log('contact', name, phone, contact)
//     try {
//       await addContact(contact)
//     } catch (error) {
//       console.log('error', error)
//       toast.error(contactError.message)
//     }
//   }

//   const changeFilter = (e) => { 
//     dispatch(changeFilterValue(e.currentTarget.value))
//   }

//   // const handleDeleteContact = contactId => {
//   //   dispatch(deleteContact(contactId))    
//   // };
 
//   const changeFilterContacts = () => {  
//     if (!contacts) {
//       return;
//      }
//     return contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase())).sort((a, b) => b.id - a.id);
//   };
  
//   const filteredContacts = changeFilterContacts();  

//   return (
//     <div className="App">
//       <h1> Phonebook</h1>
//       <ContactForm onSubmit={createContact} isSuccess={addContactSuccess} />
//        <h2>Contacts</h2>
//       <Filter value={filterValue} onChange={changeFilter} />
//       {!isSuccess && <ColorRing
//           wrapperStyle={{
//             display: 'block',
//             margin: '0 auto',
//           }}
//           wrapperClass="blocks-wrapper"
//           colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />}     
//       {contacts && <ContactList contacts={filteredContacts}
//         // onDelete={handleDeleteContact}
//       />}
//       <ToastContainer
//           position="top-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light" />
//     </div>
//   );
// }  

  // Contacts redux
// function App() {
//   const dispatch = useDispatch();
//   const contacts = useSelector(contactsSelector);
//   const filterValue = useSelector(filterSelector);

//   console.log('contacts', contacts)
//   console.log('filter', filterValue)
 

//   const createContact = (name, number) => {    
//     const dublicateContact = contacts.some(checkedContact => {
//       return checkedContact.name.toLowerCase() === name.toLowerCase();
//     });

//     if (dublicateContact) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//     dispatch(addContact(name, number))
//   }

//   const changeFilter = (e) => { 
//     dispatch(changeFilterValue(e.currentTarget.value))
//   }

//   const handleDeleteContact = contactId => {
//     dispatch(deleteContact(contactId))    
//   };
 
//   const changeFilterContacts = () => {     
//     return contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()));
//   };
  
//   const filteredContacts = changeFilterContacts();
//   console.log(filteredContacts)

//   return (
//     <div className="App">
//       <h1> Phonebook</h1>
//       <ContactForm onSubmit={createContact} />
//        <h2>Contacts</h2>
//       <Filter value={filterValue} onChange={changeFilter} />
//         <ContactList contacts={filteredContacts} onDelete={handleDeleteContact}/>
//     </div>
//   );
// }  


//   // Contacts 
// function App() {
//   // eslint-disable-next-line no-unused-vars
//   const [contacts, setContacts] = useState(() =>{
//     return JSON.parse(window.localStorage.getItem('contacts')) ?? []}
//   //   [

//   //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   // ]
//   );
//   const [filter, setFilter] = useState('');
//   console.log('contacts', contacts);

//   console.log('contacts', contacts)

//   useEffect(() => { 
//     localStorage.setItem('contacts', JSON.stringify(contacts));

//   }, [contacts]);

//   const createContact = (name, number) => { 
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     }
//     const dublicateContact = contacts.some(checkedContact => {
//       return checkedContact.name.toLowerCase() === name.toLowerCase();
//     });

//     if (dublicateContact) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     setContacts([contact, ...contacts]);
//   }

//   const changeFilter = (e) => { 
//     setFilter(e.currentTarget.value);
//   }

//   const deleteContact = contactId => {
//     setContacts(contacts.filter(contact => contact.id !== contactId));
//   };
 
//   const filterContacts = () => { 
//     return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
//   };

//   const filteredContacts = filterContacts();

//   return (
//     <div className="App">
//       <h1> Phonebook</h1>
//       <ContactForm onSubmit={createContact} />
//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactList contacts={filteredContacts} onDelete={deleteContact}/>
//     </div>
//   );
// }


export default App;
