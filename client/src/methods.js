import React from "react";

// Function that depending on the method will return the correct component
function methods(method) {

    // Change the state of the method every time the function is called

    // If the method is pTel then return the pTel component
    if (method === "All Methods") {
        return (
            <select id="segundoForm" class="login__selector" name="typepins" value={selects} onChange={e => setSelects(e.target.value)}>
                <option value="pJefe">send PIN to manager's email</option>
                <option value="pSMS">send PIN by SMS</option>
            </select>
        )
    }
    else if (method === "pJefe") {
        return (
            <select id="segundoForm" class="login__selector" name="typepins" value={selects} onChange={e => setSelects(e.target.value)}>
                <option value="pJefe">send PIN to manager's email</option>
            </select>
        )
    }
    else if (method === "pSMS") {
        return (
            <select id="segundoForm" class="login__selector" name="typepins" value={selects} onChange={e => setSelects(e.target.value)}>
                <option value="pSMS">send PIN by SMS</option>
            </select>
        )
    }
}