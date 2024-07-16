export default function Notification() {
  return (
    <div className="bg-white h-80 lg:h-72 xl:h-80 border-gray-100 lg:col-span-2 shadow-md shadow-black/5 flex flex-col justify-between">
      <div className="bg-yellow-400">
        <div className="text-xl p-1 ml-2 text-black font-semibold">
          Notifications
        </div>
      </div>
      <div className="p-4">{/* Add your notification content here */}</div>
    </div>
  );
}
