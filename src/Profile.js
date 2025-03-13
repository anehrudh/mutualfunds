import React from 'react';
import './Profile.css';

const Profile = () => {
    const user = {// Replace with actual photo URL
        name: 'Abhishek Bhat',
        totalInvested: 50000,
        amountAfterPeriod: 75000,
        totalEarned: 25000,
        timeRemaining: '2 years, 3 months'
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <img src={"https://static.vecteezy.com/system/resources/previews/040/216/253/non_2x/ai-generated-portrait-of-a-young-man-clip-art-free-png.png"} alt="User Photo" className="profile-photo" />
                <h1 className="profile-name">{user.name}</h1>
                <div className="profile-info">
                    <p>Total Invested Amount: Rs {user.totalInvested}</p>
                    <p>Amount After Mutual Fund Period: Rs {user.amountAfterPeriod}</p>
                    <p>Total Earned: Rs {user.totalEarned}</p>
                    <p>Time Remaining: {user.timeRemaining}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
