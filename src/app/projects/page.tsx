import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    try {
        const userSession = await getServerSession();
        if(userSession == null) {
            throw Error("User not logged in")
        }
        return (<>
            <div className="w-screen flex flex-col text-center items-center justify-center">
                <h2 className="font-semibold text-xl p-2">
                    Hello {userSession?.user?.name}!!
                </h2>
                <h5>Get started with these projects</h5>
            </div>
        </>)
    } catch (err) {
        console.log(err)
        redirect("/login")
    }

}