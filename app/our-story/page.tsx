import Image from "next/image"

export default function OurStory() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-10 text-primary text-center">Debut</h1>

      {/* Large centered image - ADJUST SIZE HERE */}
      {/* For manual adjustment: 
          - Change the "max-w-[800px]" to your desired width
          - Change the "h-[533px]" to your desired height
          - Change the "aspect-[800/533]" to match your image's aspect ratio */}
      <div className="relative max-w-[800px] h-[533px] aspect-[800/533] mx-auto mb-10 rounded-lg overflow-hidden shadow-sm border border-primary/10">
        <Image src="/ddm_2.jpg?height=533&width=800" alt="Our story" fill className="object-cover" />
      </div>

      {/* Text content at the bottom - ADJUST WIDTH HERE */}
      {/* For manual adjustment:
          - Change the "max-w-5xl" to adjust the maximum width of the text container
          - Common width options: max-w-4xl, max-w-5xl, max-w-6xl, or use custom width like max-w-[1000px] */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-secondary text-center">
          Cité Universitaire Internationale de Paris - September 2023
        </h2>
        <div className="bg-accent/50 p-8 rounded-lg shadow-sm">
          <p className="leading-relaxed text-lg">
              Volleyball had been Amine's favorite activity in the past year. He would go at least 2 times a week and
              always volunteer to set up and take out the courts. Every moment was enjoyable and it was his way of
              showing appreciation to the volleyball gods. The atmosphere was special: he felt at home. People who know
              him through volleyball have a hard time recognizing him outside of it. His personality is completely
              different, and you have noticed it yourself. The gym at Maison des Arts et Métiers was his safe place,
              until September 2023. An American girl started coming to the gym, easily noticeable with her bright smile
              and pink short shorts. Memorable shorts indeed as they showcase part of her lovely butt. Amine had noticed
              her since the first class but never found it in him to walk up to her, until she did. One day, he was
              happy to practice Italian with a newly found friend, and there she came, naturally joining the
              conversation. Social butterflies had always amazed him, but Claudia was on another level. A few days
              later, he was wearing my babouches, a common practice during the warm days. As he was exiting the
              building, Claudia came up to Amine with her friend and complimented or mocked his yellow slippers. He
              genuinely could not remember what she was saying as he was just happy to talk to her. They kept talking
              until her friend left, after which they were alone, walking towards her place. He remembers feeling
              excited when her friend left, as it was a spoon-fed opportunity. The conversation was natural, effortless.
              The two arrived underneath a street lamp, located between Maison Deutsche de la Meurthe and Maison du Canada. After a deep breath,
              Amine decided to seize the moment. "Before we leave, would you like to go out for a walk or drink in the
              next few days?" He was panicking. Claudia paused for a moment. He felt horrible. After what felt like an
              eternity, she smiled and answered "yes".
          </p>
        </div>
      </div>
    </main>
  )
}

