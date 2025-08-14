
import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

const UserDisplay: React.FC = () => {
    const { userProfile, greetingSettings } = useAppContext();
    
    if (!userProfile) return null;

    // CSS class replaces inline style
    
    const nameClass = greetingSettings?.textEffect && greetingSettings.textEffect !== 'none' 
        ? `text-effect-${greetingSettings.textEffect}` 
        : '';

    return (
        <div className="mt-auto pt-6 p-4 border-t border-border-color shrink-0">
            <h3 className="text-xs text-text-dark mb-2 font-semibold tracking-wider">OPERATOR</h3>
            <div 
                className={`font-bold truncate userdisplay-name ${nameClass}`}
                title={userProfile.name}
            >
                {userProfile.name}
            </div>
        </div>
    );
};

export default UserDisplay;
