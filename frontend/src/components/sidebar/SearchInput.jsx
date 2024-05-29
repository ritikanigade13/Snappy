import React from 'react'
 import { IoSearchSharp } from "react-icons/io5";
function SearchInput() {
  return (
    <form className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Search.."
        className="input input-bordered rounded-full w-full"
      />
      <button type="Submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className='w-6 h-6 outline-none ' />
      </button>
    </form>
  );
}

export default SearchInput
