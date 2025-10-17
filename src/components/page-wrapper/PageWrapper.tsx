import HeaderView from "../views/header/HeaderView";

export default function PageWrapper(props: Props) {
    return (
        <>
            <HeaderView />
            <main className="pt-[180px] md:pt-32 px-4 pb-10">
                {props.insideMain}
            </main>
            {props.afterMain}
        </>
    );
}

interface Props {
    insideMain: JSX.Element;
    afterMain?: JSX.Element;
}
