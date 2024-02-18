<<<<<<< HEAD

=======
>>>>>>> origin/master
import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { MdTravelExplore } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import "../css/urbanNest.css";

<<<<<<< HEAD
// Define the SearchBar component
const SearchBar = () => {
  // Hooks
  const navigate = useNavigate(); // React Router hook for navigation
  const search = useSearchContext(); // Custom context hook for search functionality

  // State variables for form inputs
=======
const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();

>>>>>>> origin/master
  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.adultCount);
  const [childCount, setChildCount] = useState<number>(search.childCount);

<<<<<<< HEAD
  // Handle form submission
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Save search values using context
=======
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
>>>>>>> origin/master
    search.saveSearchValues(
      destination,
      checkIn,
      checkOut,
      adultCount,
      childCount
    );
<<<<<<< HEAD
    // Navigate to search page
    navigate("/search");
  };

  // Set minimum and maximum dates for date picker
=======
    navigate("/search");
  };

>>>>>>> origin/master
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

<<<<<<< HEAD
  // Render the form
=======
>>>>>>> origin/master
  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-8 sm:-mt-4 p-3 bg-gray-300 rounded shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center gap-4"
    >
<<<<<<< HEAD
      {/* Destination input */}
=======
>>>>>>> origin/master
      <div className="flex flex-row items-center bg-white p-2">
        <MdTravelExplore size={25} className="mr-2" />
        <input
          placeholder="Where are you going?"
          className="text-md w-full focus:outline-none"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

<<<<<<< HEAD
      {/* Adult and child count inputs */}
=======
>>>>>>> origin/master
      <div className="flex bg-white px-2 py-1 gap-2">
        <label className="items-center flex">
          Adults:
          <input
            className="w-full p-1 focus:outline-none font-bold"
            type="number"
            min={1}
            max={20}
            value={adultCount}
            onChange={(event) => setAdultCount(parseInt(event.target.value))}
          />
        </label>
        <label className="items-center flex">
          Children:
          <input
            className="w-full p-1 focus:outline-none font-bold"
            type="number"
            min={0}
            max={20}
            value={childCount}
            onChange={(event) => setChildCount(parseInt(event.target.value))}
          />
        </label>
      </div>
<<<<<<< HEAD

      {/* Check-in date picker */}
=======
>>>>>>> origin/master
      <div>
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-in Date"
          className="min-w-full bg-white p-2 focus:outline-none"
          wrapperClassName="min-w-full"
        />
      </div>
<<<<<<< HEAD

      {/* Check-out date picker */}
=======
>>>>>>> origin/master
      <div>
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-out Date"
          className="min-w-full bg-white p-2 focus:outline-none"
          wrapperClassName="min-w-full"
        />
      </div>
<<<<<<< HEAD

      {/* Search and clear buttons */}
=======
>>>>>>> origin/master
      <div className="flex flex-row justify-center items-center col-span-full">
        <button className=" md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 bg-gray-600 text-orange h-full p-2 font-bold text-xl hover:bg-gray-500">
          Search
        </button>
        <button className=" md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 bg-gray-600 text-orange h-full p-2 ml-4 font-bold text-xl hover:bg-gray-500">
          Clear
        </button>
      </div>
    </form>
  );
};

<<<<<<< HEAD
export default SearchBar; 
=======
export default SearchBar;
>>>>>>> origin/master
