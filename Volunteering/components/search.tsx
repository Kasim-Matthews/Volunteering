import useRef from 'react';

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export default function Search() {
    function myFunction() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    function skillchecker() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("mySkill");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[4];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    function statechecker() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myState");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    function filtersection(event){
        var filter, table, tr, td, i, txtValue;
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        filter = event.target.value.toUpperCase();
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[3];
            if (td) {
                if (filter == "") {
                    tr[i].style.display = "";
                }

                else {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase() == filter) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }

        }
    }

    function genderchecker() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myGender");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[3];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase() === filter) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    function genderchecker2() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myGender2");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[3];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase() === filter) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    function genderchecker3() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myGender3");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[3];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase() === filter) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    function handleClick() {
        document.getElementById("Skills").classList.toggle("show");
    }

    function handleClick2() {
        document.getElementById("States").classList.toggle("show");
    }

    function handleClick3() {
        document.getElementById("Gender").classList.toggle("show");
    }

    return (
        <section className="search--container">
            <div className="row">
                <div className="col">
                    <h2 className="form--title">Search Volunteer</h2>
                </div>
            </div>
            <div className="row--spacer">
                <div className="col-sb">
                    <input type="text" id="myInput" onKeyUp={myFunction} placeholder="&#128269;Search for names" />
                </div>
                <div className="row--spacer">
                    <div className="filter">
                        <ul><h2>All filters</h2>
                            <div className="dropdwn">
                                <li>
                                    <button onClick={handleClick} className="dropdwn-btn">Skill<b className="caret"></b></button>
                                </li>
                                <div id="Skills" className="dropdwn--content">
                                    <input id="mySkill" onKeyUp={skillchecker} type="text" className="skill-check" />
                                </div>
                            </div>
                            
                            <div className="dropdwn">
                                <li>
                                    <button onClick={handleClick2} className="dropdwn-btn">State<b className="caret"></b></button>
                                </li>
                                <div id="States" className="dropdwn--content">
                                    <input id="myState" onKeyUp={statechecker} type="text" className="state-check" />
                                </div>
                            </div>

                            <div className="dropdwn">
                                <li>
                                    <button onClick={handleClick3} className="dropdwn-btn">Gender<b className="caret"></b></button>
                                </li>
                                <div id="Gender" className="dropdwn--content">

                                    <div className="gender-check">
                                        <input id="Showall" onChange={filtersection} type="checkbox" value="" />
                                        <b className="checker--text">Show All</b>
                                    </div>

                                    <div className="gender-check">
                                        <input id="myGender" onChange={filtersection} type="checkbox" value="M" />
                                        <b className="checker--text">M</b>
                                    </div>
                                    <div className="gender-check">
                                        <input id="myGender2" onChange={filtersection} type="checkbox" value="F" />
                                        <b className="checker--text">F</b>
                                    </div>

                                    <div className="gender-check">
                                        <input id="myGender3" onChange={filtersection} type="checkbox" value="Undefined" />
                                        <b className="checker--text">undefined</b>
                                    </div>
                                </div>
                            </div>

                        </ul>
                    </div>

                    <div className="col-m">
                        <table id="myTable">
                            <tr className="headers">
                                <th>Name</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Gender</th>
                                <th>Skills</th>
                                <th>Add</th>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>Jacksonville</td>
                                <td>Florida</td>
                                <td>M</td>
                                <td>photography, lifting, something</td>
                                <td>
                                    <button>Add</button>
                                </td>

                            </tr>
                            <tr>
                                <td>Jane Jackson</td>
                                <td>Jacksonville</td>
                                <td>Texas</td>
                                <td>F</td>
                                <td>photography</td>
                                <td>
                                    <button>Add</button>
                                </td>

                            </tr>

                            <tr>
                                <td>Michael Heard</td>
                                <td>Miami</td>
                                <td>Florida</td>
                                <td>undefined</td>
                                <td>decoration</td>
                                <td>
                                    <button>Add</button>
                                </td>

                            </tr>

                            <tr>
                                <td>Alex Edwards</td>
                                <td>Austin</td>
                                <td>Texas</td>
                                <td>M</td>
                                <td>cleaning</td>
                                <td>
                                    <button>Add</button>
                                </td>

                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}