import React from 'react';
import ImageProfile from './imageProfile';
import FormProfile from './formProfile';

export default function providersProfileDetails() {
    return (
        <div className="w-full grid justify-items-center p-2">
            <ImageProfile />
            <FormProfile />
        </div>
    );
}
