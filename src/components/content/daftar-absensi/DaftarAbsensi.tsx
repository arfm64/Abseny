'use client';
import Table from "@/components/Table";
import { useState, useEffect } from "react";

const dataTable = {
    columns: [
        { Header: "ID", accessor: "id" },
        { Header: "User ID", accessor: "userId" },
        { Header: "Name", accessor: "name" },
        { Header: "Date", accessor: "date" },
        { Header: "Check In", accessor: "checkIn" },
        { Header: "Check Out", accessor: "checkOut" },
        { Header: "Action", accessor: "action" }
    ],
    data: [
        {
            id: "1",
            userId: "verinaiohfa12@gmail.com",
            name: "Verina Ulfa",
            date: "2022-01-01",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "2",
            userId: "alvianrahman@gmail.com",
            name: "Alvian Rahman",
            date: "2022-01-02",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "3",
            userId: "raflianur@gmail.com",
            name: "Rafli Anur",
            date: "2022-01-03",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "4",
            userId: "rizkisetiawan@gmail.com",
            name: "Rizki Setiawan",
            date: "2022-01-04",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "5",
            userId: "andirananda@gmail.com",
            name: "Andi Rananda",
            date: "2022-01-05",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "6",
            userId: "deniserahma@gmail.com",
            name: "Denise Rahma",
            date: "2022-01-06",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "7",
            userId: "juliapurnama@gmail.com",
            name: "Julia Purnama",
            date: "2022-01-07",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "8",
            userId: "fadlanhafiz@gmail.com",
            name: "Fadlan Hafiz",
            date: "2022-01-08",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "9",
            userId: "arinafitri@gmail.com",
            name: "Arina Fitri",
            date: "2022-01-09",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "10",
            userId: "evansetiawan@gmail.com",
            name: "Evan Setiawan",
            date: "2022-01-10",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "11",
            userId: "farahputri@gmail.com",
            name: "Farah Putri",
            date: "2022-01-11",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "12",
            userId: "dimasaryanto@gmail.com",
            name: "Dimas Aryanto",
            date: "2022-01-12",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "13",
            userId: "mariapurnama@gmail.com",
            name: "Maria Purnama",
            date: "2022-01-13",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "14",
            userId: "ariefhermawan@gmail.com",
            name: "Arief Hermawan",
            date: "2022-01-14",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "15",
            userId: "suratiningsih@gmail.com",
            name: "Surati Ningsih",
            date: "2022-01-15",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "16",
            userId: "yusufgilang@gmail.com",
            name: "Yusuf Gilang",
            date: "2022-01-16",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "17",
            userId: "febianur@gmail.com",
            name: "Febi Anur",
            date: "2022-01-17",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "18",
            userId: "intansari@gmail.com",
            name: "Intan Sari",
            date: "2022-01-18",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "19",
            userId: "kevinrizky@gmail.com",
            name: "Kevin Rizky",
            date: "2022-01-19",
            checkIn: "08:00",
            checkOut: "17:00"
        },
        {
            id: "20",
            userId: "lisavitri@gmail.com",
            name: "Lisa Vitri",
            date: "2022-01-20",
            checkIn: "08:00",
            checkOut: "17:00"
        },
    ]
};

