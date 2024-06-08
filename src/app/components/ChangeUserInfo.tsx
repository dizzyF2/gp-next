'use client';

import React, { useState } from 'react'

function ChangeUserInfo() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isEditing, setIsEditing] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [firstName, setFirstName] = useState("John");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [lastName, setLastName] = useState("cena");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setIsEditing(!isEditing);
            }}
        >
            <label>
                First name:{" "}
                {isEditing ? (
                    <input
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                ) : (
                    <b>{firstName}</b>
                )}
            </label>
            <label>
                Last name:{" "}
                {isEditing ? (
                    <input
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                    />
                ) : (
                    <b>{lastName}</b>
                )}
            </label>
            <button type="submit">{isEditing ? "Save" : "Edit"} Profile</button>
            <p>
                <i>
                    Hello, {firstName} {lastName}!
                </i>
            </p>
        </form>
    );
}

export default ChangeUserInfo