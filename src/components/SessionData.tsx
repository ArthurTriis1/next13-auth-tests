import { getServerSession } from "next-auth";

export default async function SessionData() {
    const session = await getServerSession()

    return <pre>{JSON.stringify(session, null, 2)}</pre>
}