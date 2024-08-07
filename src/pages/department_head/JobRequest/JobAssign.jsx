import SearchBar from "../../../components/SearchBar";
import Table from "../../../components/Table";
import ReusableDropDownButton from "../../../components/ReusableDropDownButton";
import { Outlet, useOutlet, useNavigate } from "react-router-dom";
import ReusablePreviousButton from "../../../components/ReusablePreviousButton";
import ReusableNextButton from "../../../components/ReusableNextButton";
import ReusableViewButton from "../../../components/ReusableViewButton";

const options = [
  { value: "1", label: "CSWS" },
  { value: "2", label: "MEWS" },
  { value: "3", label: "BGMS" },
];

const tableHeaders = [
  "Requester Id",
  "Job Description",
  "Job Type",
  "Requestor",
  "Date Submitted",
  "Location",
  "Action",
];

export default function JobAssign() {
  const otherContent = useOutlet(); // Get the current outlet
  const navigate = useNavigate();
  const tableContent = [
    [
      "1. 20241",
      "Broken Door",
      "Carpenter",
      "Cardo Dalisay",
      "28 - 07 2024",
      "CITC Building 3rd floor Room 309",
      <>
        <ReusableViewButton
          onClick={() => navigate("/department_head/job_assign/view")}
        />

        <ReusableDropDownButton options={options} />
      </>,
    ],
    ["2."],
    ["3."],
    ["4."],
    ["5."],
    ["6."],
    ["7."],
    ["8."],
    ["9."],
    ["10."],
  ];

  return (
    <>
      {otherContent ? (
        <Outlet /> // Render nested routes if present
      ) : (
        <>
          <SearchBar title="Job Request" showInput={true} />
          <Table
            columns={7}
            rows={tableContent.length}
            content={tableContent}
            headers={tableHeaders}
          />

          <div className="flex items-center justify-between ml-4 mr-4 text-sm">
            <div className="flex items-center space-x-2 ">
              <label htmlFor="rows-per-page" className="text-gray-700 ">
                Rows per page:
              </label>
              <select
                id="rows-per-page"
                className="border border-gray-300 rounded-md px-2 py-1 text-gray-700 "
              >
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </select>
            </div>
            <div>
              <ReusablePreviousButton />
              <ReusableNextButton />
            </div>
          </div>
        </>
      )}
    </>
  );
}
