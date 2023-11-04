import React from 'react';
import {ProfileResponseType, SidebarType} from "../profileReducer";
import About from "./About/About";
import {UpdateProfileType} from "../../../api/profileApi";

type PropsType = {
    sidebar: SidebarType
    profile: ProfileResponseType | null
    updateProfile: (profile: UpdateProfileType) => void
    // users: UsersResponseType[]
}

export const Sidebar = (props: PropsType) => {
    return (
        <div>
            <About about={props.sidebar.about} profile={props.profile} updateProfile={props.updateProfile} />
        </div>
    );
};