export default function DaftarAbsensiKonten() {
    const [searchTerm, setSearchTerm] = useState("");
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

        setFilteredData(filtered);
    }, [searchTerm]);
    return (
        <div>
            <div className="w-full h-full overflow-y-auto p-5">
                <div className="block rounded-3xl bg-white w-full h-full">
                    <div className="flex w-full pt-5 ps-5">
                        <h1 className="text-[roboto] font-semibold text-[2rem]">Data Absensi Karyawan</h1>
                    </div>
                    <hr className="my-3 mx-4" />
                    <div className="flex w-full py-3 px-4 items-center">
                        <div className="flex relative w-3/12">
                            <input className="w-full px-3 py-1 border-gray-300 focus:outline-none rounded-md border-[1px]" type="text" placeholder="search" onChange={e => setSearchTerm(e.target.value)} />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                        </div>
                        <div className="flex w-full justify-end items-center">
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
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.71475 2.1875C3.72646 2.1875 3.73821 2.1875 3.75 2.1875L14.2853 2.1875C14.7855 2.18748 15.2131 2.18746 15.5548 2.23057C15.9173 2.27629 16.2676 2.37897 16.5554 2.64893C16.8482 2.92366 16.9645 3.26642 17.0156 3.62304C17.0626 3.95063 17.0625 4.35798 17.0625 4.82269L17.0625 5.40509C17.0625 5.77147 17.0625 6.08821 17.0352 6.35233C17.0057 6.63655 16.9414 6.9032 16.7869 7.1592C16.6336 7.41328 16.4271 7.5977 16.1891 7.76303C15.9649 7.91877 15.6784 8.08002 15.3415 8.26966L13.1347 9.51196C12.6323 9.79474 12.4574 9.89657 12.3406 9.99795C12.0724 10.2308 11.9189 10.4891 11.8467 10.8128C11.8158 10.9511 11.8125 11.1254 11.8125 11.6547L11.8125 13.7037C11.8125 14.3797 11.8126 14.9535 11.743 15.3947C11.6691 15.8638 11.4974 16.3137 11.0473 16.5952C10.6076 16.8702 10.1231 16.845 9.65235 16.7332C9.19894 16.6255 8.6402 16.4071 7.96977 16.1449L7.90461 16.1195C7.59057 15.9967 7.31558 15.8892 7.09788 15.7768C6.86392 15.656 6.64665 15.5057 6.48042 15.2718C6.31231 15.0352 6.24491 14.7815 6.21486 14.5222C6.18746 14.2858 6.18748 14.002 6.1875 13.6855L6.1875 11.6547C6.1875 11.1254 6.18416 10.9512 6.15331 10.8128C6.08115 10.4891 5.92757 10.2308 5.65938 9.99795C5.5426 9.89657 5.36769 9.79474 4.86535 9.51196L2.65853 8.26967C2.32162 8.08002 2.03515 7.91877 1.81094 7.76303C1.57293 7.5977 1.36643 7.41328 1.2131 7.1592C1.05861 6.9032 0.99428 6.63655 0.964836 6.35233C0.937473 6.08821 0.937487 5.77147 0.937503 5.40509L0.937504 4.861C0.937504 4.84818 0.937503 4.83541 0.937502 4.82268C0.937467 4.35797 0.937436 3.95063 0.98438 3.62304C1.03548 3.26642 1.15182 2.92366 1.44463 2.64893C1.73237 2.37897 2.08271 2.27629 2.44518 2.23057C2.78694 2.18746 3.21455 2.18748 3.71475 2.1875ZM2.58597 3.34672C2.33573 3.37829 2.25615 3.43018 2.21438 3.46937C2.17769 3.50379 2.12928 3.56439 2.098 3.78262C2.06386 4.02091 2.0625 4.34651 2.0625 4.861V5.37836C2.0625 5.77902 2.0632 6.03708 2.08385 6.23641C2.10308 6.42204 2.13609 6.5113 2.1763 6.57793C2.21768 6.64649 2.28638 6.7235 2.45275 6.83907C2.62804 6.96083 2.86752 7.09631 3.23245 7.30174L5.41722 8.53162C5.43768 8.54313 5.45783 8.55447 5.47768 8.56564C5.89671 8.80138 6.18209 8.96193 6.3969 9.14842C6.84042 9.53347 7.12498 10.0012 7.25135 10.568C7.31277 10.8434 7.31267 11.1523 7.31252 11.5884C7.31251 11.6102 7.3125 11.6323 7.3125 11.6547V13.6568C7.3125 14.0109 7.31338 14.2287 7.33238 14.3927C7.34957 14.541 7.37664 14.5908 7.39748 14.6201C7.42019 14.6521 7.46518 14.7004 7.61402 14.7772C7.77333 14.8595 7.99281 14.946 8.33942 15.0815C9.06018 15.3633 9.54498 15.5514 9.91232 15.6386C10.2713 15.7239 10.3896 15.6797 10.4508 15.6414C10.5017 15.6095 10.5805 15.5448 10.6317 15.2195C10.6858 14.8764 10.6875 14.3926 10.6875 13.6568V11.6547C10.6875 11.6323 10.6875 11.6102 10.6875 11.5884C10.6873 11.1523 10.6872 10.8434 10.7487 10.568C10.875 10.0012 11.1596 9.53347 11.6031 9.14842C11.8179 8.96194 12.1033 8.80139 12.5223 8.56565C12.5422 8.55448 12.5623 8.54314 12.5828 8.53162L14.7676 7.30174C15.1325 7.09631 15.372 6.96083 15.5473 6.83907C15.7136 6.7235 15.7823 6.64649 15.8237 6.57793C15.8639 6.5113 15.8969 6.42204 15.9162 6.23641C15.9368 6.03708 15.9375 5.77902 15.9375 5.37836V4.861C15.9375 4.34651 15.9361 4.02091 15.902 3.78262C15.8707 3.56439 15.8223 3.50379 15.7856 3.46937C15.7439 3.43018 15.6643 3.37829 15.414 3.34672C15.1511 3.31356 14.7953 3.3125 14.25 3.3125H3.75C3.20473 3.3125 2.84891 3.31356 2.58597 3.34672Z" fill="#2E2E2E" />
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
                            dataTable={{ columns: dataTable.columns, data: filteredData }}
                            row={9}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
