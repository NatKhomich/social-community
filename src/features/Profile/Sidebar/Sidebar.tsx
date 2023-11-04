import React from 'react';
import {ProfileResponseType, SidebarType} from "../profileReducer";
import {UsersResponseType} from "../../Users/usersReducer";
import About from "./About/About";

type PropsType = {
    sidebar: SidebarType
    profile: ProfileResponseType | null
    // users: UsersResponseType[]
}

export const Sidebar = (props: PropsType) => {
    return (
        <div>
            <About about={props.sidebar.about} profile={props.profile} />
        </div>
    );
};

