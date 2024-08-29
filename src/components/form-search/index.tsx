import { useState } from "react";

interface Props {
    onChangeSearch: (search: string) => void;
}

export function FormSearch({ onChangeSearch }: Props) {
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        onChangeSearch(search);
    }

    return (
        <div className="w-[100%] flex gap-x-4 justify-center">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Colombia, Francia, Inglaterra ..."
                onChange={e => setSearch(e.target.value)}
                value={search} />
            <button
                type="button"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={handleSearch}>
                Buscar
            </button>
        </div>
    )
}