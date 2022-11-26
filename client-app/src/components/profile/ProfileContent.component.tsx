import { Tab } from "semantic-ui-react";
import ProfileImages from "./ProfileImages.component";
import { UserProfile } from "../../models/UserProfile.model";
import { observer } from "mobx-react-lite";

interface Props {
    profile: UserProfile;
}

const borderRadStyle = {
    borderRadius: '6px'
}

const ProfileContent = ({ profile }: Props) => {
    const panes = [
        { menuItem: 'About', render: () => <Tab.Pane style={borderRadStyle}>About</Tab.Pane> },
        { menuItem: 'Photos', render: () => <ProfileImages images={profile.images} /> },
        { menuItem: 'Events', render: () => <Tab.Pane style={borderRadStyle}>Events</Tab.Pane> },
        { menuItem: 'Followers', render: () => <Tab.Pane style={borderRadStyle}>Followers</Tab.Pane> },
        { menuItem: 'Following', render: () => <Tab.Pane style={borderRadStyle}>Following</Tab.Pane> },
    ];

    return (
        <Tab
            menu={{fluid: true, vertical: true}}
            menuPosition='right'
            panes={panes}
        />
    );
};

export default observer(ProfileContent);