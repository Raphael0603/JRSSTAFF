export default function StatusCard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-0">
        {/* CARD: PENDING */}
        <div className="bg-yellow-400 border-gray-100 p-5 shadow-md shadow-black/5 flex flex-col justify-between">
          <div className="text-xl font-semibold">Pending</div>
          <div className="text-2xl self-end">0</div>
        </div>

        {/* CARD: APPROVED */}
        <div className="bg-sky-200 border-gray-100 p-5 shadow-md shadow-black/5 flex flex-col justify-between">
          <div className="text-xl font-semibold">Approved</div>
          <div className="text-2xl self-end">0</div>
        </div>

        {/* CARD: COMPLETED */}
        <div className="bg-green-400 border-gray-100 p-5 shadow-md shadow-black/5 flex flex-col justify-between">
          <div className="text-xl font-semibold">Completed</div>
          <div className="text-2xl self-end">0</div>
        </div>

        {/* CARD: CANCELLED */}
        <div className="bg-red-400 border-gray-100 p-5 shadow-md shadow-black/5 flex flex-col justify-between">
          <div className="text-xl font-semibold">Cancelled</div>
          <div className="text-2xl self-end">0</div>
        </div>
      </div>
    </div>
  );
}
