import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  return (
    <div className="p-4 md:flex md:gap-6">
      <img src={`https://via.placeholder.com/400x300`} alt="Detail" className="w-full md:w-1/2 object-cover" />
      <div className="mt-4 md:mt-0 md:w-1/2">
        <h1 className="text-2xl font-bold">Movie Detail {id}</h1>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Lorem ipsum dolr sit amet, consectetur adipiscing elit. Quisque ac turpis ac justo viverra luctus.  
        </p>
      </div>
    </div>
  );  
}