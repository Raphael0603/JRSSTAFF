export default function StatusCard({ title, count, bgColor }) {
  return (
    <div
      className={`${bgColor} border-gray-100 p-5 shadow-md shadow-black/5 flex flex-col justify-between w-full`}
    >
      <div className="text-xl font-semibold">{title}</div>
      <div className="text-2xl self-end">{count}</div>
    </div>
  );
}
