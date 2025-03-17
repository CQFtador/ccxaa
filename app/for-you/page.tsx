import { Heart } from "lucide-react"

export default function ForYou() {
  return (
    <main className="container py-12">
      <div className="max-w-2xl mx-auto bg-accent/50 p-8 md:p-12 rounded-lg shadow-sm border border-primary/10">
        <div className="text-center mb-8">
          <Heart className="h-10 w-10 text-primary mx-auto mb-4" fill="#e8b4b8" />
          <h1 className="text-4xl font-bold mb-6 text-primary">Kochana Moja</h1>
          <div className="w-24 h-0.5 bg-primary/30 mx-auto"></div>
        </div>

        <div className="space-y-6 text-center">
          <p className="text-lg leading-relaxed"></p>

          <p className="text-lg leading-relaxed">
            The relationship we built together is special. You are the person I have loved the most in my lifetime. What we built is the healthiest love
            I have ever known and it is the last thing I wish to give up on.
            Our fond memories are always in my heart. I often reminisce about them but also the bitter ones.
            They have taught me valuable lessons about myself and today serve as lanterns in the path of betterment.
          </p>

          <p className="text-lg leading-relaxed">
            I am sincerely sorry for my behaviour. My intentions were never to hurt yet I have no excuse. I was confused and it drove me to disregard 
            you and myself. For our relationship, for you, I will be better and we will build something even more beautiful than before.
          </p>

          <p className="text-lg leading-relaxed">
            My promise is a complete change of approach. I now view our relationship, and life as a whole, in a new fashion.
            My new stance is a more active and effortful one. I do not want us to cruise and drift through life.
            I want us to plan our future, think in the long term, communicate better and put in constant, consistent effort.
          </p>

          <p className="text-lg leading-relaxed">
            Your smile and humour make the hard times softer. Your energy and passion push me to be more active and seize the moment.
            Your love makes me a better person and I want to keep cultivating it with you.
            My wish is to be your support through life. Help you through the tough times and live up to the high standard of someone you can rely on.
          </p>

          <p className="text-lg leading-relaxed">
            Family and relationships were always two separate worlds in my mind. Your words made me realize how wrong my view was.
            Now it is clear and I truly believe it: you are family.
          <div className="pt-6">
            <p className="text-lg font-medium text-primary">With all my heart, I love you</p>
            <p className="text-lg">Amine</p>
          </div>
        </div>
      </div>
    </main>
  )
}

