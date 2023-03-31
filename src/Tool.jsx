import React, { useState } from "react";

function Task2() {
  const [Initial, Final] = useState("");
  const [tl, tlf] = useState(0);
  const [wl, wlf] = useState(0);

  const count = (e) => {
    const x = e.target.value;
    Final(x);
    tlf(x.split(" ").join("").length);
    wlf(x.trim().split(/\s+/).length);
     };

  const Toupper = () => {
    Final(Initial.toUpperCase())
  };
  const Tolower = () => {
    Final(Initial.toLowerCase())
  };

  return <div>
  <input type= "text" onChange={count} className="input" value={Initial}/>
 <button onClick={Toupper}>to Upper</button>
 <button onClick={Tolower}>to lower</button>
 <p><b>Total letter</b>{tl}</p>
 <p><b>Total words</b>{wl}</p> 
 </div>;
}

export default Task2;
