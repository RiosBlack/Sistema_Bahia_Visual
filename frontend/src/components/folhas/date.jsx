import dayjs from "dayjs";

export default function DateFolhas() {
    const calendar = dayjs().date(); 
    return (
        <div className="grid px-7 justify-items-center content-center font-bold border border-[#17112A] p-2 rounded-lg">
            <h2 className="pb-3">Data</h2>
            <p>28/10/1998</p>
            <p>{calendar}</p>
        </div>
    );
}
