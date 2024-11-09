'use client';
import Table from "@/components/Table";
import { useState, useEffect } from "react";

const dataTable = {
    columns: [
        { Header: "ID", accessor: "id" },
        { Header: "User ID", accessor: "userId" },
        { Header: "Name", accessor: "name" },
        { Header: "Address", accessor: "address" },
        { Header: "Phone Number", accessor: "phoneNumber" },
        { Header: "Status", accessor: "status" },
        { Header: "Action", accessor: "action" },
    ],
    data: [
        {
            id: "1",
            userId: "verinaiohfa12@gmail.com",
            name: "Verina Ulfa",
            address: "Menteng, DKI Jakarta",
            phoneNumber: "+6281923421821",
            status: "Manager",
        },
        {
            id: "2",
            userId: "alvianrahman@gmail.com",
            name: "Alvian Rahman",
            address: "Kebayoran Lama, DKI Jakarta",
            phoneNumber: "+6281234567890",
            status: "Staff",
        },
        {
            id: "3",
            userId: "raflianur@gmail.com",
            name: "Rafli Anur",
            address: "Cimahi, Jawa Barat",
            phoneNumber: "+6282345678910",
            status: "Supervisor",
        },
        {
            id: "4",
            userId: "rizkisetiawan@gmail.com",
            name: "Rizki Setiawan",
            address: "Sleman, Yogyakarta",
            phoneNumber: "+6283456789120",
            status: "Staff",
        },
        {
            id: "5",
            userId: "andirananda@gmail.com",
            name: "Andi Rananda",
            address: "Medan, Sumatera Utara",
            phoneNumber: "+6284567891230",
            status: "Manager",
        },
        {
            id: "6",
            userId: "deniserahma@gmail.com",
            name: "Denise Rahma",
            address: "Cakung, DKI Jakarta",
            phoneNumber: "+6285678912340",
            status: "Supervisor",
        },
        {
            id: "7",
            userId: "juliapurnama@gmail.com",
            name: "Julia Purnama",
            address: "Padang, Sumatera Barat",
            phoneNumber: "+6286789123450",
            status: "Staff",
        },
        {
            id: "8",
            userId: "fadlanhafiz@gmail.com",
            name: "Fadlan Hafiz",
            address: "Sidoarjo, Jawa Timur",
            phoneNumber: "+6287891234560",
            status: "Manager",
        },
        {
            id: "9",
            userId: "arinafitri@gmail.com",
            name: "Arina Fitri",
            address: "Depok, Jawa Barat",
            phoneNumber: "+6288912345670",
            status: "Staff",
        },
        {
            id: "10",
            userId: "evansetiawan@gmail.com",
            name: "Evan Setiawan",
            address: "Pontianak, Kalimantan Barat",
            phoneNumber: "+6289123456780",
            status: "Supervisor",
        },
        {
            id: "11",
            userId: "farahputri@gmail.com",
            name: "Farah Putri",
            address: "Bogor, Jawa Barat",
            phoneNumber: "+6281023456789",
            status: "Staff",
        },
        {
            id: "12",
            userId: "dimasaryanto@gmail.com",
            name: "Dimas Aryanto",
            address: "Bekasi, Jawa Barat",
            phoneNumber: "+6282134567890",
            status: "Manager",
        },
        {
            id: "13",
            userId: "mariapurnama@gmail.com",
            name: "Maria Purnama",
            address: "Manado, Sulawesi Utara",
            phoneNumber: "+6283234567891",
            status: "Staff",
        },
        {
            id: "14",
            userId: "ariefhermawan@gmail.com",
            name: "Arief Hermawan",
            address: "Batam, Kepulauan Riau",
            phoneNumber: "+6284345678912",
            status: "Supervisor",
        },
        {
            id: "15",
            userId: "suratiningsih@gmail.com",
            name: "Surati Ningsih",
            address: "Ambon, Maluku",
            phoneNumber: "+6285456789123",
            status: "Staff",
        },
        {
            id: "16",
            userId: "yusufgilang@gmail.com",
            name: "Yusuf Gilang",
            address: "Malang, Jawa Timur",
            phoneNumber: "+6286567891234",
            status: "Manager",
        },
        {
            id: "17",
            userId: "febianur@gmail.com",
            name: "Febi Anur",
            address: "Denpasar, Bali",
            phoneNumber: "+6287678912345",
            status: "Staff",
        },
        {
            id: "18",
            userId: "intansari@gmail.com",
            name: "Intan Sari",
            address: "Surabaya, Jawa Timur",
            phoneNumber: "+6288789123456",
            status: "Supervisor",
        },
        {
            id: "19",
            userId: "kevinrizky@gmail.com",
            name: "Kevin Rizky",
            address: "Bandung, Jawa Barat",
            phoneNumber: "+6289891234567",
            status: "Staff",
        },
        {
            id: "20",
            userId: "lisavitri@gmail.com",
            name: "Lisa Vitri",
            address: "Palembang, Sumatera Selatan",
            phoneNumber: "+6289901234567",
            status: "Manager",
        }
    ]
};

