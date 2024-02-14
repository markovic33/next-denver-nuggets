import { LandPlot, Trophy } from "lucide-react";
import Image from "next/image";

export default function Milestone() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl text-yellow-400 uppercase mt-5">
        Denver Nuggets Milestone
      </h1>
      <div className="flex flex-col gap-5 lg:flex-row  lg:gap-2 p-10">
        <div className="w-full  lg:w-1/2 h-full">
          <Image
            src={`/mil.webp`}
            width={500}
            height={500}
            alt="milestone"
            className="object-fill rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <LandPlot className="text-green-400" /> Denver Nuggets Milestone
          Celebration!
          <br /> We're excited to share this incredible achievement with our
          fans and the entire Denver Nuggets community. Today, we mark a
          significant milestone in our journey—a testament to the dedication,
          passion, and resilience that define the spirit of the Nuggets.
          <br /> Milestone Reached: [Specify the milestone, e.g., 50 years in
          the league, reaching a championship, etc.]
          <br /> Over the years, we've experienced unforgettable moments,
          celebrated victories, and faced challenges head-on. This milestone is
          not just a number; it's a reflection of the unwavering support from
          our amazing fans, the hard work of our players and staff, and the rich
          history that continues to unfold.
          <br /> Thank You, Nuggets Nation! We extend our heartfelt gratitude to
          every fan who has been part of this incredible journey. Your passion
          fuels our drive, and we're grateful for your continuous support.
          <br /> <Trophy className="text-yellow-300" /> Looking Ahead: As we
          celebrate this milestone, our eyes are set on the future. The best is
          yet to come, and we're excited to build on this legacy together with
          our dedicated fans and the entire Nuggets family. #MileHighPride
          #DenverNuggets #MilestoneCelebration" Feel free to customize the text
          based on the specific milestone you're celebrating or any additional
          details you'd like to include.
        </div>
      </div>
    </div>
  );
}
