/////////////////////////
////////////////////////

// import React from 'react'

// const App = () => {
//   const user = "hitesh";

//   const abc = () => {
//     console.log("hello")
//   }

//   // abc()
//   return (
//     <div>
//       <h1>uesr name is {user}</h1>
//       <span>

//         <button onClick={abc}>change user</button>
//       </span>
//     </div>
//   )
// }

// export default App


// //43:00
//////////////////////////////
/////////////////////////////
// "changing username"
///////////////////////////
/////////////////////////

// import React from 'react'

// const App = () => {
//   let log = console.log;

//   let user = "hitesh"

//   let changeUser = () => {
//     log(user)
//     user = "hiteshpro";
//     log(user)
//   }

//   return (
//     <div>
//       <h1>username is {user}</h1>
//       <button onClick={changeUser}>change user </button>
//     </div>
//   )
// }

// export default App
///////////////////////////
//////////////////////////
// "use state"
////////////////////////////
////////////////////////////
// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const log = console.log
//   // const a = 10; this is  a wrong method in react 

//   let [a, setA] = useState(10)

//   const changeuser = () => {
//     // log("huh")
//     setA(202)
//   }

//   return (
//     <div>
//       <h1>value of a is {a} </h1>
//       <button onClick={changeuser}>change</button>
//     </div>

//   )
// }

// export default App


//57:00
//////////////////////////
/////////////////////////////
/////////////////////////////

// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0);
//   const [num2, setNum2] = useState(0)

//   return (
//     <div>
//       <h3>number is {num}</h3>
//       <button onClick={() => setNum(num +10)}>increment</button>
//       <button onClick={() => setNum(num / 10)}>decrement</button>
//     </div >
//   )
// }

// export default App
// 58:30
////////////////////////////
// "using tailwing in react project"
///////////////////////////////
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1 className='text-5xl bg-pink-700'>hello</h1>
//     </div>
//   )
// }

// export default App

// / ////////////////////
// "form handling"
/////////////////////


// import React from 'react'

// const App = () => {

//   const submithandler = (e) => {
//     e.preventDefault()

//     console.log("hello", e)
//     console.log("submit");

//   }

//   return (
//     <div>
//       <form onSubmit={(e) => {
//         submithandler(e)
//       }}>
//         <input className='py-4 px-4 text-black text-xl rounded m-5' type="text" placeholder='enter your name ' />
//         <button className='px-4 py-3 m-5 flex text-xl font-semibold  text-white bg-emerald-600 rounded'>submit</button>
//       </form>
//     </div>
//   )
// }

// export default App


//////////////////////
//" two way binding"
/////////////////////



// import React, { useState } from 'react'

// const App = () => {

//   const [username, setusername] = useState('')

//   const submithandler = (e) => {
//     e.preventDefault()
//     console.log("submitted")
//     setusername("")
//   }

//   return (
//     <div>
//       <form onSubmit={(e) => {
//         submithandler(e)
//       }}>
//         <input
//           value={username}
//           onChange={(e) => {

//             setusername(e.target.value)
//           }}
//           className='py-4 px-4 text-black text-xl rounded m-5'
//           type="text"
//           placeholder='enter your name '
//         />
//         <button className='px-4 py-3 m-5 flex text-xl font-semibold  text-white bg-emerald-600 rounded'>submit</button>
//       </form>
//     </div>
//   )
// }

// export default App
// 1:30:00


/////////////////////////
// "components"
//////////////////////////

// import React from 'react'
// import Footer from './components/Footer'
// import Nav1 from './components/Nav1'

// const App = () => {
//   return (

//     <>
//       <Nav1 />
//       <Footer />
//     </>
//   )
// }

// export default App

////////////////////////
// passing data into components
// props drilling 
// rendering json data
/////////////////////////////

// import React from 'react'
// import Card from './components/Card'

// const App = () => {
//   const users = [
//     {
//       "name": "Rahul Sharma",
//       "profession": "Web Developer",
//       "city": "Mumbai",
//       "age": 28,
//       "profilePhoto": "https://example.com/images/rahul_sharma.jpg"
//     },
//     {
//       "name": "Priya Singh",
//       "profession": "Graphic Designer",
//       "city": "Bangalore",
//       "age": 25,
//       "profilePhoto": "https://example.com/images/priya_singh.jpg"
//     },
//     {
//       "name": "Amit Kumar",
//       "profession": "Data Scientist",
//       "city": "Delhi",
//       "age": 30,
//       "profilePhoto": "https://example.com/images/amit_kumar.jpg"
//     },
//     {
//       "name": "Sneha Patel",
//       "profession": "Digital Marketer",
//       "city": "Ahmedabad",
//       "age": 27,
//       "profilePhoto": "https://example.com/images/sneha_patel.jpg"
//     },
//     {
//       "name": "Arjun Verma",
//       "profession": "Android Developer",
//       "city": "Pune",
//       "age": 29,
//       "profilePhoto": "https://example.com/images/arjun_verma.jpg"
//     }
//   ]



//   return (
//     <div>
//       <div className='p-10'>
//         {users.map(function (elem, idx) {
//           return <Card key={idx} name={elem.name} age={elem.age} city={elem.city} profession={elem.profession} photo={elem.profilePhoto} />
//         })}
//         {/* <Card user="Hitesh" surname="chaudhari" age='19' city="jalgaon" /> */}
//       </div>
//     </div>
//   )
// }

// export default App

// // 2:13:00
///////////////////////////////
//////////////////////////////////
// "axios" and "useEffect"
////////////////////////////////
//////////////////////////////




// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [data, setData] = useState([])

//   const getData = async (res, rej) => {
//     // // console.log("hello")
//     const Response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
//     // // console.log(Response);
//     // // console.log(res,rej)

//     //  // const data = Response.data;
//     // // console.log(data)


//     setData(Response.data);

//     // // console.log(data[0].download_url)
//   }
//   useEffect(() => {

//     getData()

//   }, [])


//   return (
//     <div className='p-10'>
//       {/* <button onClick={getData} className="bg-teal-700 text-white font-semibold tetx-2xl px-6 py-3 rounded active:scale-90 ">Get Data</button> */}
//       <div className='p-5 bg-gray-950 mt-5'></div>
//       {data.map(function (elem, idx) {
//         return <div key={idx} className='bg-gray-50 text-black flex item-center justify-between w-full px-7 py-6 rounded mt-5 mb-3'>
//           <img className="h-40" src={elem.download_url} alt="" />
//           <h1>{elem.author}</h1>
//         </div>
//       })}
//     </div>
//   )
// }

// export default App;
//2:29:00
//////////////////
///////////////////
// "react-router-dom"
////////////////////////
////////////////////////
// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import About from './Pages/About'
// import Contact from './Pages/Contact'
// import Home from './Pages/Home'
// import Header from './Pages/Header'

// const App = () => {

//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route path='header' element={< Header />} />
//         <Route path='/' element={< Home />} />
//         <Route path='/About' element={< About />} />
//         <Route path='/Contact' element={< Contact />} />
//         <Route path='/Product' element={< product />} />
//         {/* <Route path='/Home' element={< Home />} /> */}

//       </Routes>
//     </div>
//   )
// }

// export default App
//3:00:01
//////////////////////////////////////
import React from 'react'

const App = () => {
    return (
        <div>App</div>
    )
}

export default App
// 3:09:00