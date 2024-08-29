interface Props {
    children: any;
}

export function DefaultLayout({ children }: Props) {
    return (
        <main className="main m-auto w-[100%] md:w-10/12 h-[100vh]">
            {children}
        </main>
    )
}