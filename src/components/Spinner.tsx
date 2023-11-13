import React from 'react'
import spinner from "../assets/spinner.svg";

const Spinner: React.FC = () => {
  return (
    <div className="bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0">
      <div>
        <img src={spinner} alt="spinner" />
      </div>
    </div>
  )
}

export default Spinner
