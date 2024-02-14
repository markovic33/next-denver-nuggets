import { LandPlot } from "lucide-react";
import Image from "next/image";

export default function Players() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl text-yellow-400 uppercase mt-5">
        Denver Nuggets Players
      </h1>
      <div className="flex flex-col gap-5 lg:flex-row  lg:gap-2 p-10">
        <div className="w-full  lg:w-1/2 h-full">
          <Image
            src={`/players.png`}
            width={500}
            height={500}
            alt="milestone"
            className="object-fill rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          Denver Nuggets Players: Tales of Excellence on the Court
          <br />
          <LandPlot className="text-orange-400" /> The Denver Nuggets have been
          graced by a roster of exceptional players who have left an indelible
          mark on the franchise's storied history. From legendary veterans to
          rising stars, each player has contributed to the Mile High legacy in
          their unique way.
          <br />
          Alex English (1979-1990): The Scoring Virtuoso During his illustrious
          tenure with the Nuggets, Alex English became the franchise's all-time
          leading scorer, showcasing a scoring prowess that defined an era. His
          smooth jump shot and offensive brilliance made him a fan favorite and
          an enduring icon in Nuggets history.
          <br />
          Dikembe Mutombo (1991-1996): The Defensive Force Dikembe Mutombo, a
          towering presence in the paint, left an indomitable mark on the
          Nuggets' defensive identity. His shot-blocking ability and defensive
          intensity earned him multiple All-Star selections and a lasting legacy
          as one of the greatest rim protectors in NBA history.
          <br />
          Carmelo Anthony (2003-2011): The Scoring Sensation Carmelo Anthony, a
          dynamic scorer with a lethal offensive arsenal, led the Nuggets to
          multiple playoff appearances. His scoring titles, All-Star selections,
          and memorable performances solidified his status as one of the most
          prolific players in Nuggets history.
          <br />
          Chauncey Billups (1998-2000, 2008-2011): The Clutch Performer Chauncey
          Billups, known as "Mr. Big Shot," played a pivotal role in guiding the
          Nuggets to deep playoff runs. His leadership, clutch performances, and
          basketball IQ endeared him to fans and contributed to the team's
          success during his stints in Denver.
          <br />
          Nikola Jokic (2015-Present): The Serbian Maestro In the present era,
          Nikola Jokic has emerged as the face of the franchise, showcasing
          unparalleled skills as a playmaking center. The "Joker" has earned MVP
          honors, All-Star selections, and led the Nuggets to new heights with
          his unique and versatile style of play.
          <br />
          Jamal Murray (2016-Present): The Playoff Hero Jamal Murray, known for
          his electrifying performances in the playoffs, has become a rising
          star for the Nuggets. His scoring ability, especially in clutch
          moments, has ignited the excitement of Nuggets fans worldwide.
          <br />
          As we celebrate the players who have donned the Nuggets jersey, their
          contributions to the team's success and the memories they've created
          on the court will forever be etched in Denver Nuggets lore. Here's to
          the past, present, and future of excellence in Nuggets basketball!
          <br /> #DenverNuggets #NuggetsPlayers #BasketballLegends
          #MileHighBasketball
        </div>
      </div>
    </div>
  );
}
