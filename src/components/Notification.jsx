export default function Notification() {
  return (
    <div className=" p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div className="bg-white h-60 border-gray-100 lg:col-span-3 shadow-md shadow-black/5 flex flex-col justify-between ">
        <div className="bg-yellow-400">
          <div className="text-xl p-1 ml-2  text-black font-semibold">
            Notifications
          </div>
        </div>
      </div>
    </div>
  );
}
