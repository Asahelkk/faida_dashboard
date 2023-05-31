"use client";

import { useUserStore } from '@utils/zustand/Store'
import React from 'react'
import { useRouter } from 'next/navigation'

const AuthCheck = ({ children }) => {
    const router = useRouter();
    const user = useUserStore((state) => state.user);

    if (!user?.token) {
        router.push('/sign_in');
    }

    return <>{children}</>;
};

export default AuthCheck