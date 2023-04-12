import ClientSessionData from "@src/components/ClientSessionData"
import SessionData from "@src/components/SessionData"

const Page = () => (
    <>
        {/* @ts-expect-error Server Component */}
        <SessionData />
        <ClientSessionData />
    </>
)

export default Page
