'use client';
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardKonten from "@/components/content/dashboard/DashboardKonten";
import DaftarKaryawanKonten from "@/components/content/daftar-karyawan/DaftarKaryawan";
import { motion } from "framer-motion";
import DaftarAbsensiKonten from "@/components/content/daftar-absensi/DaftarAbsensi";
import DaftarGajiKonten from "@/components/content/daftar-gaji/DaftarGajiKonten";
import PeriksaPermohonanIzinKonten from "@/components/content/perika-permohonan-izin/PeriksaPermohonanIzinKonten";

type PageName =
  | "Dashboard"
  | "Daftar Karyawan"
  | "Daftar Absensi"
  | "Daftar Gaji"
  | "Periksa permohonan izin"
  | "Atur Wilayah Absensi";

export default function Dashboard() {
  const [activePage, setActivePage] = useState<PageName>("Dashboard");

  const handlePageChange = (page: PageName) => {
    setActivePage(page);
  };
  return (
    <div className="flex w-full h-screen">
      <Sidebar activePage={activePage} handlePageChange={handlePageChange} />
      <div className="w-full h-full overflow-y-auto p-5">
        <div className="block rounded-3xl bg-white w-full h-full">
          {activePage === "Dashboard" && (
            <motion.div
              key={activePage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <DashboardKonten />
            </motion.div>
          )}
          {activePage === "Daftar Karyawan" && (
            <motion.div
              key={activePage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <DaftarKaryawanKonten />
            </motion.div>
          )}
          {activePage === "Daftar Absensi" && (
            <motion.div
              key={activePage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <DaftarAbsensiKonten />
            </motion.div>
          )}
          {activePage === "Daftar Gaji" && (
            <motion.div
              key={activePage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <DaftarGajiKonten />
            </motion.div>
          )}
          {activePage === "Periksa permohonan izin" && (
            <motion.div
              key={activePage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <PeriksaPermohonanIzinKonten />
            </motion.div>
          )}
        </div>
      </div>
    </div >
  );
}
