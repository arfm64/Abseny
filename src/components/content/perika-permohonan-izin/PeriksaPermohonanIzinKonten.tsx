'use client';
import { useState, useEffect } from "react";
import Table from "@/components/Table";

const dataTable = {
    columns: [
        { Header: "ID", accessor: "id" },
        { Header: "User ID", accessor: "userId" },
        { Header: "Name", accessor: "name" },
        { Header: "Start Date", accessor: "startDate" },
        { Header: "Lama Libur", accessor: "lamaLibur" },
        { Header: "Alasan", accessor: "alasan" },
        { Header: "Surat", accessor: "surat" },
        { Header: "Status", accessor: "status" },
        { Header: "Action", accessor: "action" },
    ],
    data: [
        { id: "1", userId: "verinaiohfa12@gmail.com", name: "Verina Ulfa", startDate: "2023-09-01", lamaLibur: "3", alasan: "Medical", surat: "Available", status: "Pending" },
        { id: "2", userId: "alvianrahman@gmail.com", name: "Alvian Rahman", startDate: "2023-09-10", lamaLibur: "2", alasan: "Family Event", surat: "Not Available", status: "Approved" },
        { id: "3", userId: "raflianur@gmail.com", name: "Rafli Anur", startDate: "2023-09-15", lamaLibur: "1", alasan: "Vacation", surat: "Available", status: "Rejected" },
        { id: "4", userId: "rizkisetiawan@gmail.com", name: "Rizki Setiawan", startDate: "2023-09-20", lamaLibur: "4", alasan: "Personal Reasons", surat: "Available", status: "Pending" },
        { id: "5", userId: "andirananda@gmail.com", name: "Andi Rananda", startDate: "2023-09-25", lamaLibur: "2", alasan: "Workshop", surat: "Not Available", status: "Approved" },
        { id: "6", userId: "intanputri@gmail.com", name: "Intan Putri", startDate: "2023-09-03", lamaLibur: "2", alasan: "Medical", surat: "Available", status: "Pending" },
        { id: "7", userId: "yusufagus@gmail.com", name: "Yusuf Agus", startDate: "2023-09-11", lamaLibur: "1", alasan: "Family Event", surat: "Not Available", status: "Approved" },
        { id: "8", userId: "alberts@gmail.com", name: "Albert S", startDate: "2023-09-18", lamaLibur: "4", alasan: "Vacation", surat: "Available", status: "Rejected" },
        { id: "9", userId: "ariefwijaya@gmail.com", name: "Arief Wijaya", startDate: "2023-09-24", lamaLibur: "2", alasan: "Personal Reasons", surat: "Available", status: "Pending" },
        { id: "10", userId: "sitihamidah@gmail.com", name: "Siti Hamidah", startDate: "2023-09-05", lamaLibur: "1", alasan: "Workshop", surat: "Not Available", status: "Approved" },
        { id: "11", userId: "farizal@gmail.com", name: "Farizal", startDate: "2023-09-12", lamaLibur: "3", alasan: "Medical", surat: "Available", status: "Pending" },
        { id: "12", userId: "juliarahayu@gmail.com", name: "Julia Rahayu", startDate: "2023-09-19", lamaLibur: "2", alasan: "Family Event", surat: "Not Available", status: "Approved" },
        { id: "13", userId: "dimasaryanto@gmail.com", name: "Dimas Aryanto", startDate: "2023-09-26", lamaLibur: "1", alasan: "Vacation", surat: "Available", status: "Rejected" },
        { id: "14", userId: "evansetiawan@gmail.com", name: "Evan Setiawan", startDate: "2023-09-28", lamaLibur: "4", alasan: "Personal Reasons", surat: "Available", status: "Pending" },
        { id: "15", userId: "fadlanhafiz@gmail.com", name: "Fadlan Hafiz", startDate: "2023-09-29", lamaLibur: "2", alasan: "Workshop", surat: "Not Available", status: "Approved" }
    ]
};

