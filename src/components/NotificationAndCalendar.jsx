export default function StatusCardAndCalendar() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* NOTIFICATION */}
        <div className="bg-white h-80 lg:h-72 xl:h-80 border-gray-100 lg:col-span-2 shadow-md shadow-black/5 flex flex-col justify-between">
          <div className="bg-yellow-400">
            <div className="text-xl p-1 ml-2 text-black font-semibold">
              Notifications
            </div>
          </div>
          <div className="p-4">{/* Add your notification content here */}</div>
        </div>

        {/* CALENDAR */}
        <div className="bg-white h-60 lg:h-72 xl:h-80 border-gray-100 p-5 lg:col-span-1 shadow-md shadow-black/5 flex flex-col justify-between">
          <div className="text-xl text-black font-semibold">CALENDAR</div>
          <div className="p-4">{/* Add your calendar content here */}</div>
        </div>
      </div>
    </div>
  );
}

// export default function StatusCardAndCalendar() {
//   return (
//     <div className="p-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {/* NOTIFICATION */}
//         <div className="bg-white h-60 border-gray-100 lg:col-span-3 shadow-md shadow-black/5 flex flex-col justify-between">
//           <div className="bg-yellow-400">
//             <div className="text-xl p-1 ml-2  text-black font-semibold">
//               Notifications
//             </div>
//           </div>
//         </div>
//         {/* CALENDAR */}
//         <div className="bg-white border-gray-100 p-5 lg:col-span-1 shadow-md shadow-black/5 flex flex-col justify-between">
//           <div className="text-xl text-black font-semibold">CALENDAR</div>
//         </div>
//       </div>
//     </div>
//   );
// }
