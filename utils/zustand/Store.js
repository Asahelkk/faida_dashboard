import { create } from 'zustand'
import { devtools, persist } from "zustand/middleware";

export const useUserPhoneNumberStore = create(
    devtools(
        persist(
            (set) => ({
                user: {
                    phoneNumber: null
                },
                setStorePhoneNumber: (phoneNumber) =>
                    set((state) => ({
                        user: {
                            ...state.user,
                            phoneNumber: phoneNumber
                        }
                    })),
                removePhoneNumber: () =>
                    set((state) => ({
                        user: {
                            ...state.user,
                            phoneNumber: null
                        }
                    })),
            }),
            { name: "user_phoneNumber" }
        )
    )
);

export const useUserStore = create(
    devtools(
        persist(
            (set) => ({
                user: {
                    token: null,
                    userName: null
                },
                setUser: (response) =>
                    set((state) => ({
                        user: {
                            ...state.user,
                            token: response.token,
                            userName: response.user
                        }
                    })),
                removeUser: () =>
                    set((state) => ({
                        user: {
                            ...state.user,
                            token: null,
                            userName: null
                        }
                    })),
            }),
            { name: "user" }
        )
    )
);



