"use client"

import { useState } from "react"
import Image from "next/image"

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/tajine.jpg?height=800&width=800",
      alt: "First tajine at the slum - September 25th 2023",
      description:
        "Claudia discovers Moroccan cuisine through Amine's tajine. Beautiful yet spicy, just like his guest.",
    },
    {
      src: "/picasso.jpg?height=800&width=800",
      alt: "Pablo Picasso portrait - November 2nd 2023",
      description: "Claudia's favorite portrait",
    },
    {
      src: "/coat_1.jpg?height=800&width=800",
      alt: "Black coat - November 12th 2023",
      description:
        "Claudia chooses practicality over fashion by wearing Amine's beautiful vintage black coat. She went to see a Molière theatre piece dressed like that. Bold.",
    },
    {
      src: "/turkey_1.jpg?height=800&width=800",
      alt: "Thanksgiving - November 25th 2023",
      description:
        "Stuffing the 60 euros turkey from New Jersey with style. Lovely evening at the first Cité house: Maison Deutsche de la Meurthe (DDM)",
    },
    {
      src: "/fontainebleau.jpg?height=800&width=800",
      alt: "Fontainebleau hike - March 3rd 2024",
      description:
        "First hike together in Fontainebleau. Claudia and Elena kept trashing Amine the whole time, rightfully so.",
    },
    {
      src: "/maqam.jpg?height=800&width=800",
      alt: "Photomaton x Ma9am - March 20th 2024",
      description: "Claudia styling their photomaton pictures on top of Amine's Oud sheet music.",
    },
    {
      src: "/postcard.jpg?height=800&width=800",
      alt: "Postcard from Poland - April 11th 2024",
      description:
        "Amine receiving Claudia's postcard from Poland. It felt like she was stranded there for years. Amine missed her a lot during that time.",
    },
    {
      src: "/reunite.jpg?height=800&width=800",
      alt: "Reuniting in Poland - May 14th 2024",
      description:
        "After being separated for months, Amine and Claudia reunite in Krakow at 5 am. Amine had just arrived with a night train and Claudia decided it was the best time to go for a hike until dusk. Lovely memories were built and they learned a lot about each other.",
    },
    {
      src: "/wedding_1.jpg?height=800&width=800",
      alt: "Agatha's wedding - May 21st 2024",
      description:
        "Celebrating Agatha's lovely wedding. Claudia shared her culture with Amine: rock dancing, vodka worship and great food (except soup at 2 am). They both looked great despite Amine's suit. Claudia balanced it out with her gorgeous dress and makeup.",
    },
    {
      src: "/amine_cite.jpg?height=800&width=800",
      alt: "The end of Amine Cité - June 8th 2024",
      description: "After months of battling, Claudia finally changes Amine's contact name.",
    },
    {
      src: "/felon.jpg?height=800&width=800",
      alt: "Claudia's olympic games picture - July 17th 2024",
      description: "Convicted felon.",
    },
    {
      src: "/olympic.jpg?height=800&width=800",
      alt: "Track running final - August 5th 2024",
      description:
        "Thanks to Claudia's exemplary social skills, she was able to get tickets for the track running final of the Olympic Games. Amine was sincerely grateful.",
    },
    {
      src: "/hairdryer.jpg?height=800&width=800",
      alt: "Claudia gets a hair dryer - October 10th 2024",
      description:
        "Amine is traumatized with the hair dryer sound. Cats freak out when they hear it. Amine wants to hang himself when he does. Different folks different strokes. (This also applies to the electric toothbrush but he somehow manages to withstand the pain.)",
    },
    {
      src: "/opera.jpg?height=800&width=800",
      alt: "First opera night - October 31st 2024",
      description:
        "After more than a year of planning, Claudia and Amine managed to go to the Opera together. It was a beautiful ballet about old Austrian royalty. Potentially the only time Amine was dressed better than Claudia.",
    },
    {
      src: "/new_year.jpg?height=800&width=800",
      alt: "New Year's Eve - January 1st 2025",
      description:
        "After a dinner at Cité organized by Claudia, they went to Pont de l'Alma (?) to watch the fireworks and take this lovely picture.",
    },
  ]

  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-6 text-primary text-center">Mosaic</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto text-center">
        An even larger collection of memories celebrating shared moments, big and small.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, i) => (
          <div
            key={i}
            className="relative rounded-lg overflow-hidden h-80 group shadow-sm border border-primary/10"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay that appears on hover */}
            <div
              className={`absolute inset-0 bg-primary/70 flex items-end transition-opacity duration-300 ${hoveredIndex === i ? "opacity-100" : "opacity-0"}`}
            >
              <div className="p-4 text-white">
                <h3 className="font-semibold mb-1 text-white">{image.alt}</h3>
                <p className="text-sm text-white">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ellipsis to indicate more is coming */}
      <div className="flex justify-center mt-16 mb-8">
        <div className="flex space-x-4">
          <div className="w-4 h-4 rounded-full bg-primary"></div>
          <div className="w-4 h-4 rounded-full bg-primary"></div>
          <div className="w-4 h-4 rounded-full bg-primary"></div>
        </div>
      </div>
    </main>
  )
}

