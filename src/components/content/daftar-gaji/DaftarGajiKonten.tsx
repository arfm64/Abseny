'use client';
import Table from "@/components/Table";
import { useState, useEffect } from "react";

const dataTable = {
    columns: [
        { Header: "ID", accessor: "id" },
        { Header: "User ID", accessor: "userId" },
        { Header: "Name", accessor: "name" },
        { Header: "Jabatan", accessor: "jabatan" },
        { Header: "Bulan", accessor: "bulan" },
        { Header: "Tahun", accessor: "tahun" },
        { Header: "Jumlah Absen", accessor: "jumlahAbsen" },
        { Header: "Jumlah Izin", accessor: "jumlahIzin" },
        { Header: "Total Gaji", accessor: "totalGaji" },
        { Header: "Action", accessor: "action" },
    ],
    data: [
        { id: "1", userId: "verinaiohfa12@gmail.com", name: "Verina Ulfa", jabatan: "Manager", bulan: "Januari", tahun: "2022", jumlahAbsen: "3", jumlahIzin: "2", totalGaji: "Rp. 10.000.000" },
        { id: "2", userId: "alvianrahman@gmail.com", name: "Alvian Rahman", jabatan: "Staff", bulan: "Februari", tahun: "2022", jumlahAbsen: "2", jumlahIzin: "3", totalGaji: "Rp. 8.000.000" },
        { id: "3", userId: "raflianur@gmail.com", name: "Rafli Anur", jabatan: "Supervisor", bulan: "Maret", tahun: "2022", jumlahAbsen: "1", jumlahIzin: "4", totalGaji: "Rp. 12.000.000" },
        { id: "4", userId: "rizkisetiawan@gmail.com", name: "Rizki Setiawan", jabatan: "Staff", bulan: "April", tahun: "2022", jumlahAbsen: "4", jumlahIzin: "1", totalGaji: "Rp. 9.000.000" },
        { id: "5", userId: "andirananda@gmail.com", name: "Andi Rananda", jabatan: "Manager", bulan: "Mei", tahun: "2022", jumlahAbsen: "2", jumlahIzin: "2", totalGaji: "Rp. 11.000.000" },
        { id: "6", userId: "deniserahma@gmail.com", name: "Denise Rahma", jabatan: "Supervisor", bulan: "Juni", tahun: "2022", jumlahAbsen: "3", jumlahIzin: "1", totalGaji: "Rp. 10.500.000" },
        { id: "7", userId: "intanputri@gmail.com", name: "Intan Putri", jabatan: "Staff", bulan: "Juli", tahun: "2022", jumlahAbsen: "1", jumlahIzin: "3", totalGaji: "Rp. 8.500.000" },
        { id: "8", userId: "yusufagus@gmail.com", name: "Yusuf Agus", jabatan: "Manager", bulan: "Agustus", tahun: "2022", jumlahAbsen: "2", jumlahIzin: "2", totalGaji: "Rp. 11.500.000" },
        { id: "9", userId: "alberts@gmail.com", name: "Albert S", jabatan: "Supervisor", bulan: "September", tahun: "2022", jumlahAbsen: "3", jumlahIzin: "1", totalGaji: "Rp. 12.500.000" },
        { id: "10", userId: "ariefwijaya@gmail.com", name: "Arief Wijaya", jabatan: "Staff", bulan: "Oktober", tahun: "2022", jumlahAbsen: "1", jumlahIzin: "4", totalGaji: "Rp. 9.500.000" },
        { id: "11", userId: "sitihamidah@gmail.com", name: "Siti Hamidah", jabatan: "Manager", bulan: "November", tahun: "2022", jumlahAbsen: "2", jumlahIzin: "2", totalGaji: "Rp. 10.000.000" },
        { id: "12", userId: "farizal@gmail.com", name: "Farizal", jabatan: "Supervisor", bulan: "Desember", tahun: "2022", jumlahAbsen: "3", jumlahIzin: "1", totalGaji: "Rp. 11.000.000" },
        { id: "13", userId: "sitihamidah@gmail.com", name: "Siti Hamidah", jabatan: "Staff", bulan: "Januari", tahun: "2023", jumlahAbsen: "1", jumlahIzin: "3", totalGaji: "Rp. 8.000.000" },
        { id: "14", userId: "alvianrahman@gmail.com", name: "Alvian Rahman", jabatan: "Manager", bulan: "Februari", tahun: "2023", jumlahAbsen: "2", jumlahIzin: "2", totalGaji: "Rp. 11.500.000" },
        { id: "15", userId: "raflianur@gmail.com", name: "Rafli Anur", jabatan: "Supervisor", bulan: "Maret", tahun: "2023", jumlahAbsen: "3", jumlahIzin: "1", totalGaji: "Rp. 12.000.000" },
        { id: "16", userId: "rizkisetiawan@gmail.com", name: "Rizki Setiawan", jabatan: "Staff", bulan: "April", tahun: "2023", jumlahAbsen: "1", jumlahIzin: "4", totalGaji: "Rp. 9.000.000" },
        { id: "17", userId: "andirananda@gmail.com", name: "Andi Rananda", jabatan: "Manager", bulan: "Mei", tahun: "2023", jumlahAbsen: "2", jumlahIzin: "2", totalGaji: "Rp. 11.000.000" },
        { id: "18", userId: "deniserahma@gmail.com", name: "Denise Rahma", jabatan: "Supervisor", bulan: "Juni", tahun: "2023", jumlahAbsen: "3", jumlahIzin: "1", totalGaji: "Rp. 10.500.000" },
        { id: "19", userId: "intanputri@gmail.com", name: "Intan Putri", jabatan: "Staff", bulan: "Juli", tahun: "2023", jumlahAbsen: "1", jumlahIzin: "3", totalGaji: "Rp. 8.500.000" },
        { id: "20", userId: "yusufagus@gmail.com", name: "Yusuf Agus", jabatan: "Manager", bulan: "Agustus", tahun: "2023", jumlahAbsen: "2", jumlahIzin: "2", totalGaji: "Rp. 11.500.000" },
    ]
};

