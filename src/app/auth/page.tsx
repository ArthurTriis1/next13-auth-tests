import SessionData from "@src/components/SessionData"

const Page = () => (
    <>
        {/* @ts-expect-error Server Component */}
        <SessionData />
    </>
)

export default Page
