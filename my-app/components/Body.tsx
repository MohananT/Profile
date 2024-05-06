import { BadgeCheck } from "lucide-react"

export default function Body() {
    return (
        <div className="">
            <div>
                <h6 className="text-4xl font-medium">hey, I'm Mohanan 👋🏻</h6>
            </div>
            <div className="mt-5 mb-5 flex">
                <div className="mr-2 font-medium"><BadgeCheck /></div>
                <p className="font-medium">Available to help you build fast and clever software solutions</p>
            </div>
            <div className="text-sm font-light tracking-normal leading-loose">
                A seasoned freelance full-stack developer with nearly 10 years of experience in web and desktop app development.
                Proficient in front-end (HTML, CSS, JavaScript, React/Angular/Next.js)
                and back-end (Node.js, Python, Go) technologies.
                Skilled in project management, delivering tailored solutions efficiently.
            </div>
            
            <div className="text-sm font-light tracking-normal leading-loose mt-5">
                Over the past decade, I've grown from a Software developer to a Technial leader in the largest corporations.
                Having learnt extensively from all my acquintances is one of my most valuable assets, on the human and technical level.
            </div>

            <div className="text-sm font-light tracking-normal leading-loose mt-5">
                Reach out to me for a permanent work in an organisation or freelance gig so that we can collaborate together.
            </div>
        </div>
    )
}