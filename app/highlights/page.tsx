import Image from "next/image"
import { Heart } from "lucide-react"

export default function Highlights() {
  const timelineEvents = [
    {
      date: "September 20th 2023",
      title: "Babouche",
      subtitle: "Love at first step",
      description:
        "Volleyball night on a Wednesday. Claudia notices Amine's babouches (belgha) and makes fun of him. Amine sees this as an opportunity and, while walking her back home, asks her out",
      image: "/babouche.jpg?height=600&width=400",
      aspectRatio: "aspect-square", // 1:1 ratio
    },
    {
      date: "September 23rd 2023",
      title: "First Date",
      subtitle: "Spontaneity and a first kiss",
      description:
        "After meeting Claudia at Cité, Amine planned for them to visit a friperie then sit at a café. While going there, they stumble upon a techno parade in the middle of an open market in the 11e. Highlights include polish movie posters, a lovely bar and red lipstick all over their faces",
      image: "/kiss.jpg?height=4600&width=400",
      aspectRatio: "aspect-[4/5]", // Portrait ratio
    },
    {
      date: "November 4th 2023",
      title: "Julia's Pizza",
      subtitle: "The best pizza in Paris",
      description: "Balancing pizza on a Velib is harder than it seems",
      image: "/julia.jpg?height=600&width=400",
      aspectRatio: "aspect-[3/4]", // Portrait ratio
    },
    {
      date: "May 12th 2024",
      title: "Poland and the first 'I love you'",
      subtitle: "Zakopane, Krakow, Rzeszow and Warszawa",
      description:
        "Amine joins Claudia in Poland and discovers a variety of landscapes, foods and skin tones. Claudia makes him discover her hometown (not NY), its local landmarks (Vive Profit) and her lovely mother, Malgosza. The trip ends with Agatha's amazing vodka-themed wedding",
      image: "/zakop.jpg?height=400&width=600",
      aspectRatio: "aspect-[3/2]", // Landscape ratio
    },
    {
      date: "June 29th 2024",
      title: "Moving together",
      subtitle: "(temporarily)",
      description:
        "Claudia moves in with Amine in his slum. Daily life is tough. Amine is too strict about tidyness and Claudia enjoys carcass perfume. They eventually adapt to each other, both learning about compromise.",
      image: "/bed.jpg?height=600&width=600",
      aspectRatio: "aspect-square", // 1:1 ratio
    },
    {
      date: "January 10th 2025",
      title: "First trip in France",
      subtitle: "La-Ferté-en-Ouche",
      description:
        "Claudia and Amine decide to leave Paris for a relaxing weekend. They discover Normandie through its local produce and landscapes. The quite house offers a lovely escape from city life, with its charming chimney and wooden staircase. Claudia drives into another car.",
      image: "/normandie.jpg?height=400&width=600",
      aspectRatio: "aspect-[3/2]", // Landscape ratio
    },
  ]

  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-6 text-primary text-center">Core Memories</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
        Making memories is important. An obvious statement, yet overlooked. 
        Here is an attempt to highlight the significance of our fondest moments.
        Let it be a token of my sincere willingness to improve in this aspect, and many more.
        I have faith this list can go on for years to come.
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -ml-0.5"></div>

        {/* Timeline events */}
        <div className="space-y-16">
        {timelineEvents.map((event, i) => {
            // Determine if this item should be on the left or right
            // First item (0) on left, second (1) on right, and so on
            const isOnLeft = i % 2 === 0

            return (
            <div key={i} className="relative flex items-center">
              {/* Date marker */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center z-10">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Heart className="h-3 w-3 text-white" fill="white" />
                </div>
              </div>

                {/* Left side content */}
                <div className={`w-1/2 pr-12 ${isOnLeft ? "block" : "hidden"}`}>
                <div className="bg-accent/50 rounded-lg overflow-hidden shadow-sm border border-primary/10 ml-auto">
                  <div className={`relative w-full ${event.aspectRatio}`}>
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-2">
                      {event.date}
                    </span>
                    <h3 className="text-xl font-bold text-secondary">{event.title}</h3>
                    <h4 className="text-sm text-muted-foreground mb-2">{event.subtitle}</h4>
                    <p className="text-sm">{event.description}</p>
                  </div>
                </div>
              </div>

                {/* Right side content */}
                <div className={`w-1/2 pl-12 ${!isOnLeft ? "block" : "hidden"}`}>
                <div className="bg-accent/50 rounded-lg overflow-hidden shadow-sm border border-primary/10">
                  <div className={`relative w-full ${event.aspectRatio}`}>
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-2">
                      {event.date}
                    </span>
                    <h3 className="text-xl font-bold text-secondary">{event.title}</h3>
                    <h4 className="text-sm text-muted-foreground mb-2">{event.subtitle}</h4>
                    <p className="text-sm">{event.description}</p>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