export default function PeriksaPermohonanIzinKonten() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [filteredData, setFilteredData] = useState(dataTable.data);

    useEffect(() => {
        let filtered = dataTable.data;

        // Filter by search term
        if (searchTerm) {
            const lowercasedTerm = searchTerm.toLowerCase();
            filtered = filtered.filter(item =>
                Object.values(item).some(value =>
                    String(value).toLowerCase().includes(lowercasedTerm)
                )
            );
        }

        // Filter by status
        if (statusFilter !== "all") {
            filtered = filtered.filter(item => item.status.toLowerCase() === statusFilter.toLowerCase());
        }

        setFilteredData(filtered);
    }, [searchTerm, statusFilter]);
    return (
        <div>
            <div className="w-full h-full overflow-y-auto p-5">
                <div className="block rounded-3xl bg-white w-full h-full">
                    <div className="flex w-full pt-5 ps-5">
                        <h1 className="text-[roboto] font-semibold text-[2rem]">Status Permohonan Izin</h1>
                    </div>
                    <hr className="my-3 mx-4" />
                    <div className="flex w-full py-3 px-4 items-center">
                        <div className="flex relative w-3/12">
                            <input className="w-full px-3 py-1 border-gray-300 focus:outline-none rounded-md border-[1px]" type="text" placeholder="search" onChange={(e) => setSearchTerm(e.target.value)} />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                        </div>
                        <div className="flex w-full justify-end items-center">
                            <select name="status_permohonan_izin" id="statusPermohonanIzin" className="p-2 border-gray-300 focus:outline-none rounded-md border-[1px]" onChange={(e) => setStatusFilter(e.target.value)}>
                                <option value="all">Semua Status</option>
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                            </select>
                            <button className="flex p-2 border-[1px] border-solid border-gray-300 items-center hover:bg-gray-200 text-black font-bold rounded-[10px] text-[14px] ml-2">
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.75 11C13.1642 11 13.5 10.6642 13.5 10.25C13.5 9.83579 13.1642 9.5 12.75 9.5C12.3358 9.5 12 9.83579 12 10.25C12 10.6642 12.3358 11 12.75 11Z" fill="#2E2E2E" />
                                    <path d="M12.75 14C13.1642 14 13.5 13.6642 13.5 13.25C13.5 12.8358 13.1642 12.5 12.75 12.5C12.3358 12.5 12 12.8358 12 13.25C12 13.6642 12.3358 14 12.75 14Z" fill="#2E2E2E" />
                                    <path d="M9.75 10.25C9.75 10.6642 9.41421 11 9 11C8.58579 11 8.25 10.6642 8.25 10.25C8.25 9.83579 8.58579 9.5 9 9.5C9.41421 9.5 9.75 9.83579 9.75 10.25Z" fill="#2E2E2E" />
                                    <path d="M9.75 13.25C9.75 13.6642 9.41421 14 9 14C8.58579 14 8.25 13.6642 8.25 13.25C8.25 12.8358 8.58579 12.5 9 12.5C9.41421 12.5 9.75 12.8358 9.75 13.25Z" fill="#2E2E2E" />
                                    <path d="M5.25 11C5.66421 11 6 10.6642 6 10.25C6 9.83579 5.66421 9.5 5.25 9.5C4.83579 9.5 4.5 9.83579 4.5 10.25C4.5 10.6642 4.83579 11 5.25 11Z" fill="#2E2E2E" />
                                    <path d="M5.25 14C5.66421 14 6 13.6642 6 13.25C6 12.8358 5.66421 12.5 5.25 12.5C4.83579 12.5 4.5 12.8358 4.5 13.25C4.5 13.6642 4.83579 14 5.25 14Z" fill="#2E2E2E" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.25 1.8125C5.56066 1.8125 5.8125 2.06434 5.8125 2.375V2.94704C6.309 2.93749 6.856 2.93749 7.45759 2.9375H10.5423C11.1439 2.93749 11.691 2.93749 12.1875 2.94704V2.375C12.1875 2.06434 12.4393 1.8125 12.75 1.8125C13.0607 1.8125 13.3125 2.06434 13.3125 2.375V2.99532C13.5075 3.01018 13.6921 3.02886 13.8668 3.05235C14.7461 3.17057 15.4578 3.41966 16.0191 3.98093C16.5803 4.5422 16.8294 5.25392 16.9476 6.13323C17.0625 6.98764 17.0625 8.07935 17.0625 9.45766V11.0423C17.0625 12.4206 17.0625 13.5124 16.9476 14.3668C16.8294 15.2461 16.5803 15.9578 16.0191 16.5191C15.4578 17.0803 14.7461 17.3294 13.8668 17.4476C13.0124 17.5625 11.9206 17.5625 10.5423 17.5625H7.45769C6.07939 17.5625 4.98764 17.5625 4.13323 17.4476C3.25392 17.3294 2.5422 17.0803 1.98093 16.5191C1.41966 15.9578 1.17057 15.2461 1.05235 14.3668C0.937479 13.5124 0.937488 12.4206 0.9375 11.0423V9.45769C0.937488 8.07937 0.937479 6.98764 1.05235 6.13323C1.17057 5.25392 1.41966 4.5422 1.98093 3.98093C2.5422 3.41966 3.25392 3.17057 4.13323 3.05235C4.30793 3.02886 4.49254 3.01018 4.6875 2.99532V2.375C4.6875 2.06434 4.93934 1.8125 5.25 1.8125ZM4.28314 4.16732C3.52857 4.26877 3.09383 4.45902 2.77643 4.77643C2.45902 5.09383 2.26877 5.52857 2.16732 6.28314C2.15014 6.41093 2.13577 6.54546 2.12376 6.6875H15.8762C15.8642 6.54546 15.8499 6.41093 15.8327 6.28314C15.7312 5.52857 15.541 5.09383 15.2236 4.77643C14.9062 4.45902 14.4714 4.26877 13.7169 4.16732C12.9461 4.06369 11.9301 4.0625 10.5 4.0625H7.5C6.06989 4.0625 5.05388 4.06369 4.28314 4.16732ZM2.0625 9.5C2.0625 8.85949 2.06274 8.30205 2.07231 7.8125H15.9277C15.9373 8.30205 15.9375 8.85949 15.9375 9.5V11C15.9375 12.4301 15.9363 13.4461 15.8327 14.2169C15.7312 14.9714 15.541 15.4062 15.2236 15.7236C14.9062 16.041 14.4714 16.2312 13.7169 16.3327C12.9461 16.4363 11.9301 16.4375 10.5 16.4375H7.5C6.06989 16.4375 5.05388 16.4363 4.28314 16.3327C3.52857 16.2312 3.09383 16.041 2.77643 15.7236C2.45902 15.4062 2.26877 14.9714 2.16732 14.2169C2.06369 13.4461 2.0625 12.4301 2.0625 11V9.5Z" fill="#2E2E2E" />
                                </svg>
                            </button>
                            <button className="flex p-2 border-[1px] border-solid border-gray-300 items-center hover:bg-gray-200 text-black font-bold rounded-[10px] text-[14px] ml-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.00004 1.4375C5.78989 1.4375 3.18754 4.03984 3.18754 7.25V7.77808C3.18754 8.30077 3.03283 8.81176 2.74289 9.24667L1.88144 10.5388C0.881616 12.0386 1.6449 14.0771 3.38384 14.5514C3.95055 14.7059 4.52204 14.8366 5.09685 14.9436L5.09827 14.9474C5.67502 16.4863 7.2165 17.5625 9 17.5625C10.7835 17.5625 12.325 16.4863 12.9017 14.9474L12.9031 14.9436C13.478 14.8367 14.0495 14.7059 14.6163 14.5514C16.3552 14.0771 17.1185 12.0386 16.1187 10.5388L15.2572 9.24667C14.9673 8.81176 14.8125 8.30077 14.8125 7.77808V7.25C14.8125 4.03984 12.2102 1.4375 9.00004 1.4375ZM11.5324 15.1527C9.85014 15.3537 8.14985 15.3537 6.46763 15.1527C7.00085 15.9189 7.92828 16.4375 9 16.4375C10.0717 16.4375 10.9991 15.9189 11.5324 15.1527ZM4.31254 7.25C4.31254 4.66117 6.41121 2.5625 9.00004 2.5625C11.5889 2.5625 13.6875 4.66117 13.6875 7.25V7.77808C13.6875 8.52287 13.908 9.251 14.3211 9.87071L15.1826 11.1629C15.7565 12.0237 15.3184 13.1938 14.3202 13.466C10.8371 14.416 7.16304 14.416 3.67985 13.466C2.68172 13.1938 2.24361 12.0237 2.8175 11.1629L3.67895 9.87071C4.09209 9.251 4.31254 8.52287 4.31254 7.77808V7.25Z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="m-4 bg-[#fbfbfb] border-2 rounded-3xl overflow-hidden">
                        <Table
                            dataTable={{ columns: dataTable.columns, data: filteredData, }}
                            row={9}
                            classConditions={[
                                {
                                    accessor: "status",
                                    value: "Rejected",
                                    className: "text-red-500",
                                },
                                {
                                    accessor: "status",
                                    value: "Pending",
                                    className: "text-yellow-500",
                                },
                            ]} />
                    </div>
                </div>
            </div>
        </div>
    );
}
