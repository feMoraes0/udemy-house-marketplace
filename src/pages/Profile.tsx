import { User, getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";


const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName as string,
    email: auth.currentUser?.email as string
  });
  const [changeDetail, setChangeDetail] = useState(false);

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  }
  const onChange = (event: any) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  }
  const onSubmit = async () => {
    try {
      if(auth.currentUser?.displayName !== name) {
        await updateProfile(auth.currentUser as User, {
          displayName: formData.name
        })
        const docRef = doc(db, "users", auth.currentUser?.uid as string);
        await updateDoc(docRef, {
          name: formData.name,
        });
        toast.success("Profile details updated");
      }
    } catch (error) {
      toast.error("Could not update the profile details");
    }
  }

  return (
    <>
      <section className="max-w-6xl flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input type="text" id="name" value={formData.name} disabled={!changeDetail} onChange={onChange} className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-red-200"}`} />
            <input type="text" id="email" value={formData.email} disabled={!changeDetail} className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out" />
            <div className="mb-6 flex justify-between items-center whitespace-nowrap">
              <p className="flex items-center">
                Do you want to change your name?
                <span
                  onClick={() => {
                    changeDetail && onSubmit()
                    setChangeDetail((prev) => !prev)
                  }}
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                >
                  {changeDetail ? "Apply change" : "Edit"}
                </span>
              </p>
              <p onClick={onLogout} className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer">
                Sign out
              </p>
            </div>
          </form>
          <Link
            to="/create-listing"
            className="flex justify-center items-center w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition ease-in-out duration-200 hover:shadow-lg active:bg-blue-800"
          >
            <FcHome className="mr-2 text-3xl bg-red-200 rounded-full p-1 border-2" /> Sell or rent your home
          </Link>
        </div>
      </section>
    </>
  )
}

export default Profile;