export default function DaftarGajiKonten() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(dataTable.data);
    const [bulanFilter, setBulanFilter] = useState("all");
    const [tahunFilter, setTahunFilter] = useState("all");


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
        if (bulanFilter !== "all") {
            filtered = filtered.filter(item => item.bulan.toLowerCase() === bulanFilter.toLowerCase());
        }

        if (tahunFilter !== "all") {
            filtered = filtered.filter(item => item.tahun.toLowerCase() === tahunFilter.toLowerCase());
        }

        setFilteredData(filtered);
    }, [searchTerm, bulanFilter, tahunFilter]);
    return (
        <div>
            <div className="w-full h-full overflow-y-auto p-5">
                <div className="block rounded-3xl bg-white w-full h-full">
                    <div className="flex w-full pt-5 ps-5">
                        <h1 className="text-[roboto] font-semibold text-[2rem]">Data Gaji Karyawan</h1>
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
                            <select name="status_permohonan_izin" id="statusPermohonanIzin" className="mr-2 p-2 border-gray-300 focus:outline-none rounded-md border-[1px]" onChange={(e) => setBulanFilter(e.target.value)}>
                                <option value="all">Semua Bulan</option>
                                <option value="januari">Januari</option>
                                <option value="februari">Februari</option>
                                <option value="maret">Maret</option>
                                <option value="april">April</option>
                                <option value="mei">Mei</option>
                                <option value="juni">Juni</option>
                                <option value="juli">Juli</option>
                                <option value="agustus">Agustus</option>
                                <option value="september">September</option>
                                <option value="oktober">Oktober</option>
                                <option value="november">November</option>
                                <option value="desember">Desember</option>
                            </select>
                            <select name="status_permohonan_izin" id="statusPermohonanIzin" className="p-2 border-gray-300 focus:outline-none rounded-md border-[1px]" onChange={(e) => setTahunFilter(e.target.value)}>
                                <option value="all">Semua Tahun</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                            </select>
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
