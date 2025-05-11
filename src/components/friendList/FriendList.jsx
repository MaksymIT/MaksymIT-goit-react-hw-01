import FriendListItem from "../friendListItem/FriendListItem";

export default function FriendList({friends}) {
    return (
<ul>
	<li>
        <FriendListItem friends={friends} />
	</li>
</ul>

    )
}

