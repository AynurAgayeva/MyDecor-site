import React, { useEffect } from 'react'

const NotFoundPage = () => {
    useEffect(()=>{
      document.querySelector(".home").style.display = "none";
        document.querySelector(".logo").style.display = "none";
          document.querySelector(".blogpost").style.display = "none";
          document.querySelector(".footer").style.display = "none";
    },[])
    
  return (
    <div>
      <img
        width={"100%"}
        height={"auto"}
        src="https://i.pinimg.com/originals/09/4c/fd/094cfdfce64c317a2c071756cd332ff8.gif"
        alt=""
      />
    </div>
  );
}

export default NotFoundPage