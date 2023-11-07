import React from 'react';
import {ProfileResponseType, SidebarType} from "../profileReducer";
import About from "./About/About";
import {UpdateProfileType} from "../../../api/profileApi";

type PropsType = {
    sidebar: SidebarType
    profile: ProfileResponseType | null
    updateProfile: (profile: UpdateProfileType) => Promise<any>
    isOwner: boolean
}

export const Sidebar = (props: PropsType) => {
    const {sidebar, isOwner, updateProfile, profile} = props
    return (
        <div>
            <About about={sidebar.about}
                   profile={profile}
                   updateProfile={updateProfile}
                   isOwner={isOwner}
            />
        </div>
    );
};

