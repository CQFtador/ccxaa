export default function Quote() {
    return (
      <main className="container py-12 flex items-center justify-center min-h-[80vh]">
        <div className="max-w-3xl mx-auto bg-accent/30 p-8 md:p-16 rounded-lg shadow-sm border border-primary/10 relative">
          {/* Large decorative quote mark */}
          <div className="absolute top-6 left-6 text-primary/20 text-9xl font-serif leading-none">"</div>
  
          <blockquote className="relative z-10 text-center px-4 md:px-8">
            <p className="text-xl md:text-2xl italic leading-relaxed text-secondary-foreground">
            Love is awful. It's awful. It’s painful. It’s frightening. It makes you doubt yourself, judge yourself, distance yourself from the other
            people in your life. It makes you selfish. It makes you creepy, makes you obsessed with your hair, makes you cruel, makes you say and do
            things you never thought you would do. It’s all any of us want, and it’s hell when we get there. So no wonder it’s something we don’t want
            to do on our own. I was taught if we’re born with love then life is about choosing the right place to put it. People talk about that a lot,
            feeling right, when it feels right it’s easy. But I’m not sure that’s true. It takes strength to know what’s right. And love isn’t something
            that weak people do. Being a romantic takes a hell of a lot of hope. I think what they mean is, when you find somebody that you love, it feels
            like hope.
            </p>
  
            <footer className="mt-8">
              <div className="w-16 h-0.5 bg-primary/30 mx-auto mb-4"></div>
              <cite className="text-primary font-medium not-italic">Fleabag</cite>
            </footer>
          </blockquote>
  
          {/* Large decorative closing quote mark */}
          <div className="absolute bottom-6 right-6 text-primary/20 text-9xl font-serif leading-none rotate-180">"</div>
        </div>
      </main>
    )
  }
  
  