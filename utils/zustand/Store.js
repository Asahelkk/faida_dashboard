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
            { name: "user" }
        )
    )
);




