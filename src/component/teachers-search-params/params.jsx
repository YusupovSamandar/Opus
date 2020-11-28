import React from "react";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

function Params() {
    const [state, setState] = React.useState({
        group: '',
        name: 'hai',
    });
    const [month, setMonth] = React.useState({
        month: 'September'
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    const handleChange2 = (event) => {
        const name = event.target.name;
        setMonth({
            ...state,
            [name]: event.target.value,
        });
    };
    return (
        <div style={{ border: "1px solid #707070" }}>
            <h3 style={{ position: "relative", bottom: "10px", backgroundColor: "#F3F3FB", left: "10px", display: "inline", padding: "10px" }}>Qidirish Parametrlari</h3>
            <ul>

                <FormControl>
                    <h3>Guruh:</h3>
                    <NativeSelect
                        value={state.group}
                        onChange={handleChange}
                        name="group"
                        inputProps={{ 'aria-label': 'group' }}
                    >
                        <option value="">Beauty and the beast</option>
                        <option value="intermediate">Big hero</option>
                        <option value="upperIntermediate">Ferdinand</option>
                        <option value="Beginner">Croods</option>
                    </NativeSelect>
                    <FormHelperText>Iltimos Guruhni kiriting</FormHelperText>
                    <h3>Oy:</h3>
                    <NativeSelect
                        value={month.month}
                        onChange={handleChange2}
                        name="month"
                        inputProps={{ 'aria-label': 'month' }}
                    >
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </NativeSelect>
                    <FormHelperText>Iltimos Oyni kiriting</FormHelperText>
                </FormControl>
                <div style={{ marginLeft: "40px" }}>
                    <img style={{ width: "100px", cursor: "pointer", borderRadius: "100%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTas9q0FVF21ebCV4tNwgYXc_vakCYAddS-Bw&usqp=CAU" alt="" /><br />
                    <img style={{ width: "100px", cursor: "pointer", borderRadius: "100%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTas9q0FVF21ebCV4tNwgYXc_vakCYAddS-Bw&usqp=CAU" alt="" />
                </div>
            </ul>
        </div>
    )

}

export default Params;