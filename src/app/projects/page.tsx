import { fetchProjects } from "@/actions/fetch-projects";
import ProjectsView from "@/components/ui/projects-view";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    try {
        const userSession = await getServerSession();
        if (userSession == null) {
            throw Error("User not logged in")
        }
        const projects = await fetchProjects({
            email: userSession.user?.email!,
            //@ts-ignore
            authType: userSession.user?.provider as "google" | "github"
        })
        console.log(projects)
        return (<>
            <div className="w-screen flex flex-col mt-24 text-center items-center justify-center">
                <h2 className="font-semibold text-xl p-2">
                    Hello {userSession?.user?.name}!!
                </h2>
                <ProjectsView initialProjects={projects} authType={(
                    //@ts-ignore
                    userSession.user?.provider as "google" | "github"
                )} email={userSession.user?.email!} />
            </div>
        </>)
    } catch (err) {
        console.log(err)
        redirect("/login")
    }

}