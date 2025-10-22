import React,{useState} from "react";

export default function Blog(){

  const[posts, setPosts] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  const[likes, setLikes] = useState([0,0,0]);
  const[modalOpen, setModalOpen] = useState(false);
  const[selected, setSelected] = useState(0);
  const[inputValue, setInputValue] = useState('');

  const addLikes = () => {

    setLikes([...likes, likes + 1 ])

  }

  //console.log(addLikes);

    return(
        <>
          <button onClick={addLikes}></button>
        </>
    )
}

// function Upload(){

//   return(
//     <>
//       <ul>
//         <li></li>
//       </ul>
//     </>
//   )
// }
