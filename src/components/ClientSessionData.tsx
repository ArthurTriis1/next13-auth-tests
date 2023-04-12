"use client"

import { authOptions } from "@src/pages/api/auth/[...nextauth]";
import { useSession } from "next-auth/react";

export default function SessionData() {
    const { data } = useSession()

    return <pre>{JSON.stringify(data, null, 2)}</pre>
}