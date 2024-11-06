import HeroVideoDialog from "@/components/ui/hero-video-dialog"

export function HeroVideoDialogDemo() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        <div className="w-full lg:w-1/2 sticky top-24">
          <HeroVideoDialog
            className="dark:hidden w-full"
            animationStyle="from-center"
            videoSrc="https://res.cloudinary.com/dzzc5hz1y/video/upload/v1730876219/about_ddovbd.mp4"
            thumbnailSrc="/images/thumbnail.webp"
            thumbnailAlt="Why Choose Us"
            width="w-full"
          />
          <HeroVideoDialog
            className="hidden dark:block w-full"
            animationStyle="from-center"
            videoSrc="https://res.cloudinary.com/dzzc5hz1y/video/upload/v1730876219/about_ddovbd.mp4"
            thumbnailSrc="/images/thumbnail.webp"
            thumbnailAlt="Why Choose Us"
            width="w-full"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent ">
            Meet Everything Talent
          </h1>
          <p className="text-base md:text-lg mb-6">
            Your free AI-powered recruitment ally that&apos;s changing the game in tech hiring! Tired of endless resume scanning and uncertain candidate skills? We&apos;ve got you covered with a completely free ATS that does the heavy lifting.
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Import candidates directly from LinkedIn</li>
            <li>Send automated technical assessments across 15+ programming languages</li>
            <li>Let our AI handle the evaluation with advanced anti-cheat technology</li>
            <li>Access over 1,500 pre-vetted technical questions</li>
            <li>Get detailed performance reports</li>
            <li>Add unlimited team members</li>
          </ul>
          <p className="text-base md:text-lg mb-6">
            Whether you&apos;re a startup or staffing firm, Everything Talent helps you build your dream tech team without spending a dime. Ready to revolutionize your hiring process? Let&apos;s make your next hire your best hire!
          </p>
          <div className="space-y-2">
            <p className="font-semibold">👈 Watch The Video To Learn More!</p>
            <p>🎯 Get All Your Questions Answered</p>
            <p>🔍 Discover How Everything Talent Can Transform Your Hiring Process</p>
            <p>🚀 See Our Platform In Action</p>
          </div>
        </div>
      </div>
    </div>
  )
}