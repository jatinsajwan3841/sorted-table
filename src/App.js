import React from "react";
import "./App.css";

const App = () => {
    const [studData, setStudData] = React.useState([]);
    const [forceRender, setForceRender] = React.useState(0);

    const getData = async () => {
        let dat = await fetch(
            "https://63e0bacd59bb472a74278f0f.mockapi.io/api/v1/students"
        );
        dat = await dat.json();
        setStudData(dat);
    };

    const sortData = () => {
        let sortedDat = studData.sort((a, b) => a.class - b.class);
        setStudData(sortedDat);
        setForceRender((prev) => prev + 1);
    };

    React.useEffect(() => {
        getData();
    }, []);
    return (
        <div className="val-table">
            <button onClick={sortData}>Sort by Class</button>
            <h2>Fake Student Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Marks</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {studData &&
                        studData.map((data, i) => (
                            <tr key={i}>
                                <td>
                                    <img src={data.avatar} className="avatar" />
                                </td>
                                <td>{data.name}</td>
                                <td>{data.class}</td>
                                <td>{data.marks}</td>
                                <td>{data.phone}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
