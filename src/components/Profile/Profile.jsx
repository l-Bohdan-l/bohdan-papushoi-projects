// import user from '../../user.json'
import {ProfileContainer, ImageWrapper, ProfileImage, ProfileName, ProfileTag, ProfileLocation, ProfileStats, ProfileStatsItem} from './Profile.styled'
function Profile({username, tag, location, avatar, stats}) {  
    return (
        <ProfileContainer>            
            <ImageWrapper>
                <ProfileImage src={avatar} alt="Аватар користувача"/>
                <ProfileName>{username}</ProfileName>
                <ProfileTag>@{tag}</ProfileTag>
                <ProfileLocation>{location}</ProfileLocation>
            </ImageWrapper>
            <ProfileStats>
                <ProfileStatsItem>
                    <span>Followers</span>
                    <span>{ stats.followers }</span>
                </ProfileStatsItem>
                <ProfileStatsItem>
                    <span>Likes</span>
                    <span>{ stats.likes}</span>
                </ProfileStatsItem>
                <ProfileStatsItem>
                    <span>Views</span>
                    <span>{ stats.views}</span>
                </ProfileStatsItem>
                
            </ProfileStats>       
        </ProfileContainer>       
    )

}

export default Profile