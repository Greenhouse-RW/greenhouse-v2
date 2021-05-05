import React from "react";
import "./SidebarCalendar.css";

export default function SidebarCalendar() {
  return (
    <div className="MySideCale h-screen pt-20 fixed">
      <h1 className="text-2xl text-white pt-5 pl-8">Recorded Values.</h1>

      <ul className="sidebardata text-gray-50 text-lg">
        <li className="flex">
          {" "}
          <li>Temperature</li> <li className="number1 bg-gray">34</li>{" "}
          <li>67</li> <p>^C</p>{" "}
        </li>
        <br></br>
        <li className="flex">
          {" "}
          <li>Temperature</li> <li>34</li> <li>67</li> <p>^C</p>{" "}
        </li>
        <br></br>
        <li className="flex">
          {" "}
          <li>Temperature</li> <li>34</li> <li>67</li> <p>^C</p>{" "}
        </li>
        <br></br>
        <li className="flex">
          {" "}
          <li>Temperature</li> <li>34</li> <li>67</li> <p>^C</p>{" "}
        </li>
        <br></br>
        <li className="flex">
          {" "}
          <li>Temperature</li> <li>34</li> <li>67</li> <p>^C</p>{" "}
        </li>
        <br></br>
        <li className="flex">
          {" "}
          <li>Temperature</li> <li>34</li> <li>67</li> <p>^C</p>{" "}
        </li>
        <br></br>
        <li className="flex">
          {" "}
          <li>Temperature</li> <li>34</li> <li>67</li> <p>^C</p>{" "}
        </li>{" "}
        <br></br>
      </ul>
    </div>
  );
}
