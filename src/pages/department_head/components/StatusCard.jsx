const statusCards = [
  { title: "Job Request", count: 0, bgColor: "bg-yellow-400" },
  { title: "Accepted", count: 0, bgColor: "bg-sky-200" },
  { title: "Assigned", count: 0, bgColor: "bg-red-400" },
  { title: "Completed", count: 0, bgColor: "bg-green-400" },
  { title: "Referral", count: 0, bgColor: "bg-purple-400" },
];

export default function StatusCard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-0">
        {statusCards.map((status, index) => (
          <div
            key={index}
            className={`${status.bgColor} border-gray-100 p-5 shadow-md shadow-black/5 flex flex-col justify-between`}
          >
            <div className="text-xl font-semibold">{status.title}</div>
            <div className="text-2xl self-end">{status.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
