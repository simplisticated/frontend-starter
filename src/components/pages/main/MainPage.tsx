import HeaderView from "../../views/header/HeaderView";

export default function MainPage() {
    return (
        <>
            <HeaderView />
            <main>
                <div className="container-fluid">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td colSpan={1}>Test</td>
                                <td colSpan={1}>Test</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td colSpan={1}>Test</td>
                                <td colSpan={1}>Test</td>
                            </tr>
                        </tbody>
                        <tfoot />
                    </table>
                </div>
            </main>
        </>
    );
}