export default function DaftarKaryawanKonten() {
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
                        <h1 className="text-[roboto] font-semibold text-[2rem]">Data Karyawan</h1>
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
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.00004 1.4375C5.78989 1.4375 3.18754 4.03984 3.18754 7.25V7.77808C3.18754 8.30077 3.03283 8.81176 2.74289 9.24667L1.88144 10.5388C0.881616 12.0386 1.6449 14.0771 3.38384 14.5514C3.95055 14.7059 4.52204 14.8366 5.09685 14.9436L5.09827 14.9474C5.67502 16.4863 7.2165 17.5625 9 17.5625C10.7835 17.5625 12.325 16.4863 12.9017 14.9474L12.9031 14.9436C13.478 14.8367 14.0495 14.7059 14.6163 14.5514C16.3552 14.0771 17.1185 12.0386 16.1187 10.5388L15.2572 9.24667C14.9673 8.81176 14.8125 8.30077 14.8125 7.77808V7.25C14.8125 4.03984 12.2102 1.4375 9.00004 1.4375ZM11.5324 15.1527C9.85014 15.3537 8.14985 15.3537 6.46763 15.1527C7.00085 15.9189 7.92828 16.4375 9 16.4375C10.0717 16.4375 10.9991 15.9189 11.5324 15.1527ZM4.31254 7.25C4.31254 4.66117 6.41121 2.5625 9.00004 2.5625C11.5889 2.5625 13.6875 4.66117 13.6875 7.25V7.77808C13.6875 8.52287 13.908 9.251 14.3211 9.87071L15.1826 11.1629C15.7565 12.0237 15.3184 13.1938 14.3202 13.466C10.8371 14.416 7.16304 14.416 3.67985 13.466C2.68172 13.1938 2.24361 12.0237 2.8175 11.1629L3.67895 9.87071C4.09209 9.251 4.31254 8.52287 4.31254 7.77808V7.25Z" fill="currentColor" />
                                </svg>
                            </button>
                            <button className="flex py-2 px-3 items-center bg-blue-500 text-white font-bold rounded-[10px] text-[13px] ml-2 hover:bg-blue-700">
                                <svg className="mr-2 p-0.5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path fillRule="nonzero" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                                </svg>
                                Tambah Karyawan
                            </button>
                            <button className="flex py-2 px-5 items-center bg-green-600 hover:bg-green-800 text-white font-bold rounded-[10px] text-[14px] ml-2">
                                Export
                            </button>
                        </div>
                    </div>
                    <div className="m-4 bg-[#fbfbfb] border-2 rounded-3xl overflow-hidden">
                        <Table
                            dataTable={{ columns: dataTable.columns, data: filteredData }}
                            row={9}
                            classConditions={
                                [{
                                    accessor: 'status',
                                    value: 'Manager',
                                    className: 'font-bold'
                                }]
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
