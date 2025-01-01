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



import React, { useState } from 'react'

const App = () => {

  const [username, setusername] = useState('')

  const userhandler = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={(e) => {
        userhandler(e)
      }}>
        <input
          value={username}
          onChange={(e) => {

            setusername(e.target.value)
          }}
          className='py-4 px-4 text-black text-xl rounded m-5'
          type="text"
          placeholder='enter your name '
        />
        <button className='px-4 py-3 m-5 flex text-xl font-semibold  text-white bg-emerald-600 rounded'>submit</button>
      </form>
    </div>
  )
}

// export default App
// 1:30:00