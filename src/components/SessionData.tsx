import { authOptions } from "@src/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SessionData() {
    const session = await getServerSession(authOptions)

    return <pre>{JSON.stringify(session, null, 2)}</pre>
}