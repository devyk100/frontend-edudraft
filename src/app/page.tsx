import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center  px-4">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">EduDraft</h1>
        <h2 className="text-xl text-blue-600 font-medium">
          AI-Enhanced Question Paper Generation System
        </h2> 

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">📌 Goal</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300">
            To enable educators to generate exam-ready question papers tailored to curriculum guidelines, with smart features like blueprint alignment, marking scheme generation, and minimal but effective question variability — all in an intuitive document editor.
          </CardContent>
        </Card>
        <Link href={""}>
          <Button className="mt-4">Get Started</Button>
        </Link>
      </div>
    </main>
  )
}