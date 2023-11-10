import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData] = useState({
    name: auth.currentUser?.displayName as string,
    email: auth.currentUser?.email as string
  });
  const onLogout = () => {
    auth.signOut();
    navigate("/");
  }
  return (
    <>
      <section className="max-w-6xl flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input type="text" id="name" value={formData.name} disabled className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out" />
            <input type="text" id="email" value={formData.email} disabled className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out" />
            <div className="mb-6 flex justify-between items-center whitespace-nowrap">
              <p className="flex items-center">
                Do you want to change your name?
                <span className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer">Edit</span>
              </p>
              <p onClick={onLogout} className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer">
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Profile;
